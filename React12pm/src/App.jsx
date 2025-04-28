import BasicExample from './component/BasicExample';
import Login from './component/login';
import Message from './component/Message';
import Movie from './component/Movie';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App(){

    
    return(
        <>
            <div>
            <BasicExample/>
            <Login/>
            <Message/>
            <Movie/>
            </div>
        </>
    )

}
export default App
