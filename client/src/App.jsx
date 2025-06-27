import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import CareerWizard from "./pages/CareerWizard";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login"/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register /> } />
      <Route path="/profile" element={
        <PrivateRoute>
          <Profile />
        </PrivateRoute> 
        } />
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute> 
        } />
      <Route path="/wizard" element={
        <PrivateRoute>
          <CareerWizard />
        </PrivateRoute> 
        } />
    </Routes>
  )
}

export default App
