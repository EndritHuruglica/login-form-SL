import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



function Login() {
  const[name,setName] = useState()
  const[email,setEmail] = useState()
  const[password,setPassword] = useState()
  const navigate = useNavigate()


  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/login', {email, password})
      .then(result => {
        console.log(result)
        if(result.data === "Success"){

          navigate('/home')
        }
      })
      
      .catch(err=> console.log(err))
  }
  return(
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
            <div className="card-body">
            <h3 className="card-title text-center">Login</h3>
            <form onSubmit = {handleSubmit}>
                <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="email"
                    aria-describedby="emailHelp" 
                    onChange={(e) => setName(e.target.value)}/>

            
                </div>
                <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" 
                className="form-control"  
                id="password" 
                onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3 form-check">
                <input type="checkbox" 
                className="form-check-input" 
                id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe" onChange={(e) => setPassword(e.target.value)}>
                  Remember me
                </label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
            <p>I have a acc</p>
            <Link  to="/register" className="btn btn-primary w-100">Sign Up</Link>
            </div>
        </div>
      </div>
    </div>
  );


}
export default Login;

