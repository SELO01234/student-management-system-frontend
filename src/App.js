import './App.css';
import Navbar from './components/Navbar';
import AddStudent from "./components/AddStudent";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentList from './components/StudentList';
import UpdateStudent from './components/UpdateStudent';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/studentList" element={<StudentList />}></Route>
          <Route path="/addstudent" element={<AddStudent />}></Route>
          <Route path="/updatestudent/:id" element={<UpdateStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
