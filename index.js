const express= require('express');
const app = express();
const connectDB = require('./database/db')
require('dotenv').config();
const userRoute = require('./routes/userRoute')
app.use(express.json());
connectDB();

app.use('/user', userRoute);

app.listen(3000);