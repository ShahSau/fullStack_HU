import React, { useState,useEffect } from "react";
import Filter from "./components/Filter";
import { Form } from "./components/Form";
import Person from "./components/Person";
import personService from './services/Persons'

const App = () => {
  const [newName, setNewName] = useState("");
  const [newNumber, setnewNumber] = useState("");
  const [change, setChange] = useState("");
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    personService 
    .getAll()
    .then(allPersons=>
      setPersons(allPersons))
    .catch(error => console.log(error));

  }, [])
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
    personService
    .create(newObj)
    .then(newPerson=>
      setPersons(persons.concat(newPerson))
      )
    setNewName("");
    setnewNumber("")
  };

  //creating a function for delete person
  const deletePerson =(event)=>{
    if (window.confirm(`Are you sure, you want to delete ${event.name}`)) {
      personService
      .deletePersons(event.id)
      let filter_persons2 = persons.filter(person=> person.id !== event.id)
      setPersons(filter_persons2)

    }
  }

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
        <Person key={Math.random()} person={person.name} number ={person.number}  onClick={()=>deletePerson(person)}/>
      ))}
    </div>
  );
};

export default App;