const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const mongodb = require("mongodb");

const app = express();

const dbPassword = "mongodb+srv://winter:winterdev@cluster0.sirsd.mongodb.net/winter?retryWrites=true&w=majority"

// DB Config
//const db = require('./config/key').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    dbPassword,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/user.js'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`server running on  ${PORT}`));
