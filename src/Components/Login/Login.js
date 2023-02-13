import React, { useState,useContext } from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';
import {firebaseContext} from '../../Store/FirebaseContext'
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const navigate = useNavigate()
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {firebaseAuth} = useContext(firebaseContext)
  const handleLogin = (e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(firebaseAuth,email,password).then(()=>{
      navigate('/')
    }).catch((error)=>{
    console.log(error)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            // defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            // defaultValue="Doe"

          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link  to = "/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Login;
