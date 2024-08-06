import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)

  const addvalue = () => {
    // setCounter(counter+1)
    setCounter(prevcounter=>prevcounter+1) 
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)

  }
  const remvalue = () => {
    if(counter>0)
    setCounter(counter-1)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addvalue}>add value{counter}</button>
      <br />
      <button onClick={remvalue}>decrease value {counter}</button>
      <p>footer:{counter}</p>

    </>
  )
}

export default App
