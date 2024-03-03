const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/MultiCard')
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
});

