const express = require('express');   
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();


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

app.listen(3000, (req, res) => {
    try{
        console.log('listening on port',3000);
    }
    catch(err){
        console.log(err.message);
    }
}
)