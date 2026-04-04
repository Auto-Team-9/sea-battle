import type { GamePhaseType } from '../../../../types/types';
import GameBoard from '../game-board/gameBoard';
import { QuestionModal } from '../question-modal/questionModal';
import Abilities from '../abilities/abilities';

const GamePhase = ({
  playerBoard,
  enemyBoard,
  handleCheckShip,
  isPlayerTurn,
  gameResult,
  onRestart,
  showModal,
  onModalClose,
  onModalCorrect,
  answeredIds,
}: GamePhaseType) => {
  return (
    <div className='flex flex-col'>
      {/* Status bar */}
      <div className='mb-2 text-center text-2xl font-semibold'>
        {gameResult === 'win' && <span className='text-green-500'>You win!</span>}
        {gameResult === 'lose' && <span className='text-red-500'>You lose!</span>}
        {!gameResult && (isPlayerTurn ? 'Your turn — choose a cell' : 'Opponent is thinking...')}
      </div>

      {/* Mini map — player's own ships, scaled down, top-right */}
      <div className='origin-top-right scale-50 self-end'>
        <GameBoard board={playerBoard} />
      </div>

      {/* Main enemy board + aside */}
      <div className='-mt-36 flex gap-8'>
        <Abilities />
        <GameBoard board={enemyBoard} onShipClick={handleCheckShip} enemy={true} />
      </div>

      {/* Question modal — shown only on hit */}
      {showModal && (
        <QuestionModal
          topic={'fundamentals'}
          difficulty={'Beginner'}
          answeredIds={answeredIds}
          onCorrect={onModalCorrect ?? (() => {})}
          onClose={onModalClose ?? (() => {})}
        />
      )}

      {/* Restart button after game over */}
      {gameResult && (
        <button
          onClick={onRestart}
          className='doodle-border mt-4 cursor-pointer self-center px-6 py-2 text-2xl transition-colors hover:animate-pulse hover:text-amber-500'
        >
          Lets play again
        </button>
      )}

      {/* Mid-game restart — goes back to placement without saving stats */}
      {!gameResult && (
        <button
          onClick={onRestart}
          className='doodle-border mt-4 cursor-pointer self-center px-6 py-2 text-lg transition-colors hover:animate-pulse hover:text-amber-500'
        >
          Restart
        </button>
      )}
    </div>
  );
};

export default GamePhase;
