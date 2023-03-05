import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentService from '../services/StudentService';
import Student from './Student';
import ReactPaginate from 'react-paginate';

const StudentList = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [student, setStudent] = useState(null); 
  const [studentcount, setStudentCount] = useState(null); 

  const [pageNumber, setpageNumber] = useState(0); 


  useEffect(() =>{
    const fetchdata = async () => {
      setLoading(true);

      try{

        const response = await StudentService.getStudents(pageNumber);
        setStudent(response.data.content);

        const response2 = await StudentService.getStudentNumber();
        setStudentCount(response2.data)
      }
      catch(error){
        console.log(error);
      }

      setLoading(false);
    }

    fetchdata();
  },[pageNumber]);

  function deleteStudent(e, id){
    e.preventDefault();
    StudentService.deleteStudent(id)
    .then((response) => {
      if(student){
        setStudent((prevElement) => {
          return prevElement.filter((student) => student.id !== id);
        })
      }
    });
  }

  const pageCount = Math.ceil(studentcount / 5);

  function changePage({selected}){
    setpageNumber(selected);
  }

  return (
    <div className="studentlist">
      <div>
        <button 
        onClick={() => navigate("/addstudent") }
        className='return-add-student'>Add student</button>
      </div>
      <div className='table-margin'>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          {!loading && (
          <tbody>
            {student.map((student) =>(
              <Student student={student} deleteStudent={deleteStudent}  key={student.id}></Student>
          ))}
          </tbody>
          )};
        </table>
      </div>
      <div>
        <ReactPaginate 
          previousLabel = {"previous"}
          nextLabel = {"next"}
          pageCount = {pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousbtn"}
          nextLinkClassName={"nextbtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}    
        />
      </div>
    </div>
  );
}

export default StudentList;
