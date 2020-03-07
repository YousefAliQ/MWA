const {
    students
} = require('../data/dataHolder')


module.exports.checkForUser = function (req, res, next) {
    console.log("checkForUser middleware")

    const id = req.params.id ? req.params.id : req.body.id;

    const valid = students.filter(std => std.id == id);
    if (valid[0]) {
        req['result'] = valid[0];
        next()
    } else {
        // throwError 
    }
}