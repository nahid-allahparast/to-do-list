const express = require('express')
const router = express.Router()


const todocontroller = require('../controllers/todo-controllers')


router.get('/', todocontroller.getTodos)
router.post('/', todocontroller.createTodo)

module.exports = router