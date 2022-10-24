const express = require('express');   
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

mongoose.connect(process.env.DB_URI,(err)=>{
    if(err){
        console.error(err.message);
    }
    else{
        console.log("connnected to mongodb");
    }
});


//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.json('hello').status(200);
})

app.post('/', (req, res) => {
    res.json('hello from post '+req.body.name).status(201);
});

app.listen(process.env.PORT, (req, res) => {
    try{
        console.log('listening on port',process.env.PORT);
    }
    catch(err){
        console.log(err.message);
    }
}
)