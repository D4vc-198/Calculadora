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
      case "action":
        return "btn-action";
      default:
        return "";
    }
  };

  return (
    <button className={`custom-btn ${typeButtonClass(typeButton)}`}>
      {label}
    </button>
  );
};

export default CustomButton;
