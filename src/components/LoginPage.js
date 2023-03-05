import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';

const LoginPage = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username:"",
    password:"",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({...user, [e.target.name]: value});
  }

  const loginbutton = async (e) => {
    e.preventDefault();
    try{
      const response =  await UserService.sendLoginRequest(user);
      if(response != null){
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        navigate("/studentList");
      }
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div className='loginform'>
      <h1 className='header-style'>Login</h1>

      <label>Username</label><br></br>
      <input type="text" autoComplete='off' name="username" value={user.username}
      onChange={(e) => handleChange(e)}
      ></input><br></br>

      <label>Password</label><br></br>
      <input type="password" name="password" value={user.password}
      onChange={(e) => handleChange(e)}
      ></input><br></br>

      <button className='loginbutton' onClick={loginbutton}>Login</button>
    </div>
  )
}

export default LoginPage
