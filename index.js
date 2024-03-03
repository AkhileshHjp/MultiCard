const express = require('express')
require('dotenv').config()

const app = express()
// const db = require('./src/db/index')


const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://127.0.0.1:27017/MultiCars')
  .then(() => {
    console.log('Connected!');
  })
  .catch((err) => {
    console.log('Error', err)
  })




// defind userscema

const userSchma = new mongoose.Schema({
  name: String,
  mobile: String,
  age: Number
})


const User = mongoose.model('User', userSchma)

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (res, res) {
  res.send('hello node js ')
})

app.get('/users', async (req, res) => {
    try {
      const users =  await User.find()
      console.log(users);
      res.send(users)
    } catch (error) {
      res.status(500).json({message : error.message})
    }
})


app.post('/users', async (req, res) => {
  console.log(req);
  const user = new User({
    name: req.body.name,
    mobile: req.body.mobile,
    age: req.body.age
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(process.env.PORT)
console.log(`SERVER IS RUMIMG OM PORT ${process.env.PORT}`);