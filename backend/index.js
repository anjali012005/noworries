require('dotenv').config();
const express = require("express");
const connectDB = require('./mongoDB/db');

const app = express();
app.use(express.json());

connectDB();

app.listen(3000, () => {
    console.log(`Server running on port` + " " + 3000);
})