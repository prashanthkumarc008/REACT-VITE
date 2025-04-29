import { Container } from "react-bootstrap";

function MovieName(props){
    return (
            <div>
               <Container>
                   <h1> Movie name is : {props.brand}</h1> 
               </Container>   
            </div>
            )
    
}
export default MovieName;