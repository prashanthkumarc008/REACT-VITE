import React, { Component } from "react";
import { Container } from "react-bootstrap";
class Message extends Component{
    render(){
        return <div>
        <Container>
            <h1>This is class component</h1>
                <h2>Good Morning</h2>
        </Container>
        </div>
    }
}

export default Message;