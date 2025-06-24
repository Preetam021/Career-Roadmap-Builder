import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

const protect = async(req, res, next)=>{
    const authHeader = req.headers.authorization;

    if(authHeader && authHeader.startsWith('Bearer ')){
        const token = authHeader.split(' ')[1];

        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            
            const user = await User.findById(decoded.id).select('-password');
            
            if (!user) {
                return res.status(404).json({ message: 'User not found in DB' });
            }
            req.user = user;
            next()
        } catch (error) {
            console.error("JWT verification failed: ",error.message);
            return res.status(401).json({ message: "Invalid token" });

        }
    }else{
        return res.json({message:"No token provided"},{status:401});
    }
}

export default protect;