import "./index.css";
import Advice from "./components/Advice";
import Date from "./components/Date";
import Time from "./components/Time";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <Time />
      <Date />
      <Advice />
    </div>
  );
}

export default App;
