// import { useState } from "react";

export default function Gameboard({ onSelectsquare, board }) {
  //   const [gameboard, setgameboard] = useState(initialGameboard);
  //   function playerHandler(rowIndex, colIndex) {
  //     setgameboard((prevboard) => {
  //       const updatedboard = [...prevboard].map((innerarray) => [...innerarray]);
  //       updatedboard[rowIndex][colIndex] = activeplayer;
  //       return updatedboard;
  //     });
  //   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIn) => (
              <li key={colIn}>
                <button
                  onClick={() => onSelectsquare(rowIndex, colIn)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
