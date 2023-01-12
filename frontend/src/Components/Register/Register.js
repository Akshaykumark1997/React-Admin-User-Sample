import React,{useState,useEffect} from 'react';
import axios from '../../axios';
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux';
// import { baseUrl } from '../../Constants/Constants';

function Register() {
    const initialVlaues = { username: "", email: "", phone: "", password: "" };
    const [formValues, setFormValues] = useState(initialVlaues);
    const [errors,setErrors] = useState({});
    const navigate = useNavigate();
    const auth = useSelector(state=>state); 
    

    const onChangeHandle = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post('http://localhost:9000/register',{
            name: formValues.name,
            email: formValues.email,
            password: formValues.password,
            password_confirm: formValues.password_confirm 
        }).then((response)=>{
            console.log(response.data);
            navigate('/');
        }).catch((error)=>{
            console.log(error.response.data);
            setErrors(error.response.data);
            // console.log(errors);
        })
       
    }   
    useEffect(()=>{
        console.log(auth);
        console.log(auth.token);
        console.log(auth.token.token);
        if(auth.token.token !== ''){
            navigate('/');
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group mt-4">
                    <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    name="name"
                    value={formValues.name}
                    onChange={onChangeHandle}
                    />
                    {errors && <p style={{color:"red"}}>{errors.name}</p>}
                </div>
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
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    name="password_confirm"
                    value={formValues.password_confirm}
                    onChange={onChangeHandle}
                    />
                    {errors && <p style={{color:"red"}}>{errors.password_confirm}</p>}
                </div>
                <div className="form-group mt-4">
                    <button type="submit" className="btn btn-primary">
                        Register User
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register