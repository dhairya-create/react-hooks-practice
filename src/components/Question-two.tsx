//What is 2 way data binding and how we can achieve it in React?

import { useState } from "react"

const Q2 = () => {

    const[value,setValue] = useState("")
  return (
    <div>
        <div style={{fontSize:"90px"}}>Input Value: {value}</div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}

export default Q2
