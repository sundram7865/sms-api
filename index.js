import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import './config/db.js';
import schoolRoutes from './routes/schoolRoutes.js';
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.json({
        message:"Welcome to School Management System API"
    })
})
app.use('/api', schoolRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});