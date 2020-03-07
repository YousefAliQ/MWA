const express = require('express');
const lecturesRouter = express.Router();

const {
    checkIfJSONValid
} = require('../middlewares/checkIfJSONValid')
const lecturesController = require('../controllers/lectures')
const {
    checkForLecture
} = require('../middlewares/checkForLecture')

//const { checkAuth } = require('../middlewares/checkAuth');
// `Find/FindOne/Add/Delete` 
lecturesRouter.get('/findone/:q', lecturesController.getLecture);
lecturesRouter.get('/search/:q', lecturesController.getLectures);
lecturesRouter.delete('/:q', lecturesController.deleteLecture);
lecturesRouter.post('/', lecturesController.addLecture);

module.exports = lecturesRouter;