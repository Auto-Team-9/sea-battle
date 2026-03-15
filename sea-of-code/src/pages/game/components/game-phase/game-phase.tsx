import type { GamePhaseType } from '../../../../types/types';
import Abilities from '../abilities/abilities';
import GameBoard from '../game-board/gameBoard';
import QuestionModal from '../question-modal/questionModal';

const GamePhase = ({ phase, playerBoard, enemyBoard }: GamePhaseType) => {
  const mainBoard = phase === 'playerTurn' ? enemyBoard : playerBoard;

  const miniBoard = phase === 'playerTurn' ? playerBoard : enemyBoard;

  return (
    <div className='flex flex-col'>
      <div className='origin-top-right scale-50 self-end'>
        <GameBoard board={miniBoard} />
      </div>
      <div className='-mt-36 flex gap-8'>
        <Abilities />
        <GameBoard board={mainBoard} />
        <QuestionModal />
      </div>
    </div>
  );
};

export default GamePhase;
