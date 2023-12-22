import { useEffect, useState } from "react";
import CustomButton from "./components/CustomButton";
import "./styles/App.css";

function App() {
  const [screenText, setScreenText] = useState('')

  useEffect(() => {
    console.log(screenText)
  }, [screenText])
  
  return (
    <div className="calculator-container">
      <div className="calculator-screen-container"></div>
      <div className="calculator-buttons-container">
        <CustomButton typeButton="action-clear" value="AC" setScreenText={setScreenText}/>
        <CustomButton typeButton="operation-advanced" value="&#37;" setScreenText={setScreenText}/>
        <CustomButton typeButton="operation-advanced" value="/" setScreenText={setScreenText}/>
        <CustomButton typeButton="action-del" value="DEL" />

        <CustomButton typeButton="number" value="7" setScreenText={setScreenText} />
        <CustomButton typeButton="number" value="8" setScreenText={setScreenText} />
        <CustomButton typeButton="number" value="9" setScreenText={setScreenText} />
        <CustomButton typeButton="operation-basic" value="x" setScreenText={setScreenText}/>

        <CustomButton typeButton="number" value="4" setScreenText={setScreenText}/>
        <CustomButton typeButton="number" value="5" setScreenText={setScreenText}/>
        <CustomButton typeButton="number" value="6" setScreenText={setScreenText}/>
        <CustomButton typeButton="operation-basic" value="-" setScreenText={setScreenText}/>

        <CustomButton typeButton="number" value="1" setScreenText={setScreenText}/>
        <CustomButton typeButton="number" value="2" setScreenText={setScreenText}/>
        <CustomButton typeButton="number" value="3" setScreenText={setScreenText}/>
        <CustomButton typeButton="operation-basic" value="+" setScreenText={setScreenText}/>
        
        <CustomButton typeButton="number" value="0" setScreenText={setScreenText}/>
        <CustomButton typeButton="number" value="." setScreenText={setScreenText}/>
        <CustomButton typeButton="action-result" value="=" />
      </div>
    </div>
  );
}

export default App;
