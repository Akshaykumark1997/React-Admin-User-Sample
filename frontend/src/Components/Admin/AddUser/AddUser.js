import React from 'react'

function AddUser() {
  return (
    <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Registration</h2>
            <form >
                <div className="form-group mt-4">
                    <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    name="name"
                    // value={formValues.name}
                    // onChange={onChangeHandle}
                    />
                    {/* {errors && <p style={{color:"red"}}>{errors.name}</p>} */}
                </div>
                <div className="form-group mt-4">
                    <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    // value={formValues.email}
                    // onChange={onChangeHandle}
                    />
                    {/* {errors && <p style={{color:"red"}}>{errors.email}</p>} */}
                </div>
                <div className="form-group mt-4">
                    <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    // value={formValues.password}
                    // onChange={onChangeHandle}
                    />
                    {/* {errors && <p style={{color:"red"}}>{errors.password}</p>} */}
                </div>
                <div className="form-group mt-4">
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    name="confirmPassword"
                    // value={formValues.confirmPassword}
                    // onChange={onChangeHandle}
                    />
                    {/* {errors && <p style={{color:"red"}}>{errors.password_confirm}</p>} */}
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

export default AddUser