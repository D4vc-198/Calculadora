import { useEffect, useState } from "react";
import CustomButton from "./components/CustomButton";
import "./styles/App.css";

function App() {
  const [screenText, setScreenText] = useState("");
  const [result, setResult] = useState("");
  const [darkMode, setDarkMode] = useState(false)


  useEffect(() => {
    console.log("screenText: ", screenText);
  }, [screenText]);

  // La función eval() es potencialmente peligrosa y puede llevar a código inseguro. Si es posible, evita su uso.
  // La funcion solo se utilizó para fines de prácticas
  const resultOperation = () => {
    try {
      setResult(eval(screenText));
    } catch (e) {
      setScreenText(screenText.slice(0, -1));
    }
  };

  const delNumber = () => {
    setScreenText(screenText.slice(0, -1));
  };

  const clearScreen = () => {
    setScreenText("");
    setResult("");
  };

  return (
    <>
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
          <CustomButton
            typeButton="action-del"
            value="DEL"
            onClick={delNumber}
          />

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
          <CustomButton
            typeButton="action-result"
            value="="
            onClick={resultOperation}
          />
        </div>
      </div>
      <div>
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={(e) => setDarkMode(e.checked)}/>
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
}

export default App;
