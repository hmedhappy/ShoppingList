const express = require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
//Routes
const items = require('./routes/api/items');
//bodyParser Middleware
app.use(bodyParser.json());

  //Use Route
  app.use('/api/items',items) ;



  mongoose.connect(
    'mongodb+srv://hmedhappy:karirinkute@cluster0.hnffp.mongodb.net/Ahmed?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex: true})
    .then(()=> console.log("Connected to DataBase..."))
    .catch(err => console.log("DataBase error :",err)) ;

  const port = process.env.PORT || 5000;
  app.listen(port, () => `Server running on port ${port}...`);