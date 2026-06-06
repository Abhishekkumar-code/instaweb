
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/config/database');
const leadRoutes = require('./src/routes/app');
const errorHandler = require('./src/middleware/errorHandler');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/leads', leadRoutes);
app.use(errorHandler);

app.listen(3000,(req,res)=>{
    console.log("server is running on 3000");
    
})

