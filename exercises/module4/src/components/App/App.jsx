import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from 'services/persons'

const baseUrl = 'http://localhost:3001/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length+1
    }
    persons.forEach(element => {
      if(element.name === personObject.name){
        alert(`${element.name} is already added to phonebook`)
        setNewName('');
        return;
      }
      if(element.number === personObject.number){
        alert(`${element.number} is already added to phonebook`)
        setNewNumber('');
        return;
      }
    });
    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('');
        setNewNumber('');
      })
  }
  const handlePersonNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handlePersonNumChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    console.log(newFilter)
    setNewFilter(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input value={newFilter} onChange={handleFilterChange} /></div>
      <h2>add a new </h2>
      <form>
        <div>
          <div>name: <input value={newName} onChange={handlePersonNameChange}/></div>
          <div>number: <input value={newNumber} onChange={handlePersonNumChange}/></div>
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {console.log(persons)}
        {persons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase().toString())).map(filteredPerson => (
        <div key={filteredPerson.name}>{filteredPerson.name} {filteredPerson.number}</div>
      ))}
        
      </div>
    </div>
  )
}
//{persons.map(person => <div key={person.name}>{person.name} {person.number}</div>)}

export default App