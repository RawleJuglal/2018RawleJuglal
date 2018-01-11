let mongoose = require('mongoose');

let FilmProjectSchema = new mongoose.Schema({
    title:String,
    publishDate: Date,
    description: String,
    linkToVideo: String
}, {collection:'FilmProjects'});

mongoose.model('FilmProject', FilmProjectSchema);