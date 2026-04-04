import type { GamePhaseType } from '../../../../types/types';
import GameBoard from '../game-board/gameBoard';
import { QuestionModal } from '../question-modal/questionModal';
import Abilities from '../abilities/abilities';

const GamePhase = ({ phase, playerBoard, enemyBoard, handleCheckShip }: GamePhaseType) => {
  const mainBoard = phase === 'playerTurn' ? enemyBoard : playerBoard;

  const miniBoard = phase === 'playerTurn' ? playerBoard : enemyBoard;

  return (
    <div className='flex flex-col'>
      <div className='origin-top-right scale-50 self-end'>
        <GameBoard board={miniBoard} />
      </div>
      <div className='-mt-36 flex gap-8'>
        <Abilities />
        <GameBoard board={mainBoard} onShipClick={handleCheckShip} enemy={true} />
        <QuestionModal
          topic={'fundamentals'}
          difficulty={'Beginner'}
          onCorrect={() => {}}
          onClose={() => {}}
        />
      </div>
    </div>
  );
};

export default GamePhase;
