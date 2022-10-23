import axios from "axios";
import Endpoint from '../api/Api'


const login = (login, password) => {

    return axios
        .post(Endpoint + "auth/login", {
            login,
            password,
        })
        .then((response) => {
            if (response) {
                localStorage.setItem("userRole", JSON.stringify(response.data));
                // localStorage.setItem("userCurrentRole", JSON.stringify(response.data.role));
                // console.log(response)
            }
            return response;
        });
};
const AuthService = {
    login,
}
export default AuthService;