import { Container } from "react-bootstrap";

function MovieName(props){
    return (
            <div>
               <Container>
                    <p> {JSON.stringify(props)}</p>
                   <h1> Movie name is : {props.name}</h1> 
               </Container>   
            </div>
            )
    
}
export default MovieName;