import AuthForm from "../components/AuthForm";
import api from '../services/api';
import {useNavigate, Link} from 'react-router-dom';

const Login = ()=>{
    const navigate = useNavigate();

    const handleLogin = async(data)=>{
        try {
            const res = await api.post("/users/login", data);
            localStorage.setItem("token", res.data.token);
            alert("Login Successfull");
            navigate("/profile");
            
        } catch (error) {
            alert(error.response?.data?.message || "Login Failed");
        }
    };

    return(
        <div>
            <h2>Login</h2>
            <AuthForm onSubmit={handleLogin} isLogin={true}/>
            <p>Don't have an account? <Link to="/register">Register Here</Link></p>
        </div>
    );
};

export default Login;