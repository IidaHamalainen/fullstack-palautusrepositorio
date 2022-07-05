import { useState, useEffect } from 'react'
import personService from './services/persons'
import axios from 'axios'

const App = (props) => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
    
  }, [])

  console.log('render', persons.length, 'persons')

  const addPerson = (event) => {
    event.preventDefault()
    
    const personObject = {
      name: newName,
      number: newNumber
    }
    const listaSisaltaa = persons.some((person) => person.name === newName);
  
    if (listaSisaltaa) {
      console.log("nimi löytyy jo")
      window.alert(`${newName} löytyy jo luettelosta`);
      return;
      
    } else {

      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
        
    }
    
  }
  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.remove(id).
      then((response) => {
        const updatedList = persons.filter((person) => person.id !== id)
      
      setPersons(updatedList)
      setFilteredPersons(updatedList)
      })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)    
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const filterPersons = (event) => {
    const input = event.target.value
    setFilter(input)
    setFilteredPersons(
      persons.filter((person) => person.name.toLowerCase().includes(input))
    )
  }
    

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter value={newFilter} onChange={filterPersons} />

      <h2>Add a new person</h2>

      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
          
      <h2>Numbers</h2>
      
      <Persons filteredPersons={filteredPersons} deletePerson={deletePerson}/>
      
    </div>
  )

}


const Persons = ({filteredPersons, deletePerson}) => {
  
  return (
    <div>
      {filteredPersons.map((person) => (
      <div key={person.name}> 
      {person.name} {person.number} 
      <button onClick={() => deletePerson(person.id, person.name)}>
        Delete info
      </button>
      </div>))}
    </div>
  )
}

const Filter = (props) => {
  return(
  <div>
    filter results: <input value={props.value} onChange={props.onChange}/>
  </div>
  )
}

const PersonForm = (props) => {
  return(
  <form onSubmit={props.addPerson}>
    name: <input 
    value={props.newName}
    onChange={props.handleNameChange} />
    <p></p> 
    number: <input
    value={props.newNumber}
    onChange={props.handleNumberChange} />

    <button type="submit">add</button> 
  </form>
  )
}


export default App
