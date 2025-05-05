import BasicExample from './component/BasicExample';
import Car from './component/Car';
import Gmgfgn from './component/gmgfgn';
import Login from './component/Login';
import Message from './component/Message';
import Movie from './component/Movie';

import 'bootstrap/dist/css/bootstrap.min.css';
import User from './propsEx/User';
import FormUser from './form/FormUser';
import IncDec from './component/IncDec';
import Product from './component/product';
import Flipkart from './component/flipkart';

function App(){
    return(
        <>
            <div>
            <BasicExample/>
            <Login/>
            <Message/>
            <Movie/>
            <Gmgfgn/>
            <Car/>
            <User/>
            <FormUser/>
            <IncDec/>
            <Product/>
            <Flipkart/>
            </div>
        </>
    )
}
export default App;
