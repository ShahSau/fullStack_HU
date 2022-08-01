import React, { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: 123456 }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setnewNumber] = useState("");

  const name_array = persons.map((person) => person.name);

  const handleNewName = (event) => {
    // setNewName(event.target.value);
    if (name_array.includes(event.target.value)) {
      alert(`${event.target.value} is already added to phonebook`);
      setNewName("");
      setnewNumber("")
    } else {
      setNewName(event.target.value);
    }
  };

  const handleNewNumber = (event) => {
    setnewNumber(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    const newObj = {
      name: newName,
      number:newNumber,
    };
    setPersons(persons.concat(newObj));
    setNewName("");
    setnewNumber("")
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person key={Math.random()} person={person.name} number ={person.number}/>
      ))}
    </div>
  );
};

export default App;