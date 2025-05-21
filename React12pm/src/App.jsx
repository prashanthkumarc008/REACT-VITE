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
import Msg from './component/Msg';
import Employee from './component/Employee';
import CompA from './hookss/CompA';
import CallBack from './component/CallBack';
import UseReff from './hookss/UseReff';
import UseEff from './hookss/UseEff';
import Table from './component/Table';
import Company from './component/Company';
import ApiFetch from './component/ApiFetch';
import FormUser2 from './form/FormUser2';
import { Route, Routes } from 'react-router-dom';
import Home from './RouterEx/Home';
import About from './RouterEx/About';
import NotFound from './RouterEx/NotFound';
import Navbar1 from './RouterEx/Navbar1';





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
            <FormUser2/>
            <IncDec/>
            <Product/>
            <Flipkart/>
            <Msg/>
            <Employee/>
            <CompA/>
            <CallBack/>
            <UseReff/>
            <UseEff/>
            <Table/>
            <Company/>
            <ApiFetch/>
            <div>
                <Navbar1/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            </div>
            
            
            </div>
        </>
    )
}
export default App;
