const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./database/db');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

const { router: adminRoutes }= require('./routes/adminLogin');
app.use('/admin', adminRoutes);

const addCarRoute = require('./routes/addCars')
app.use('/cars', addCarRoute)

const getCarsRoute = require('./routes/getCars')
app.use('/getcars', getCarsRoute)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
