import './App.css';
import Person from './components/Person/Person';
import {useState} from 'react';

function App() {
  const [users, setUsers] = useState([
    { title: "Ketty", age: 30, hobby: "Chess", id: 1},
    { title: "Sam", age: 20, hobby: "Football", id: 2},
    { title: "John", age: 40, hobby: "Basketball", id: 3}
  ]);

  const changeName = (event, id) => {
    const index = users.findIndex((user) => user.id === id);
    const person = { ...users[index] };
    const usersCopy = [...users];
    person[event.target.name] = event.target.value;
    usersCopy[index] = person;

    setUsers(usersCopy);
    // setUsers((users) => {
    //   return [
    //     ...users,
    //     {
    //       ...users[index]
    //     }
    //   ]
    // })

  };

  const increaseAge = (id) => {
    const index = users.findIndex(user => user.id === id);
    const person = {...users[index]};
    person.age++;
    const usersCopy = [...users];
    usersCopy[index] = person;

    setUsers(usersCopy);

  }
  // let userList = [];
  // for (let index = 0; index < users.length; index++) {
  //   let user = users[index];
  //   userList.push(
  //     <Person
  //       title={user.title}
  //       age={user.age}
  //       click={() => increaseAge(index)}
  //       change={(event) => changeName(event, index)}
  //     >
  //       {user.hobby}
  //     </Person>
  //   );
  // }

  return (
    <div className="App">
      <div>
        <button className="btn" onClick={increaseAge}>
          Increase age
        </button>
      </div>
      <div className="people">
        {
          // [<Person/>, <Person/>, <Person/>]
          users.map( (user) => {
            return (
              <Person
                key={user.id}
                title={user.title}
                age={user.age}
                click={() => increaseAge(user.id)}
                change={(event) => changeName(event, user.id)}
              >
                {user.hobby}
              </Person>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
