import React from 'react'

const SigninForm = () => {
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
                
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary d-flex justify-content-center"
                >
                    Sign In
                </button>
            </form>
        </div>
  )
}

export default SigninForm