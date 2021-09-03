const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
//import routes
const authRoutes = require('./routes/auth');
const { db } = require('./models/User');
//app
const app = express();
const uri = process.env.ATLAS_URI;
// db
mongoose.connect(uri,
    err => {
        if(err) throw err;
        console.log('Connected to MongoDB')
    });
app.use(bodyParser.json());
app.use(cors());
//routes middleware
app.use('/api', authRoutes);
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
});