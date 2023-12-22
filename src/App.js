import { useEffect, useState } from "react";
import CustomButton from "./components/CustomButton";
import "./styles/App.css";

function App() {
  const [screenText, setScreenText] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    console.log("screenText: ", screenText)
  }, [screenText]);

  const resultOperation = () => {
    setResult(eval(screenText))
  }

  const delNumber = () => {
    setScreenText(screenText.slice(0, -1))
  }

  const clearScreen = () => {
    setScreenText("")
    setResult("")
  }

  return (
    <div className="calculator-container">
      <div className="calculator-screen-container">
        <div className="calculator-screen-operation">{screenText}</div>
        <div className="calculator-screen-result">{result}</div>
      </div>
      <div className="calculator-buttons-container">
        <CustomButton
          typeButton="action-clear"
          value="AC"
          setScreenText={setScreenText}
          onClick={clearScreen}
        />
        <CustomButton
          typeButton="operation-advanced"
          value="&#37;"
          setScreenText={setScreenText}
        />
        <CustomButton
          typeButton="operation-advanced"
          value="/"
          setScreenText={setScreenText}
        />
        <CustomButton typeButton="action-del" value="DEL" onClick={delNumber} />

        <CustomButton
          typeButton="number"
          value="7"
          setScreenText={setScreenText}
        />
        <CustomButton
          typeButton="number"
          value="8"
          setScreenText={setScreenText}
        />
        <CustomButton
          typeButton="number"
          value="9"
          setScreenText={setScreenText}
        />
        <CustomButton
          typeButton="operation-basic"
          value="*"
          setScreenText={setScreenText}
        />

        <CustomButton
          typeButton="number"
          value="4"
          setScreenText={setScreenText}
        />
        <CustomButton
          typeButton="number"
          value="5"
          setScreenText={setScreenText}
        />
        <CustomButton
          typeButton="number"
          value="6"
          setScreenText={setScreenText}
        />
        <CustomButton
          typeButton="operation-basic"
          value="-"
          setScreenText={setScreenText}
        />

        <CustomButton
          typeButton="number"
          value="1"
          setScreenText={setScreenText}
        />
        <CustomButton
          typeButton="number"
          value="2"
          setScreenText={setScreenText}
        />
        <CustomButton
          typeButton="number"
          value="3"
          setScreenText={setScreenText}
        />
        <CustomButton
          typeButton="operation-basic"
          value="+"
          setScreenText={setScreenText}
        />

        <CustomButton
          typeButton="number"
          value="0"
          setScreenText={setScreenText}
        />
        <CustomButton
          typeButton="number"
          value="."
          setScreenText={setScreenText}
        />
        <CustomButton typeButton="action-result" value="=" onClick={resultOperation}/>
      </div>
    </div>
  );
}

export default App;
