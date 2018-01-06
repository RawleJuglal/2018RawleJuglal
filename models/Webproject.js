let mongoose = require('mongoose');

let WebProjectSchema = new mongoose.Schema({
    title:String,
    startDate:Date,
    endDate: Date,
    description: String,
    linkToWeb: String,
    linktoGithub: String,
    listOfTechnologies: []
}, {collection:'WebProjects'});

mongoose.model('WebProject', WebProjectSchema);