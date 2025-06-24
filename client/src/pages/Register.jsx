import AuthForm from "../components/AuthForm";
import api from '../services/api';
import {useNavigate} from 'react-router-dom';

const Register = () =>{
    const navigate = useNavigate();


    const handleRegister = async(data) =>{
        try {
            const res = await api.post("/users/register", data);
            localStorage.setItem("token", res.data.token);
            alert("Registration Successfull");
            navigate("/login")
        } catch (error) {
            alert(error.response?.data?.message || "Registration Failed");
        }
    }

    return(
        <div>
            <h2>Register</h2>
            <AuthForm onSubmit={handleRegister} />
        </div>
    )
}

export default Register;