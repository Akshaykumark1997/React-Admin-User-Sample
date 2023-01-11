import React,{useState} from 'react'

function Register() {
    const initialVlaues = { username: "", email: "", phone: "", password: "" };
    const [formValues, setFormValues] = useState(initialVlaues);

    const onChangeHandle = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

    const handleSubmit = (event)=>{
        event.preventDefault();
         const user = {
            name: formValues.name,
            email: formValues.email,
            password: formValues.password,
            password_confirm: formValues.confirmPassword
        }
        console.log(user);
    }   

    return(
        <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    name="name"
                    value={formValues.name}
                    onChange={onChangeHandle}
                    />
                </div>
                <div className="form-group">
                    <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    value={formValues.email}
                    onChange={onChangeHandle}
                    />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    value={formValues.password}
                    onChange={onChangeHandle}
                    />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    name="confirmPassword"
                    value={formValues.confirmPassword}
                    onChange={onChangeHandle}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Register User
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register