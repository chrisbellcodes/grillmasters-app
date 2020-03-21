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
const db = mongoose.connection;
db.on('error',  console.error.bind(console, 'connection error, boo:'));
db.once('open', () => {
    console.log(`Yas - MongoDB connection established succesfully!`);
})


app.listen(port, () => (console.log(`Server is running on port ${port}`)
))