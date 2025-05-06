import { useState } from "react"

let Employee=()=>{
    let [esal,setEsal]=useState(30000)
       
    let hikeHnadler=(hikeValue)=>{
            setEsal(esal+hikeValue);
        }

    return(
        <div>
            <h1>employee salary: {esal}</h1>
        <button onClick={hikeHnadler.bind(null,20000)}>hike to 20k</button>
        <button onClick={hikeHnadler.bind(null,10000)}>hike to 10k</button>
        <button onClick={hikeHnadler.bind(null,5000)}>hike to 5k</button>
        <button onClick={hikeHnadler.bind(null,0)}>no hike</button>
        </div>
        
    )
}

export default Employee;