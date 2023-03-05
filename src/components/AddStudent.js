import React, { useState} from "react";
import StudentService from "../services/StudentService";
import { useNavigate } from 'react-router-dom';

export default function AddStudent(){

    const [student, setStudent] = useState({
        firstName:"",
        lastName:"",
        email:"",
    });

    const navigate = useNavigate();

    const handleChange = (e) =>{
        const value = e.target.value;
        setStudent({...student,[e.target.name]: value});
    }

    const saveStudent = (e) =>{
        e.preventDefault();
        
        StudentService.saveStudent(student).then((response) =>{
            console.log(response);
            navigate("/studentList");
        }).catch((error)=>{
            console.log(error);
        });
    }

    function reset(e){
        e.preventDefault();
        setStudent(
            {
                firstName:"",
                lastName:"",
                email:"",
            }
        );
    }

    return(
        <div className="addstudent">
            <h2 className="header-style">Add new student</h2>
            <label >First name</label><br></br>
            <input type="text" name="firstName" value={student.firstName}
            onChange={(e) => handleChange(e)}
            ></input><br></br>
            
            <label >Last name</label><br></br>
            <input type="text" name="lastName" value={student.lastName}
            onChange={(e) => handleChange(e)}
            ></input><br></br>
            
            <label >Email</label><br></br>
            <input type="email" name="email" value={student.email}
            onChange={(e) => handleChange(e)}
            ></input><br></br>

            <button
            onClick={saveStudent} 
            className="savebutton">Save</button>

            <button 
            onClick={reset}
            className="clearbutton">Clear</button>
        </div>
    );
}