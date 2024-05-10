const express = require('express');
const router= express.Router();
const studentController = require('../controllers/student.controller');
const authenticateToken = require('../middlewares/authenticateToken');

router.get('/getStudents', studentController.get);
router.get('/deleteStudent', studentController.deleteStudent);
router.post('/addStudent', studentController.addStudent);
router.get('/getStudent', studentController.getStudent);
router.put('/modifyStudent', studentController.modifyStudent);

// authenticateToken là thằng soát vé.
module.exports = router;