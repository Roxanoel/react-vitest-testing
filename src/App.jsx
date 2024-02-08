import { useState } from 'react'
import './App.css'

function App() {
  const [heading, setHeading] = useState("Magnificent Monkeys")

  const clickHandler = () => {
    setHeading("Radical Rhinos")
  }

  return (
    <>
      <h1>{heading}</h1>
      <div className="card">
        <button type="button" onClick={clickHandler}>
          Click me to change heading
        </button>
      </div>
    </>
  )
}

export default App
