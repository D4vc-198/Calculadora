const CustomButton = (props) => {
  const { label, value, typeButton } = props;

  const typeButtonClass = (typeButton) => {
    switch (typeButton) {
      case "number":
        return "btn-number";
      case "operation":
        return "btn-operation";
      case "action":
        return "btn-action";
      default:
        return null;
    }
  };

  return (
    <button className={`custom-btn ${typeButtonClass(typeButton)}`}>
      {label}
    </button>
  );
};

export default CustomButton;
