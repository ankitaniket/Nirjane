const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send ('API Running'));

const PORT = process.env.PORT || 4000;

app.listen(PORT,() => console.log( `Server is running on port ${PORT}`));