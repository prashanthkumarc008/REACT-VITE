import { useState } from "react"
import { Container } from "react-bootstrap"

let Gmgfgn=()=>{
    let [msg,setMsg]=useState("Hello")

    return(
        <>
        <div className="bg-info">
            <Container>
                  <h1> Gm/Gf/Gn Component</h1>
            <h1> hello : {msg}</h1>
            <button onClick={()=>{setMsg("good morning")}}>GM</button>
            <button onClick={()=>{setMsg("good afternoon")}}>ga</button>
            <button onClick={()=>{setMsg("good night")}}>gn</button>

            </Container>
          
        </div>
            
        </>
    )
}
export default Gmgfgn;
