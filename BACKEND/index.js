require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db')

const cors = require('cors');
const authRoutes = require('./routes/auth');
const propertyRoutes = require('./routes/property');

const app = express();

// middleware
app.use(express.json())
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/user', authRoutes);
app.use('/api/properties', propertyRoutes);

connectDB();

app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})
