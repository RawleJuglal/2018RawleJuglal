let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
}, {collection:'Users'});

mongoose.model('User', UserSchema);