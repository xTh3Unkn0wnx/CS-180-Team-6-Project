import {useState} from "react"
import "./Main.css"

export const Main = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Main</p>
      <p> {count} </p>
      <button onClick={()=> setCount(count + 1)}>Click Me</button>
    </div>
  )
}