import Axios from 'axios'
import { useState } from 'react'
let ApiFetch=()=>{
   let [users,setUsers] = useState([])
   let getDataHandler = ()=>{
    Axios.get('https://jsonplaceholder.typicode.com/users')
         .then((response)=>{
            console.log(response.data)
            setUsers(response.data)
         })
         .catch((err)=>{
            console.log(err.message)
         })
   }
    return <div className='container'>
            <h3>User Component</h3>
            <pre>{JSON.stringify(users)}</pre>
            <button onClick={getDataHandler}>Get Data</button>
        <div className='row'>
            <div className='col-4'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>User Id:</th>
                            <th>User Name</th>
                            <th>City</th>
                        </tr>
                    </thead>
                <tbody>
                    {
                        users.length>0 ? 
                    <>
                        {
                            users.map((user)=>{
                                return <tr>
                                            <td>{user.id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.address.city}</td>
                                    </tr>
                            })
                        }
                    </>:<h4>No Data</h4>
                    }
                </tbody>
            </table>
            </div>
            </div>
            
           
           </div>
}

export default ApiFetch