const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const todoRouts = require('./routs/todo-routs')


const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    next()
})

app.use('/api/todo', todoRouts)

mongoose
    .connect('mongodb://127.0.0.1:27017/todo')
    .then(()=>{
        app.listen(8000) 
    })
    .catch(err=>{
        consol.log(err)
    })
