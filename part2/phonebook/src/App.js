import React, { useState } from "react";
import Filter from "./components/Filter";
import { Form } from "./components/Form";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState("");
  const [newNumber, setnewNumber] = useState("");
  const [change, setChange] = useState("");

  const name_array = persons.map((person) => person.name);

  const handleNewName = (event) => {
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

  const handleChange=(event)=>{
    setChange(event.target.value)
  }
  let update_persons = persons

  if (change !==""){
    update_persons = update_persons.filter(person => person.name.includes(change))
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter handleChange={handleChange}  />
      <h2>add a new</h2>

      <Form 
        addName={addName}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}

      />
      <h2>Numbers</h2>
      {update_persons.map((person) => (
        <Person key={Math.random()} person={person.name} number ={person.number}/>
      ))}
    </div>
  );
};

export default App;