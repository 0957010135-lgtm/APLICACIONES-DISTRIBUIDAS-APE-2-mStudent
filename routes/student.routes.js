const express = require('express');
const router = express.Router();
const controller = require('../controllers/student.controller');

router.get('/students/:id', controller.getStudent);

module.exports = router;
