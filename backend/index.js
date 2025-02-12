import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { v2 as cloudinary } from 'cloudinary';
import projectRoutes from './routes/projectRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config();
const app = express();
app.use(express.json()); 
app.use(cors());
app.use(cookieParser());
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})


connectDB();

const PORT = process.env.PORT;

app.use("/api/projects", projectRoutes);
app.use('/api/admin', adminRoutes);


app.listen(PORT, ()=>{
    console.log('Server has started at PORT:', PORT);
})