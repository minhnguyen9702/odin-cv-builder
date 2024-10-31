import './App.css'
import { useState } from 'react'
import PersonalDetails from './PersonalDetails'

function App() {
  const [name, setName] = useState('')

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <>
    <PersonalDetails name={name} onChange={handleNameChange} />
    <h1>{name}</h1>
    </>
  )
}

export default App
