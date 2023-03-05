import axios from "axios";

const STUDENT_API_ADD_URL ="http://localhost:8080/api/v2/add";
const STUDENT_API_GET_URL ="http://localhost:8080/api/v2/student";
const STUDENT_API_DELETE_URL ="http://localhost:8080/api/v2/delete";
const STUDENT_API_UPDATE_URL ="http://localhost:8080/api/v2/update";
const STUDENT_API_GET_STUDENT_NUMBER_URL = "http://localhost:8080/api/v2/count";

class StudentService{

    saveStudent(student){
        const config = {
            headers:{
                Authorization: "Bearer " + localStorage.getItem("access_token")
            }
        }

        return axios.post(STUDENT_API_ADD_URL, student, config);
    }

    getStudents(pageNumber){
        const config = {
            headers:{
                Authorization: "Bearer " + localStorage.getItem("access_token")
            }
        }
        return axios.get(STUDENT_API_GET_URL + `?size=5&page=${pageNumber}&sort=id`, config);
    }

    getStudentNumber(){
        const config = {
            headers:{
                Authorization: "Bearer " + localStorage.getItem("access_token")
            }
        }

        return axios.get(STUDENT_API_GET_STUDENT_NUMBER_URL, config);
    }

    deleteStudent(id){
        const config = {
            headers:{
                Authorization: "Bearer " + localStorage.getItem("access_token")
            }
        }

        return axios.delete(STUDENT_API_DELETE_URL +"/" + id, config);
    }

    getStudentById(id){
        const config = {
            headers:{
                Authorization: "Bearer " + localStorage.getItem("access_token")
            }
        }

        return axios.get(STUDENT_API_GET_URL + "/" + id, config);
    }

    updateStudents(student, id){
        const config = {
            headers:{
                Authorization: "Bearer " + localStorage.getItem("access_token")
            }
        }

        return axios.put(STUDENT_API_UPDATE_URL + "/" + id, student, config)
    }
}

export default new StudentService();