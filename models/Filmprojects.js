let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let FilmProjectSchema = Schema({
    title:String,
    publishDate: Date,
    description: String,
    linkImage: String,
    linkToVideo: String
}, {collection:'FilmProjects'});

mongoose.model('FilmProject', FilmProjectSchema);