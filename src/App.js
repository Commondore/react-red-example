import './App.css';
import Person from './components/Person/Person';
import {useState} from 'react';

function App() {
  const [users, setUsers] = useState([
    { title: "Ketty", age: 30, hobby: "Chess" },
    { title: "Sam", age: 20, hobby: "Football" },
  ]);

  const changeName = () => {
    setUsers((prevUsers) => {
      const users = [...prevUsers];
      const person = {...prevUsers[0]};
      person.title = 'Peter';
      users[0] = person;

      return users;
    })
  };

  const increaseAge = () => {
    setUsers((prevUsers) => {
      return prevUsers.map(user => {
        return {
          title: user.title,
          hobby: user.hobby,
          age: user.age + 1,
        };
      })
    })
  }

  return (
    <div className="App">
      <div>
        <button className="btn" onClick={changeName}>
          Change name
        </button>
        <button className="btn" onClick={increaseAge}>
          Increase age
        </button>
      </div>
      <div className="people">
        <Person title={users[0].title} age={users[0].age}>
          {users[0].hobby}
        </Person>
        <Person title={users[1].title} age={users[1].age}>
          {users[1].hobby}
        </Person>
      </div>
    </div>
  );
}

export default App;
