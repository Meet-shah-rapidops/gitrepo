const mongoose = require('mongoose');
const mongodbError = require('mongoose-mongodb-errors');

mongoose.plugin(mongodbError);
mongoose.connect('mongodb://localhost:27017/data')
    .then(()=>console.log('Connected to Mongodb...'))
    .catch(err => console.log('could not connected to Mongodb...',err));

//connection of mongodb
