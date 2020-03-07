const express = require('express');
var bodyParser = require('body-parser');
const db = require('./configs/connector');
const url = "mongodb+srv://Ali:Alan.alan1@mwacluster-gemje.mongodb.net/test?retryWrites=true&w=majority";


const app = express();

db.connect(url, function (err) {
    if (err) {
        console.log('Unable to connect to Mongo.')
        process.exit(1)
    } else {

        const lecturesRouter = require('./routes/lectures');

        app.use(bodyParser.urlencoded({
            extended: false
        }));
        app.use(bodyParser.json());

        app.use('/lectures', lecturesRouter);

        app.use((err, req, res, next) => {
            res.json({
                err
            })
        })

        app.listen(3000, function () {
            console.log('Listening on port 3000...')
        })
    }
})