import './App.css';
import Person from './components/Person/Person';
import {useState} from 'react';

function App() {
  const [users, setUsers] = useState([
    { title: "Ketty", age: 30, hobby: "Chess" },
    { title: "Sam", age: 20, hobby: "Football" },
    { title: "John", age: 40, hobby: "Basketball" },
  ]);

  const changeName = (event, index) => {
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

  const increaseAge = (index) => {
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
          users.map( (user, index) => {
            return (
              <Person
                key={index}
                title={user.title}
                age={user.age}
                click={() => increaseAge(index)}
                change={(event) => changeName(event, index)}
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
