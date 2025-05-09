import { useState } from "react";

let Login = ()=>{
    let [user,setUser]  = useState({"email":"","password":""})
    let emailHandler = (event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        setUser({...user,email:event.target.value})
    }
    let pwdHandler=(event)=>{
        setUser({...user,password:event.target.value})
    }
    let submitHandler = ()=>{
        //send data to backend or api
        console.log(user)
        alert(JSON.stringify(user))
    }
    return <div>
            <pre>{JSON.stringify(user)}</pre>
            <h4>Login Details</h4>
            <form onSubmit={submitHandler} >
            EmailId::::: <input type="text" onInput={emailHandler} />  <br /> <br />
            Password: <input type="password" onInput={pwdHandler} /> <br /> <br />
            <input type="submit" value={"Login"} />
            </form>
            </div>
}
export default Login;