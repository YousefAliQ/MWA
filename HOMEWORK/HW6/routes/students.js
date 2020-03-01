const express = require('express');
const studentsRouter = express.Router();

const {checkIfJSONValid} = require('../middlewares/checkIfJSONValid')
const studentsController = require('../controllers/students')
const {checkForUser} = require('../middlewares/checkForUser')
const { uploader } = require('../middlewares/uploader');
//const { checkAuth } = require('../middlewares/checkAuth');

studentsRouter.get('/all', studentsController.getStudents);
studentsRouter.get('/:id', checkForUser, studentsController.getStudent);
studentsRouter.delete('/:id', express.json(), checkForUser, studentsController.deleteStudent);
studentsRouter.put('/', express.json(), checkForUser,studentsController.updateStudent);
studentsRouter.post('/', uploader.single('avatar'), express.json(), checkIfJSONValid, studentsController.addStudent);

module.exports = studentsRouter;