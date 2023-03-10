import React,{useState,useEffect} from 'react';
import axios from '../../../axios'; 
import {useNavigate} from "react-router-dom";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreaters } from '../../../State/index';

function AdminLogin() {
     const initialVlaues = {  email: "",  password: "" };
    const [formValues, setFormValues] = useState(initialVlaues);
    const navigate = useNavigate();
    const [errors,setErrors] = useState({});

    const state = useSelector(state=>state); 
    const dispatch = useDispatch();
    const {storeToken} = bindActionCreators(actionCreaters,dispatch);
   

    console.log(state);

    const onChangeHandle = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (event)=>{
        event.preventDefault();
         const user = {
            email: formValues.email,
            password: formValues.password,
        }
        axios.post('http://localhost:9000/admin',{
            email: formValues.email,
            password: formValues.password,
        }).then((response)=>{
            console.log(response.data);
            const data = {
                token:response.data.token,
                id:""
            }
            storeToken(data);
            navigate('/admin/home');
        }).catch((error)=>{
            console.log(error.response.data); 
            setErrors(error.response.data);
            console.log(errors);
        })
        console.log(user);
    }  
        useEffect(()=>{ 
        
        if(state.token.token !== ''){
            navigate('/admin/home');
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Login Admin</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group mt-4">
                    <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    value={formValues.email}
                    onChange={onChangeHandle}
                    />
                    {errors && <p style={{color:"red"}}>{errors.email}</p>}
                </div>
                <div className="form-group mt-4">
                    <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    value={formValues.password}
                    onChange={onChangeHandle}
                    />
                    {errors && <p style={{color:"red"}}>{errors.password}</p>}
                </div>
                <div className="form-group mt-4">
                    <button type="submit" className="btn btn-primary">
                        Login Admin
                    </button>
                </div>
            </form>
        </div>
  )
}

export default AdminLogin