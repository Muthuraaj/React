import Player from "./components/Player.jsx";
import TimeChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title={"Easy"} targetTime={1} />
        <TimeChallenge title={"Moderate"} targetTime={2} />
        <TimeChallenge title={"Getting tough"} targetTime={3} />
        <TimeChallenge title={"Tough"} targetTime={4} />
      </div>
    </>
  );
}

export default App;
