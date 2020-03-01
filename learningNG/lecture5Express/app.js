const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();

const filter = function(req, res, next){
    console.log('request filtered .. ');
    console.log(req.body)
    //if (req.url == '/') console.log('register authenticated .. ');
    
    return next();
}


const auth = function(req, res, next){
    console.log('request authenticated .. ');
    res.json({'name':'Ali'})
    res.end()
}

const error = function(req, res, next){
    console.log('request error .. ');
    next(500);
    
}

app.use(function(err, req, res, next){
    res.status(500).send('Some thing wrong!')
    res.json(err)
})
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, woff2");
    next();
  });

app.use(cors());
app.use(helmet())

//app.use('/hello', filter);

app.get('/', filter, auth);
app.get('/Error', error);

app.listen( 3000, ()=>{console.log('listening ... ')})