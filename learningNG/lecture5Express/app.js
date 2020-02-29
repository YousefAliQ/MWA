const express = require('express');
const app = express();

const filter = function(req, res, next){
    console.log('request filtered .. ');
    return next();
}


const auth = function(req, res, next){
    console.log('request authenticated .. ');
    res.end();
}

app.get('/', filter, auth);

app.listen( 3000, ()=>{console.log('listening ... ')})