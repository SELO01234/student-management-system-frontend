import React from 'react'
import { useNavigate } from 'react-router-dom';

const Student = ({student, deleteStudent}) => {

  const navigate = useNavigate();

  function editStudent(e, id){
    e.preventDefault();
    navigate(`/updatestudent/${id}`);
  }

  return (
    <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.email}</td>
            <td>
                <a 
                onClick={(e, id) => editStudent(e,student.id)}
                >Edit</a>
                <a 
                onClick = {(e, id) => deleteStudent(e, student.id)}
                >Delete</a>
            </td>
    </tr>
  )
}

export default Student
