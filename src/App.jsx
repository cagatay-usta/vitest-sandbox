import { useState } from "react"
import RenderName from "./propType"

function App() {
  const [heading, setHeading] = useState("Magnificent Monkeys")

  function clickHandler() {
    setHeading("Radical Rhinos")
  }
  return (
    <>
    <button type="button" onClick={clickHandler}> Click Me</button>
    <h1>{heading}</h1>
    <RenderName name="bob"/>
    </>
  )
}

export default App
