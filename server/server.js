import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js'

dotenv.config()// it is use because the process.env can access the .env data eaisly

connectDB();//connect to the mongodb

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) =>{//it is a test route
    res.send("API is running...");
});

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}/`);
});