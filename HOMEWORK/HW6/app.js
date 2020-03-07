const express = require('express');

const cors = require('cors')
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')

const app = express();
const studentsRouter = require('./routes/students');

// app.use(cors())

app.use(morgan('combined', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {
        flags: 'a'
    })
}))

express.static(`./picture/*`, [{
    'dotfiles': 'allow'
}])

app.use(express.static(`assets`)) // http://localhost:3000/pics/1583051337.jpg


app.use('/students', studentsRouter);

app.use((err, req, res, next) => {
    res.json({
        err
    })
})

app.listen(3000, console.log('app started ... '));