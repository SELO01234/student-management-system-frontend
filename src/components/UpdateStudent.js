import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import StudentService from '../services/StudentService';

const UpdateStudent = () => {

    const navigate = useNavigate();

    const{id} = useParams();

    const [student, setStudent] = useState({
        firstName:"",
        lastName:"",
        email:"",
    });

    const handleChange = (e) =>{
        const value = e.target.value;
        setStudent({...student,[e.target.name]: value});
    }

    useEffect(() =>{
        const fetchdata = async () => {
            try{
                const response = await StudentService.getStudentById(id);
                setStudent(response.data);
            }
            catch(error){
                console.log(error);
            }
        }

        fetchdata();
    }
    , []);

    function updateStudent(e){
        e.preventDefault();

        StudentService.updateStudents(student, id).then((response) =>{
            console.log(response);
            navigate("/studentList");
        }).catch((error)=>{
            console.log(error);
        });
    }

  return (
    <div className="addstudent">
            <h2 className="header-style">Update Student</h2>
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
            onClick={updateStudent} 
            className="savebutton">Update</button>

            <button
            onClick={() => navigate("/studentList")}
            className="clearbutton">Cancel</button>
    </div>
  );
}

export default UpdateStudent
