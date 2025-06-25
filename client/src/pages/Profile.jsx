import { useEffect, useState } from "react";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/users/profile");
        setUser(res.data);
      } catch (error) {
        console.error(error);
        // Token invalid or expired — redirect to login
        navigate("/login");
      }finally{
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) return <Layout><div className="text-center mt-10 text-gray-600">Loading profile...</div></Layout>;

  if(!user) return <Layout> <div className="text-center mt-10 text-red-500">User not found</div></Layout>

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Layout>
      <div className="min-h-[91.5vh] flex items-center justify-center bg-gray-100 px-4">
      
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Your Profile</h2>

          <div className="space-y-2 text-gray-700">
            <p><span className="font-semibold">Name:</span> {user.name}</p>
            <p><span className="font-semibold">Email:</span> {user.email}</p>
            
            <div className="flex justify-center mt-6">
              <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
