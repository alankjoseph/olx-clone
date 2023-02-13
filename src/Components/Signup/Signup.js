import React, { useState,useContext } from 'react';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
 import { addDoc,collection} from 'firebase/firestore'

import { firebaseContext } from '../../Store/FirebaseContext';
import {Link, useNavigate } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Signup.css';


export default function Signup() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const {firebaseAuth,db} = useContext(firebaseContext)
  const userCollectionRef = collection(db,"users")
  const handleSubmit = (e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(firebaseAuth,email,password).then((result)=>{
      // const user = result.user;
      updateProfile(firebaseAuth.currentUser,{
        displayName:username
      })
      console.log(result);
      try {
        addDoc(userCollectionRef,{
          id:result.user.uid,
          username:username,
          email:email,
          phone:phone,
          password:password
        }).then(()=>{
           navigate('/login')
        })
         } catch (err) {
        console.log(err);
      }
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>{
              setUsername(e.target.value)
            }}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>{
              setPhone(e.target.value)
            }}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link  to="/login">Login </Link>
        
      </div>
    </div>
  );
}
