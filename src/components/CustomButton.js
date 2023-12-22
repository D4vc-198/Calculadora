import "./../styles/CustomButton.css";

const CustomButton = (props) => {
  const { value, typeButton, setScreenText } = props;

  const typeButtonClass = (typeButton) => {
    switch (typeButton) {
      case "number":
        return "btn-number";
      case "operation-basic":
        return "btn-operation-basic";
      case "operation-advanced":
        return "btn-operation-advanced";
      case "action-clear":
        return "btn-action-clear";
      case "action-del":
        return "btn-action-del";
      case "action-result":
        return "btn-action-result";
      default:
        return "";
    }
  };

  const updateText = (e) => {
    setScreenText((prevScreenText) => prevScreenText.length <= 13 ? prevScreenText + e.target.value : prevScreenText)
  }

  return (
    <button
      className={`custom-btn ${typeButtonClass(typeButton)}`}
      value={value}
      onClick={(e) => updateText(e)}
    >
      {value}
    </button>
  );
};

export default CustomButton;
