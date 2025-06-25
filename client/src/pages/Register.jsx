import AuthForm from "../components/AuthForm";
import LoginSignup from "../components/LoginSignup";
import api from '../services/api';
import {useNavigate} from 'react-router-dom';

const Register = () =>{
    // const navigate = useNavigate();

    // const handleRegister = async (data) => {
    //     try {
    //     const res = await api.post("/users/register", data);
    //     localStorage.setItem("token", res.data.token);
    //     alert("Registration Successfull");
    //     navigate("/login");
    //     } catch (error) {
    //     alert(error.response?.data?.message || "Registration Failed");
    //     }
    // };

    return(
        <div>
            <LoginSignup auth="register"/>
        </div>

        // <div
        //   className="h-screen flex flex-col justify-center items-center bg-cover bg-center"
        //   style={{ backgroundImage: `url(${bgImage})` }}
        // >
        //   <div className="flex flex-col justify-center items-center border border-gray-600 px-5 py-8 rounded-lg backdrop-blur-sm bg-white/10">
        //     <h2 className="text-3xl text-white pb-2">{auth === "register" ?"Register":"Login"}</h2>
        //     <AuthForm onSubmit={auth === "register"? handleRegister:handleLogin} isLogin={auth === "register"? false:true} />
        //     {auth === "register"? "":<p className="text-sm text-white">
        //       Don't have an account?{" "}
        //       <Link
        //         to="/register"
        //         className="pl-0.5 text-blue-400 hover:text-blue-500 hover:underline"
        //       >
        //         Register Here
        //       </Link>
        //     </p>}
        //   </div>
        // </div>
    )
}

export default Register;