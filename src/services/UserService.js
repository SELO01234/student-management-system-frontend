import axios from "axios";
import qs from "qs";

const LOGIN_URL = "http://localhost:8080/login";
const LOGOUT_URL = "http://localhost:8080/logout";
const REFRESH_TOKEN_URL = "http://localhost:8080/api/token/refresh"
const USER_ADD_URL = "http://localhost:8080/api/add/user"

class UserService{

        sendLoginRequest(data){
            return axios.post(LOGIN_URL, qs.stringify(data));
        }

        refreshTheToken(){
            const config = {
                headers:{
                    Authorization: "Bearer " + localStorage.getItem("refresh_token")
                }
            }

            return axios.get(REFRESH_TOKEN_URL, config);
        }

        saveUser(user){
            axios.post(USER_ADD_URL, user);
        }

        logOut(){
            axios.get(LOGOUT_URL);
        }

}

export default new UserService();