const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/movie');

const db = mongoose.connection;

db.on('error', console.error.bind("error", 'mongodb not connected'));

db.once('open', function (err) {
    if (err) {
        console.log(err);
        return false;
    }
    console.log('db is connected');
})

module.exports = db;    