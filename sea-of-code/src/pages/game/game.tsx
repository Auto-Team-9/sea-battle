import { useCallback, useState, useEffect, useRef } from 'react';
import GamePhase from './components/game-phase/game-phase';
import { createBoard } from './utils/createBoard';
import PlacementPhase from './components/placement-phase/placementPhase';
import { createEnemyBoard } from './utils/createEnemyBoard';
import { findShipCells, markSurroundingCells } from './utils/findShipCells';
import { BOARD_SIZE } from '../../constants/constants';
import type { Board } from '../../types/types';
import { useAuth } from '../../firebase/useAuth';
import { updateMatchStats, addAnsweredQuestion } from '../../api/users';

function applyShot(board: Board, row: number, col: number): [Board, boolean] {
  let updated = board.map((rowArr, rIdx) =>
    rIdx === row
      ? rowArr.map((cell, cIdx) => (cIdx === col ? { ...cell, isHit: true } : cell))
      : rowArr
  );
  const target = updated[row][col];
  const wasHit = target.type === 'cell' && target.hasShip;
  if (wasHit) {
    const shipCells = findShipCells(updated, row, col);
    const isSunk = shipCells.length > 0 && shipCells.every(([r, c]) => updated[r][c].isHit);
    if (isSunk) updated = markSurroundingCells(updated, shipCells);
  }
  return [updated, wasHit];
}

function allShipsSunk(board: Board): boolean {
  for (let r = 1; r < BOARD_SIZE; r++) {
    for (let c = 1; c < BOARD_SIZE; c++) {
      const cell = board[r][c];
      if (cell.type === 'cell' && cell.hasShip && !cell.isHit) return false;
    }
  }
  return true;
}

const Game = () => {
  const { user, userData } = useAuth();
  const [phase, setPhase] = useState('placement');
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [gameResult, setGameResult] = useState<'win' | 'lose' | null>(null);
  const [showModal, setShowModal] = useState(false);

  const [playerBoard, setPlayerBoard] = useState<Board>(() => createBoard());
  const [enemyBoard, setEnemyBoard] = useState<Board>(() => createEnemyBoard());

  const pendingShot = useRef<[number, number] | null>(null);
  const modalAnsweredCorrectly = useRef(false);
  const statsSaved = useRef(false);

  const handleCheckShip = useCallback(
    (row: number, col: number) => {
      if (!isPlayerTurn || gameResult) return;
      if (row < 1 || row > BOARD_SIZE || col < 1 || col > BOARD_SIZE) return;
      if (enemyBoard[row][col].isHit) return;

      const cell = enemyBoard[row][col];
      const wouldHit = cell.type === 'cell' && cell.hasShip;

      if (!wouldHit) {
        const [newBoard] = applyShot(enemyBoard, row, col);
        setEnemyBoard(newBoard);
        setIsPlayerTurn(false);
      } else {
        pendingShot.current = [row, col];
        modalAnsweredCorrectly.current = false;
        setShowModal(true);
      }
    },
    [isPlayerTurn, gameResult, enemyBoard]
  );


  useEffect(() => {
    if (phase !== 'game' || isPlayerTurn || gameResult) return;

    const timerId = setTimeout(() => {
      const unshotCells: [number, number][] = [];
      for (let r = 1; r < BOARD_SIZE; r++) {
        for (let c = 1; c < BOARD_SIZE; c++) {
          const cell = playerBoard[r][c];
          if (cell.type === 'cell' && !cell.isHit) unshotCells.push([r, c]);
        }
      }

      if (unshotCells.length === 0) {
        setIsPlayerTurn(true);
        return;
      }

      const [row, col] = unshotCells[Math.floor(Math.random() * unshotCells.length)];
      const [newBoard, wasHit] = applyShot(playerBoard, row, col);
      setPlayerBoard(newBoard);

      if (allShipsSunk(newBoard)) {
        setGameResult('lose');
      } else if (!wasHit) {
        setIsPlayerTurn(true);
      }
    }, 800);

    return () => clearTimeout(timerId);
  }, [phase, isPlayerTurn, gameResult, playerBoard]);

  useEffect(() => {
    if (!gameResult || !user || statsSaved.current) return;
    statsSaved.current = true;
    const hasClan = !!userData?.stats?.clan;
    updateMatchStats(user.uid, gameResult, hasClan).catch(console.error);
  }, [gameResult, user]); 
  const handleRestart = useCallback(() => {
    setPlayerBoard(createBoard());
    setEnemyBoard(createEnemyBoard());
    setPhase('placement');
    setIsPlayerTurn(true);
    setGameResult(null);
    setShowModal(false);
    statsSaved.current = false;
    pendingShot.current = null;
    modalAnsweredCorrectly.current = false;
  }, []);

  return (
    <section className='doodle-border relative mx-auto my-4 flex min-h-screen w-full flex-col items-center gap-4 overflow-hidden bg-center p-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-240'>
      {phase === 'placement' && (
        <PlacementPhase
          board={playerBoard}
          setBoard={setPlayerBoard}
          startGame={() => setPhase('game')}
        />
      )}
      {phase === 'game' && (
        <GamePhase
          playerBoard={playerBoard}
          enemyBoard={enemyBoard}
          handleCheckShip={handleCheckShip}
          isPlayerTurn={isPlayerTurn}
          gameResult={gameResult}
          onRestart={handleRestart}
          showModal={showModal}
          answeredIds={userData?.stats?.answeredQuestions ?? []}
          onModalCorrect={(id) => {
            if (user) addAnsweredQuestion(user.uid, id).catch(console.error);
            modalAnsweredCorrectly.current = true;
            const shot = pendingShot.current;
            pendingShot.current = null;
            if (shot) {
              setEnemyBoard(prev => {
                const [newBoard] = applyShot(prev, shot[0], shot[1]);
                if (allShipsSunk(newBoard)) setGameResult('win');
                return newBoard;
              });
            }
          }}
          onModalClose={() => {
            setShowModal(false);
            if (!modalAnsweredCorrectly.current) {
              setIsPlayerTurn(false);
            }
            pendingShot.current = null;
            modalAnsweredCorrectly.current = false;
          }}
        />
      )}
    </section>
  );
};

export default Game;
