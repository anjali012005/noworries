require('dotenv').config();
const express = require("express");
const connectDB = require('./mongoDB/db');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

connectDB();

app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log(`Server running on port` + " " + 3000);
})