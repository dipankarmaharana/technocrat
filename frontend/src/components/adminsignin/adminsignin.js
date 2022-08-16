import React, { useContext, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import AuthContext from '../../store/AuthContext'

const Adminsignin = () => {
    const navigate = useNavigate();
    const AuthCtx = useContext(AuthContext)
    const [errMsg,setErrMsg] = useState('');
    const [user,setUser] = useState({
        useremail:'',
        userpwd:''
    })
    const emailHandler=(event)=>{
        setUser((prevState)=>{
            return{
                ...prevState,
                useremail:event.target.value
            }
        })
    }
    const passwordHandler=(event)=>{
        setUser((prevState)=>{
            return{
                ...prevState,
                userpwd:event.target.value
            }
        })
    }
    const loginHandler=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:4000/user/login',user,{
            headers:{
                'Content-Type':'application/json'
            }
        }).then(response=>{
            
            localStorage.setItem('user',response.data.user)
            localStorage.setItem('token',response.data.token)
            AuthCtx.setIsLoggedIn(true)
            navigate('/admin/product/add');
        })
        .catch(error=>{
            setErrMsg(error.response.data.message);
        })
    }
  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center mx-auto">
    <h4>admin sign in</h4>
            <form onSubmit={loginHandler}>
            {errMsg!=='' &&
            <div className="alert alert-danger">{errMsg}</div>}
                
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                       onChange={emailHandler}
                />
                
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        onChange={passwordHandler}
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-dark justify-content-center"
                >
                    Sign In
                </button>
            </form>
        </div>
  )
}

export default Adminsignin