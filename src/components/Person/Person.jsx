import './Person.css';

function Person(props) {
  return (
    <div className="person">
      <h1 className="title" onClick={props.click}>
        {props.title}
      </h1>
      <p className="age">
        Age: <span>{props.age}</span>
      </p>
      <p className="hobby">hobby: {props.children}</p>
      <div>
        <input
          type="text"
          className="change__name"
          name="title"
          value={props.title}
          onChange={props.change}
        />
      </div>
    </div>
  );
}

export default Person;
