import './Person.css';

function Person(props) {
  return (
    <div className="person">
      <h1 className="title">{props.title}</h1>
      <p className="age">Age: <span>{props.age}</span></p>
      <p className="hobby">hobby: {props.children}</p>
    </div>
  )
}

export default Person;
