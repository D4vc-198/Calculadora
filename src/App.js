import CustomButton from "./components/CustomButton";
import "./styles/App.css";

function App() {
  return (
    <div className="calculator-container">
      <div className="calculator-screen-container"></div>
      <div className="calculator-buttons-container">
        <CustomButton typeButton="action" label="AC" />
        <CustomButton typeButton="operation-advanced" label="&#37;" />
        <CustomButton typeButton="operation-advanced" label="&#247;"/>
        <CustomButton typeButton="number" label="DEL" />

        <CustomButton typeButton="number" label="7" />
        <CustomButton typeButton="number" label="8" />
        <CustomButton typeButton="number" label="9" />
        <CustomButton typeButton="operation-basic" label="X" />

        <CustomButton typeButton="number" label="4" />
        <CustomButton typeButton="number" label="5" />
        <CustomButton typeButton="number" label="6" />
        <CustomButton typeButton="operation-basic" label="-" />

        <CustomButton typeButton="number" label="1" />
        <CustomButton typeButton="number" label="2" />
        <CustomButton typeButton="number" label="3" />
        <CustomButton typeButton="operation-basic" label="+" />
        
        <CustomButton typeButton="number" label="0" />
        <CustomButton typeButton="number" label="." />
        <CustomButton typeButton="number" label="()" />
        <CustomButton typeButton="operation-basic" label="=" />
      </div>
    </div>
  );
}

export default App;
