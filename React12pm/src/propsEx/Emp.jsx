import React from "react";
import { Container } from "react-bootstrap";
class Emp extends React.Component{

    render(){
        return(
            <div>
            <Container>
                <h1>EmpLOYEE Component</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <h3>emp id:{this.props.emp.uid}</h3>
                <h3>emp name:{this.props.emp.uname}</h3>
                <h3>emp loc:{this.props.emp.loc[0]}</h3>

            </Container>
                
            </div>
        )
    }
}
export default Emp;
