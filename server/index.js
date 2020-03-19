const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Handles CORS
app.use(express.json()); // parses JSON




app.listen(port, () => (console.log(`Server is running on port ${port}`)
))