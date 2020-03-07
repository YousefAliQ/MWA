const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient('mongodb://localhost:27017', {
    useUnifiedTopology: true
});
const app = express();
let db = null;


const connect = (req, res, next) => {
    client.connect(function (err) {
        try {
            if (db === null) {
                db = req.db = client.db('geo');
                db.collection('places').createIndex({
                    'location': '2d'
                });
            }
            next();
        } catch (error) {
            console.log(error);
        }

    })
};

app.get('/places', connect, (req, res, next) => {
    db.collection('places')
        .find({}).toArray((err, docs) => {
            if (err) throw err;
            res.send(docs);
        });
});

app.get('/near', connect, express.json(), (req, res, next) => {
    db.collection('places')
        .find({
            'location': {
                '$near': [41.017675, -91.9665901]
            },
            'category': 'food'
        }).limit(3).toArray((err, result) => {
            if (err) throw err;
            if (result) {
                res.send(result);
            }
        });
});

app.post('/places', connect, express.json(), (req, res, next) => {
    let point = req.body;
    db.collection('places')
        .insertOne({
            'name': point.name,
            'category': point.category,
            'location': [point.location[0], point.location[1]]
        }, (err, result) => {
            if (result) {
                if (err) throw err;
                res.send({
                    result: "ok"
                });
            }
        });
});

app.listen(4000, () => {
    console.log('Listening on Port 4000')
})