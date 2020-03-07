const {
    checkForLecture
} = require('../middlewares/checkForLecture')

const db = require('../configs/connector');


module.exports.getLecture = function (req, res) {

    const query = "{\"" + req.params.q.replace("=", "\":\"") + "\"}";
    const client = db.get();
    var collection = client.db('homework07').collection("university")

    collection.findOne(JSON.parse(query), function (err, docs) {
        if (err) {
            throw err
        }
        res.json(docs);
    })

}

module.exports.getLectures = function (req, res) {
    const query = "{\"" + req.params.q.replace("=", "\":\"") + "\"}";
    const client = db.get();
    var collection = client.db('homework07').collection("university")

    collection.find(JSON.parse(query)).toArray(function (err, docs) {
        if (err) {
            throw err
        }
        res.json(docs);
    })
}

module.exports.addLecture = function (req, res) {
    console.log("add middleware")

    const client = db.get();

    var collection = client.db('homework07').collection("university")
    console.log(req.body)
    collection.insertOne(req.body, function (err, docs) {
        if (err) {
            throw err
        }
        res.json(docs);
    })
}


module.exports.deleteLecture = function (req, res) {
    console.log("delete middleware")
    const query = "{\"" + req.params.q.replace("=", "\":\"") + "\"}";
    const client = db.get();

    var collection = client.db('homework07').collection("university")
    collection.deleteOne(JSON.parse(query), function (err, docs) {
        if (err) {
            throw err
        }
        res.json({
            'ok': docs.result.ok
        });
    })

}