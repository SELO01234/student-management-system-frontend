import { useLocation, useNavigate } from "react-router-dom";
import UserService from "../services/UserService";


export default function Navbar(){

  const navigate = useNavigate();
  const navigateLogin = useNavigate();

    const location = useLocation();

    async function refresh(){
       const response = await UserService.refreshTheToken();
       if(response != null){
        localStorage.removeItem("access_token");
        localStorage.setItem("access_token", response.data.access_token);
      }
    }

    async function logout(){
      const response = await UserService.logOut();

          navigateLogin("/");
    }

    return(
        <div className="nav-header">
        <p >Student Management System</p>

        {location.pathname !== '/' && location.pathname !== '/register' &&
        <div className="divmargin"> 
          <button className="refreshbutton" onClick={refresh}>Refresh</button>
          <button className="logoutbutton" onClick={logout}>Logout</button>
        </div>
        }
        
        {location.pathname === '/' && <button className="registerbutton" onClick={() => {navigate("/register")}}>Register</button>}
        </div>
    );
}