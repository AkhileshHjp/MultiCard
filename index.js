const express =  require('express')
require('dotenv').config()

const app =  express()
// const db = require('./src/db/index')


const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/MultiCars')
  .then(() => {
    console.log('Connected!');
  })
  .catch((err) => {
    console.log('Error', err)
  })




app.get('/', function (res, res) {
    res.send('hello node js ')
})

app.get('/user', function(req, res){
    res.send('hi')
})


app.listen(process.env.PORT)
console.log(`SERVER IS RUMIMG OM PORT ${process.env.PORT}`);