import { useState } from "react"
import { Button } from "react-bootstrap"

let IncDec=()=>{
    let [counter,setCounter]=useState(0)

    let incHandler=()=>{
        setCounter(counter+1)
    }
    let decHandler=()=>{
        setCounter(counter-1)
    }

    return (
        <div>
            <p> value: {counter}</p>
            <Button onClick={incHandler}>+</Button>
            <Button onClick={decHandler}>-</Button>

        </div>
    )
}
 export default IncDec;
