import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };    

  return (
    <nav className=' bg-white shadow-md px-6 py-4 flex justify-between items-center'>
        <div className="text-xl font-bold text-blue-600">
            Career Roadmap
        </div>

        <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
                <Link to="/dashboard" className='hover:text-blue-500'>Dashboard</Link>
            </li>
            <li>
                <Link to="/profile" className='hover:text-blue-500'>Profile</Link>
            </li>
            <li>
                <button onClick={handleLogout} className='hover:text-red-500'>Logout</button>
            </li>
        </ul>
      
    </nav>
  )
}

export default Navbar
