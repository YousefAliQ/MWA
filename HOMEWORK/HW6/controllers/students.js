const { checkForUser } = require('../middlewares/checkForUser')
const { students } = require('../data/dataHolder')

module.exports.getStudent = function (req, res) {
    res.json(req['result']);
}

module.exports.getStudents = function (req, res) {
    res.json(students);
}

module.exports.deleteStudent = function (req, res) {
    console.log("delete middleware")
    let newStudents = [...students];
    newStudents = newStudents.filter(std => std.id != req.params.id);

    //newStudents : a new array without the deleted student
    res.json({ id: req.params.id, result: true });
}

module.exports.updateStudent = function (req, res) {

    console.log("update middleware")
    let newStudents = [...students];
    const std = newStudents.find(std => std.id == req.body.id);
    newStudents = newStudents.map(s => {
        if (s.id == std.id) {

            s = req.body;
            console.log(s)
        }
    })
    res.json({ id: req.body.id, result: true });
}

module.exports.addStudent = function (req, res) {
    console.log("add middleware")

    const newStudents = [...students, req.body];

    if (!req.file) {
        res.status(500);
        return next(err);
    }
    //res.json({ fileUrl: 'http://192.168.0.7:3000/images/' + req.file.filename });

    res.json(req.body);

}

