import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import api from '../services/api';

const Dashboard = ()=>{
    const [goals, setGoals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [title, setTitle]= useState("");
    const [description, setDescription]= useState("");
    
    useEffect(()=>{
        const fetchGoals = async()=>{
            try {
                const res = await api.get("/goals");
                setGoals(res.data);
            } catch (error) {
                setError("Failed to load goals");
                console.error("Error fetching goals");
            }finally{
                setLoading(false)
            }
        }
        fetchGoals();
    },[]);

    const handleAddGoal = async(e)=>{
        e.preventDefault();

        if(!title.trim() || !description.trim()) return;

        try {
            const res = await api.post("/goals", {title, description});
            setGoals([res.data, ...goals]);
            setTitle("");
            setDescription("");
        } catch (error) {
            console.error("Error adding goals:",error);
            setError("Failed to add goal")
            
        }

        
    }


    return(
        <Layout>
            <div className="min-h-[90vh] py-4 px-7 bg-gray-100">
                <h2 className='text-3xl text-center font-bold mb-4 text-gray-800'>Welcome to your Dashboard</h2>
                
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <h3 className='text-2xl font-bold mb-4 text-gray-800'>Your Career Roadmap</h3>

                    {/* Add goal form */}
                    <form onSubmit={handleAddGoal} className='mb-6'>
                        <div className="grid md:grid-cols-2 gap-4">
                            <input type="text" placeholder='Goal Title' value={title} onChange={(e)=>setTitle(e.target.value)} className='border p-2 rounded w-full'/>
                            <input type="text" placeholder='Goal Description' value={description} onChange={(e)=>setDescription(e.target.value)} className='border p-2 rounded w-full'/>
                        </div>
                        <button type="submit" className='mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>Add Goal</button>
                    </form>
                </div>

                {/* Goal list */}
                {loading && <p className='text-gray-600'>Loading goals...</p>}
                {error && <p className='text-red-500'>{error}</p>}

                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-9">
                    {goals.map((goal)=>(
                        <div key={goal.id} className="p-6 bg-white rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-blue-700 mb-2">{goal.title}</h3>
                            <p className=' text-gray-700'>{goal.description}</p>
                        </div>
                    ))}
                    
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard;