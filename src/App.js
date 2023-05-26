// import logo from './logo.svg';
import "./App.css";
import Timer from "./components/timer/timer";
import Score from "./components/score/score";

function App() {
  return (
    <div>
      <header className="header">
        <h1>Match Game</h1>
      </header>
      <div style={{}}>
        <Score teamName="Home"></Score>
        <Score teamName="Visit"></Score>
        <div
          style={{
            height: "50px",
            width: "100%",
          }}
        >
          <Timer></Timer>
        </div>
      </div>
    </div>
  );
}

export default App;
