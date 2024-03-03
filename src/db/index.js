const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/MultiCard');
        console.log(`MongoDB connection successful`);
    } catch (error) {
        console.error(`MongoDB connection failed: ${error.message}`);
    }
};

module.exports = connectDB;