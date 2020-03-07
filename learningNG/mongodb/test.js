var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err

    var db = client.db('university')
   // db.collection('grades').save({"_id":1,"grades" : [85, 80, 84]});
    db.collection('grades').updateOne({"_id":1, "grades":80}, {$set :{"grades.$":100}}); 
    db.collection('grades').find({}).toArray(function (err, result) {
        if (err) throw err

        console.log(result)
    })
})