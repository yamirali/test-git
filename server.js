const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const port = 80


mongoose.connect("mongodb://localhost:27017/jastime-feed", {
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex: true,
})

app.set("view engine", "ejs")
app.use('/css',express.static(__dirname +'/css'))
app.use('/img',express.static(__dirname +'/img'))
app.use('/fonts',express.static(__dirname +'/fonts'))

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})