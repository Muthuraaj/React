export default function Gameover({ winner }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} Won!</p>}
      <p>
        <button>Rematch !</button>
      </p>
    </div>
  );
}
