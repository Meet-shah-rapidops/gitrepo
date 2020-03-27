const Joi = require('joi');
const express = require('express');
const app = express();
const helmet = require('helmet');
require('./mongo');    //database
require('./models/Data'); //models
require('express-async-errors')
const morgan = require('morgan');

app.use(express.static('./html'));
app.use(express.json());
app.use(express.urlencoded( extended = true));
app.use(helmet());
app.use(morgan());


//Routes
app.use('/data',require('./router/datas')); //its for all api routes


    app.get('/',(req,res)=>{
        res.sendFile('index.html',{root: __dirname}) //form this html file will show on home page
    });

//PORT
const port = process.env.PORT || 3001;
app.listen(port,()=>console.log(`listening on port ${port}....`));// its for port for where this project will run
