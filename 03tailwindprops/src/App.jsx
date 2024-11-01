import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl font-bold bg-green-500'>React and tailwind</h1>
      <Cards  username='Sattu' pos='Software Developer'/>
      <Cards  username='Satvik' pos='Software Developer'/>
      <Cards  username='Sam' pos='Software Developer'/>
    </>
  )
}

export default App
