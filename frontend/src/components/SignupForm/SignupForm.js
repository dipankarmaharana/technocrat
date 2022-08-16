import React from 'react'
import {Link} from "react-router-dom"

const SignupForm = () => {
  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center mx-auto">
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                    />
                    <small id="emailHelp" className="form-text text-muted">Already signed up?<Link to="/signin"> Sign in</Link></small>
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary d-flex justify-content-center"
                >
                    Register
                </button>
            </form>
        </div>
  )
}

export default SignupForm