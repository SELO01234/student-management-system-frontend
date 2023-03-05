import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';

const RegisterPage = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name:"",
        email:"",
        username:"",
        password:"",
        role:"",
      });

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({...user, [e.target.name]: value});
    }

    const saveUser = (e) => {
        e.preventDefault();

        try{
          UserService.saveUser(user);
          navigate("/");
        }
        catch(error){
          console.log(error);
        }
        
    }

  return (
    <div className='loginform'>
        <h1 className='header-style'>Register</h1>

        <label>Name</label><br></br>
        <input type="text" autoComplete='off' name="name" value={user.name}
        onChange={(e) => handleChange(e)}
        ></input><br></br>

        <label>Email</label><br></br>
        <input type="email" autoComplete='off' name="email" value={user.email}
        onChange={(e) => handleChange(e)}
        ></input><br></br>

        <label>Username</label><br></br>
        <input type="text" autoComplete='off' name="username" value={user.username}
        onChange={(e) => handleChange(e)}
        ></input><br></br>

        <label>Password</label><br></br>
        <input type="password" name="password" value={user.password}
        onChange={(e) => handleChange(e)}
        ></input><br></br>

        <label>Role</label><br></br>
        <input type="text" autoComplete='off' name="role" value={user.role}
        onChange={(e) => handleChange(e)}
        ></input><br></br>

        <button className='loginbutton' onClick={saveUser}>Sign up</button>
    </div>
  )
}

export default RegisterPage
