import { Container } from "react-bootstrap";
import Emp from "./Emp";
let User=()=>{
    let user_data={
        uid:101,
        uname:"ananda",
        loc:["ind","bng","marathahalli"],
        email:'ananda@gmail.com'
    }
    let array=[100,101,102,103]
    return(
        <div>
        <Container> 
            <h1> User Component</h1>
            <Emp one={"gm"} emp={user_data} arr={array}/>
        </Container>
       
       
           
        </div>
    )
}

export default User;