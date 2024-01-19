import { useRef, useState } from "react";
export default function Player() {
  const playerName = useRef();
  const [enteredPlayer, setPlayerName] = useState(null);
  function handleClick() {
    setPlayerName(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayer ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
