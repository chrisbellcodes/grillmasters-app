const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Handles CORS
app.use(express.json()); // parses JSON

// Connecting MongDB (via Mongoose)
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`Yas - MongoDB connection established succesfully!`);
})


app.listen(port, () => (console.log(`Server is running on port ${port}`)
))