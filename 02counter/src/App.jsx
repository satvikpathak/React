import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);

  const addValue = () => {
      setCounter(counter + 1);
      console.log(counter);
  }

  const removeValue = () => {
      setCounter(counter - 1);
      console.log(counter);
  }

    return (
    <>
      <h1>Counter measurement basic {counter}</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button> {" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
