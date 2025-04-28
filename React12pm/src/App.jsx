import '../node_modules/bootstrap/dist/css/bootstrap.css';
import BasicExample from './component/BasicExample';
import Login from './component/login';
import Message from './component/Message';


function App(){

    
    return(
        <>
            <div>
            <BasicExample/>
            <Login/>
            <Message/>
            </div>
        </>
    )

}
export default App
