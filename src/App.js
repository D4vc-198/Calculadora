import CustomButton from "./components/CustomButton";
import logo from "./logo.svg";
import "./styles/App.css";

function App() {
  return (
    <div className="calculator-container">
      <CustomButton typeButton="number" label="1" />
      <CustomButton typeButton="number" label="2" />
      <CustomButton typeButton="number" label="3" />
      <CustomButton typeButton="number" label="4" />
      <CustomButton typeButton="number" label="5" />
      <CustomButton typeButton="number" label="6" />
      <CustomButton typeButton="number" label="7" />
      <CustomButton typeButton="number" label="8" />
      <CustomButton typeButton="number" label="9" />
      <CustomButton typeButton="number" label="0" />
    </div>
  );
}

export default App;
