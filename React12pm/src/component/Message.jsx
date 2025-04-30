import React from "react";
import { Container } from "react-bootstrap";
class Message extends React.Component{
    render(){
        return (
        <div className="bg-info">
        <Container>
            <h1>This is class component</h1>
            <h2>Good Morning</h2>
        </Container>
        </div>
        )
    }
}

export default Message;

