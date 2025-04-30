import { useState } from "react"
import { Container } from "react-bootstrap"

let Car=()=>{
    let [car,setCar]=useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    })
    return(
        <>
        <div className="bg-info">
            <Container>
                 <h1> Update Car Color</h1>
                 <h1> car Full Info: {JSON.stringify(car)}</h1>
            <h2> Car Color is : {car.color}</h2>
            <button onClick={()=>{setCar({...car,color:"Blue"})}}>Set-to-Blue</button>
            <button onClick={()=>{setCar({...car,color:"White"})}}>Set-to-White</button>
            <button onClick={()=>{setCar({...car,color:"Yellow"})}}>Set-to-Yellow</button>
            </Container>
           
        </div>
        </>
       
    )
}
export default Car;
