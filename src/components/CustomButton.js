import "./../styles/CustomButton.css";

const CustomButton = (props) => {
  const { label, value, typeButton } = props;

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

  return (
    <button
      className={`custom-btn ${typeButtonClass(typeButton)}`}
      value={value}
    >
      {label}
    </button>
  );
};

export default CustomButton;
