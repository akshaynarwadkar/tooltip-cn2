import "./App.css";
import Tooltip from "./components/Tooltip";

const App = () => {
  return (
    <div className="App">
      <button>Alert</button>
      <Tooltip>
        <span className="material-symbols-outlined">info</span>
      </Tooltip>
    </div>
  );
};

export default App;
