import Gameboard from "./components/Gameboard";
import Player from "./components/Player";
import { useState } from "react";
import Log from "./components/log";
import { WINNING_COMBINATIONS } from "./winning-combination";
import Gameover from "./components/GameOver";
const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function App() {
  const derivedplayer = (gameturn) => {
    let currentplayer = "X";
    if (gameturn.length > 0 && gameturn[0].player === "X") {
      currentplayer = "O";
    }
    return currentplayer;
  };
  const [gameTurn, setTurn] = useState([]);
  // const [activePlayer, setActiveplayer] = useState("X");
  let gameboard = initialGameboard;
  let winner;
  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;

    gameboard[row][col] = player;
  }
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameboard[combination[0].row][combination[0].column];
    const SecondSquare = gameboard[combination[1].row][combination[1].column];
    const thirdSquare = gameboard[combination[2].row][combination[2].column];

    if (
      firstSquare &&
      firstSquare === SecondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = firstSquare;
    }
  }
  const activePlayer = derivedplayer(gameTurn);
  const handlerSquare = (rowIn, colIn) => {
    // setActiveplayer((curActiveplr) => (curActiveplr === "X" ? "O" : "X"));
    setTurn((prevturn) => {
      const currentplayer = derivedplayer(prevturn);
      const updatedboard = [
        { square: { row: rowIn, col: colIn }, player: currentplayer },
        ...prevturn,
      ];
      return updatedboard;
    });
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {winner && <Gameover winner={winner} />}
        <Gameboard onSelectsquare={handlerSquare} board={gameboard} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
