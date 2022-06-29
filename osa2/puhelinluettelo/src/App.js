import { useState } from 'react'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)  
    
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
       
      <form onSubmit={addPerson}>
        name: <input 
        value={newName}
        onChange={handleNameChange} />
        <p></p> 
        number: <input
        value={newNumber}
        onChange={handleNumberChange} />

        <button type="submit">add</button> 
      </form>
          
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <Person key={person.name} name={person.name} number={person.number}/> )}
      </div> 
    </div>
  )

}

const Person = (props) => {
  
  return (
    <div>
      {props.name} {props.number}
    </div>
  )
}


export default App
