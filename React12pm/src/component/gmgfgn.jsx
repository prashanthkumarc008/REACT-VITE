import { useState } from "react"
import { Container } from "react-bootstrap"

let Gmgfgn=()=>{
    let [msg,setMsg]=useState("Hello")

    return(
        <>
            <Container>
                  <h1> Gm/Gf/Gn Component</h1>
            <h1> hello : {msg}</h1>
            <button onClick={()=>{setMsg("gm")}}>GM</button>
            <button onClick={()=>{setMsg("ga")}}>ga</button>
            <button onClick={()=>{setMsg("gn")}}>gn</button>

            </Container>
          
        </>
    )
}
export default Gmgfgn;
