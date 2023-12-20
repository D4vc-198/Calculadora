import CustomButton from "./components/CustomButton";
import logo from "./logo.svg";
import "./styles/App.css";

function App() {
  return (
    <div className="calculator-container">
      <CustomButton typeButton="number" label="1" />
    </div>
  );
}

export default App;
