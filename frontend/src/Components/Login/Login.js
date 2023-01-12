import React,{useState} from 'react';
import axios from '../../axios';
import {useNavigate} from "react-router-dom";

function Login() {
     const initialVlaues = { username: "", email: "", phone: "", password: "" };
    const [formValues, setFormValues] = useState(initialVlaues);
    const navigate = useNavigate();
    const [errors,setErrors] = useState({});

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
        axios.post('http://localhost:9000/login',{
            email: formValues.email,
            password: formValues.password,
        }).then((response)=>{
            console.log(response.data);
            navigate('/');
        }).catch((error)=>{
            console.log(error.response.data); 
            setErrors(error.response.data);
            console.log(errors);
        })
        console.log(user);
    }   
   return(
        <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Login</h2>
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
                        Login User
                    </button>
                </div>
            </form>
        </div>
        )
}

export default Login