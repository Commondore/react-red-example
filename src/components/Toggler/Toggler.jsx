function Toggler(props) {

  let buttonClass = ["btn"];

  if (props.show) {
    buttonClass.push("btn-danger");
  }

  let buttonStyles = {
    marginTop: "2rem",
    padding: "1rem 3rem",
  };

  return (
    <button
      className={buttonClass.join(" ")}
      onClick={props.toggle}
      style={buttonStyles}
    >
      Toggler
    </button>
  );
}

export default Toggler;
