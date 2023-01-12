import React,{useState,useEffect} from 'react';
import axios from '../../../axios'; 


function Home() {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:9000/admin/allUsers').then((response)=>{
            console.log(response.data);
            if(response.data.status){
                setUsers(response.data.Users);
            }else{
                console.log(response);
            }
        })
    },[])
    console.log(users)
    
  return (
    <div>
        <div className="container">
        <table className="table mt-5 table-hover table-light text-start align-middle table-bordered">
            <thead>
              <tr>
                <th className="col-3 col-md-3 col-lg-3 col-xl-1 text-center">
                  UserId
                </th>
                <th className="col-3 col-md-3 col-lg-3 col-xl-1 text-center">
                  Username
                </th>
                <th className="col-3 col-md-3 col-lg-3 col-xl-1 text-center">
                  Email
                </th>
                <th className="col-3 col-md-3 col-lg-3 col-xl-1 text-center">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
                { users.map((obj)=>{
                return( 
              <tr key={obj._id}>
                <td className="col-3 col-md-3 col-lg-3 col-xl-2 text-center">
                  {obj._id}
                </td>
                <td className="col-3 col-md-3 col-lg-3 col-xl-2 text-center">
                  {obj.name}
                </td>
                <td className="col-3 col-md-3 col-lg-3 col-xl-2 text-center">
                 {obj.email}
                </td>
                <td className="col-3 col-md-3 col-lg-3 col-xl-2 text-center">
                  <a href="/">
                    <button type="button" className="btn btn-outline-danger" style={{width: "5rem"}} >
                      Block
                    </button></a>
                  <a href="/">
                    <button
                      type="button"
                      className="btn btn-outline-success mx-2"
                      style={{width: "5rem"}} 
                    >
                      Unblock
                    </button></a>
                 
                </td>
              </tr>
                 )
                })
                } 
              
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Home;