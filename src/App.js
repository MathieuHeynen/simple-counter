import "./App.css";
import Button from "./components/button";
import Counter from "./components/counter";
import { useState } from "react";

function App() {
  const [counting, setCounting] = useState(0);

  function increasingCounter() {
    setCounting((previousValue) => previousValue + 1);
  }

  function decreasingCounter() {
    setCounting((previousValue) =>
      previousValue === 0 ? previousValue : previousValue - 1
    );
  }

  function resetCounter() {
    setCounting(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Counter text={counting} />
        <div className="allButtons">
          <div className="plusMinusButtons">
            <Button
              className="decreasingButton"
              onClick={decreasingCounter}
              text="-"
            />
            <Button
              className="increasingButton"
              onClick={increasingCounter}
              text="+"
            />
          </div>
          <Button className="resetButton" onClick={resetCounter} text="RESET" />
        </div>
      </header>
    </div>
  );
}

export default App;
