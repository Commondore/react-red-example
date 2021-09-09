function Counter(props) {
  let counterStyle = {
    color: "yellowgreen",
    transition: '.5s'
  };

  if (props.users.length <= 2) {
    counterStyle.color = "orange";
  }

  if (props.users.length === 1) {
    counterStyle.color = "red";
    counterStyle.fontSize = "2.8rem";
  }

  if (props.users.length === 0) {
    counterStyle.transform = 'scale(0)';
  }

  return (
    <h2 style={counterStyle}>Количество людей: {props.users.length}</h2>
  );
}

export default Counter;
