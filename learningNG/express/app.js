const express = require('express');

const app = express();

app.set('x-powered-by', false);

app.get('/ali/:name', (req, res)=>{
    res.json({wlcome : req.params.name});
})
app.listen(3000, ()=>{
    console.log('ready on 3000')
})