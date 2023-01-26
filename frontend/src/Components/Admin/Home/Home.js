import React,{useState,useEffect} from 'react';
import axios from '../../../axios'; 
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreaters } from '../../../State/index';


function Home() {
    const [users,setUsers] = useState([]);
    const [search, setsearch] = useState("");
  const [filteredDocs, setFilteredDocs] = useState([]);
    const navigate = useNavigate();

    const details = useSelector(state=>state); 
    console.log(details);
  const dispatch = useDispatch();
  const {addData,removeToken} = bindActionCreators(actionCreaters,dispatch);


    useEffect(()=>{
        axios.get('http://localhost:9000/admin/allUsers').then((response)=>{
            if(response.data.status){
                setUsers(response.data.Users);
            }else{
                console.log(response);
            }
        })
    },[])
    
     const handleChange = (event) => {
    console.log(event.target.value);
    setsearch(event.target.value);
    if (event.target.value !== "") {
      const newPacientes = users.filter((value) =>
        value.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      console.log(newPacientes);
      setFilteredDocs(newPacientes);
    }
  };

    const handleEdit =(id)=>{
        // console.log(id);
        axios.get(`http://localhost:9000/admin/editUser/${id}`).then((response)=>{
            console.log(response.data.user._id);
            console.log(response.data.user.name);
            console.log(response.data.user.email);
            const data = {
                id:response.data.user._id,
                name:response.data.user.name,
                email:response.data.user.email,
            }
            addData(data); 
            navigate('/admin/editUser');
            
        })
    }
    const handleDelete =(id)=>{
        console.log(id);
        axios.get(`http://localhost:9000/admin/deleteUser/${id}`).then((reaponse)=>{
            console.log(reaponse);
            axios.get('http://localhost:9000/admin/allUsers').then((response)=>{
            if(response.data.status){
                setUsers(response.data.Users);
            }else{
                console.log(response);
            }
        })
        })
    }
    const handleLogout = ()=>{
    const data = {
      token:"",
      id:""
    }
    removeToken(data);
    navigate('/admin');
  }
    useEffect(()=>{
    
    if(details.token.token === ''){
      navigate('/admin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])



  return (
    <div>
        
        <div className="container">
        <div className="d-flex justify-content-between align-items-end pt-4">
            <div>
          <button onClick={handleLogout} className="btn btn-outline-success">
            Logout
          </button>
        </div>
        <div>
          <Link className="nav-link active" to='/admin/addUser'>
          <button  className="btn btn-outline-success">
            Add User
          </button>
            </Link>
        </div>
        
      </div>
      <div className="d-flex justify-content-end align-items-end pt-4">
        <div className="search_div">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </div>
        
      </div>
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
                {search === "" && users.map((obj)=>{
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
                    <button onClick={()=>handleEdit(obj._id)}
                      type="button"
                      className="btn btn-outline-success mx-2"
                      style={{width: "5rem"}} 
                    >
                      Edit
                    </button>
                    <button onClick={()=>handleDelete(obj._id)} type="button" className="btn btn-outline-danger" style={{width: "5rem"}} >
                      Delete
                    </button>
                 
                </td>
              </tr>
                 )
                })} 
                 {search !== "" &&
              filteredDocs.map((obj) => {
                return (
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
                    <button onClick={()=>handleEdit(obj._id)}
                      type="button"
                      className="btn btn-outline-success mx-2"
                      style={{width: "5rem"}} 
                    >
                      Edit
                    </button>
                    <button onClick={()=>handleDelete(obj._id)} type="button" className="btn btn-outline-danger" style={{width: "5rem"}} >
                      Delete
                    </button>
                 
                </td>
                </tr>
                );
              })}
              
            </tbody>
          </table>
           {filteredDocs.length === 0 && search !== "" && (
          <div>
            <h1 className='d-flex justify-content-center align-item-center'>No result</h1>
          </div>
        )}
        </div>
    </div>
  )
}

export default Home;