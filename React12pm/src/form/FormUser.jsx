import { useState } from "react"

let FormUser=()=>{
    let [username,setUsername]=useState("Enter UserName")

    return(
        <div>
            <form>
                <label> username : <input type="text"></input></label>
                <label> password : <input type="text"></input></label>

            </form>
        </div>
    )
}
export default FormUser;