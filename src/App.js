import CustomButton from "./components/CustomButton";
import logo from "./logo.svg";
import "./styles/App.css";

function App() {
  return (
    <div className="calculator-container">
      <div className="calculator-screen-container"></div>
      <div className="calculator-buttons-container">
        <CustomButton typeButton="number" label="1" />
        <CustomButton typeButton="number" label="1" />
        <CustomButton typeButton="number" label="1" />
        <CustomButton typeButton="number" label="1" />
        <CustomButton typeButton="number" label="1" />
        <CustomButton typeButton="number" label="1" />
        <CustomButton typeButton="number" label="1" />
        <CustomButton typeButton="number" label="1" />
        <CustomButton typeButton="number" label="1" />
        <CustomButton typeButton="number" label="1" />
        <CustomButton typeButton="number" label="1" />
        <CustomButton typeButton="number" label="1" />
        <CustomButton typeButton="number" label="1" />
        <CustomButton typeButton="number" label="1" />
        <CustomButton typeButton="number" label="1" />
        <CustomButton typeButton="number" label="1" />
        <CustomButton typeButton="number" label="1" />
        <CustomButton typeButton="number" label="1" />
        <CustomButton typeButton="number" label="1" />
        <CustomButton typeButton="number" label="1" />
      </div>
    </div>
  );
}

export default App;
