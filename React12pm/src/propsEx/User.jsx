import { Container } from "react-bootstrap";
import Emp from "./Emp";
let User=()=>{
    let user_data={
        uid:101,
        uname:"ananda",
        loc:["ind","bng","marathahalli"],
        email:'ananda@gmail.com'

    }
    return(
        <div>
        <Container> 
            <h1> User Component</h1>
            <Emp one={"gm"} emp={user_data}/>
        </Container>
       
       
           
        </div>
    )
}

export default User;