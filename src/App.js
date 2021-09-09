import './App.css';
import Person from './components/Person/Person';
import {useState} from 'react';
import Toggler from './components/Toggler/Toggler';
import Counter from './components/Counter/Counter';

function App() {
  const [users, setUsers] = useState([
    { title: "Ketty", age: 30, hobby: "Chess", id: 1},
    { title: "Sam", age: 20, hobby: "Football", id: 2},
    { title: "John", age: 40, hobby: "Basketball", id: 3}
  ]);

  const [show, setShow] = useState(true);

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

  const removePerson = (id) => {
    const index = users.findIndex((user) => user.id === id);
    const usersCopy = [...users];
    usersCopy.splice(index, 1);

    setUsers(usersCopy);
  };

  const toggle = () => {
    setShow(() => !show);
  }

  let showPeople = null;

  if(show) {
    showPeople = (
          <div className="people">
            {
              users.map( (user) => {
                return (
                  <Person
                    key={user.id}
                    title={user.title}
                    age={user.age}
                    click={() => increaseAge(user.id)}
                    change={(event) => changeName(event, user.id)}
                    remove={() => removePerson(user.id)}
                  >
                    {user.hobby}
                  </Person>
                );
              })
            }
          </div>
        )
  }


    return (
      <div className="App">
        <div>
          <Toggler show={show} toggle={toggle}/>
          <Counter users={users}/>
        </div>
        {showPeople}
      </div>
    );
}

export default App;
