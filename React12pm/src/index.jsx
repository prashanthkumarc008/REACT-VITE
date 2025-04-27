import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {createRoot} from 'react-dom/client'
import BasicExample from './component/BasicExample.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<> 
                                                    <BasicExample/>
                                                    <App/>

                                                    </>)