import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import CounterConfigure from "./components/Counter/CounterConfigure.jsx";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);
  const handleCount = (newCount) => {
    setChosenCount(newCount);
  };

  return (
    <>
      <Header />
      <main>
        <CounterConfigure onSet={handleCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
