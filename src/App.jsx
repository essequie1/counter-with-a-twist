import { useState, useContext, createContext } from "react";
import "./App.css";

const countContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <countContext.Provider value={{ handleCount, count }}>
        <CountBtn />
      </countContext.Provider>
    </div>
  );
}

function CountBtn() {
  const context = useContext(countContext);
  const { handleCount, count } = context;

  return (
    <div className="card">
      <button onClick={handleCount}>{count}</button>
    </div>
  );
}

export default App;
