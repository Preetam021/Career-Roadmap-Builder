import AuthForm from "../components/AuthForm";
import api from '../services/api';
import {useNavigate, Link} from 'react-router-dom';
import bgImage  from '../assets/background.jpg'
import LoginSignup from "../components/LoginSignup";

const Login = ()=>{
    // const navigate = useNavigate();

    // const handleLogin = async (data) => {
    //     try {
    //       const res = await api.post("/users/login", data);
    //       localStorage.setItem("token", res.data.token);
    //       alert("Login Successfull");
    //       navigate("/profile");
    //     } catch (error) {
    //       alert(error.response?.data?.message || "Login Failed");
    //     }
    //   };
    

    return(
        // <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{backgroundImage: `url(${bgImage})`}}>
        //     <div className="flex flex-col justify-center items-center border border-gray-600 px-5 py-8 rounded-lg backdrop-blur-sm bg-white/10">
        //         <h2 className="text-3xl text-white pb-2">Login</h2>
        //         <AuthForm onSubmit={handleLogin} isLogin={true}/>
        //         <p className="text-sm text-white">Don't have an account? <Link to="/register" className="pl-0.5 text-blue-400 hover:text-blue-500 hover:underline">Register Here</Link></p>
        //     </div>
        // </div>
        <div>
            <LoginSignup />
        </div>
    );
};

export default Login;