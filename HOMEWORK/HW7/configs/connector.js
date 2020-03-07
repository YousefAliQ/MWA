const MongoClient = require('mongodb').MongoClient;

var state = {
    client: null,
}

module.exports.connect = function (url, done) {
    if (state.client) return done()

    MongoClient.connect(url, function (err, db) {
        if (err) return done(err)
        state.client = db;

        done()
    })
}

module.exports.get = function () {
    return state.client
}

exports.close = function (done) {
    if (state.client) {
        state.client.close(function (err, result) {
            state.db = null
            state.mode = null
            done(err)
        })
    }
}