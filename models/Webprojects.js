let mongoose = require('mongoose');

let WebProjectSchema = new mongoose.Schema({
    title:String,
    startDate:Date,
    endDate: Date,
    description: String,
    linkImage: String,
    linkToWeb: String,
    linkToGithub: String,
    listOfTechnologies: []
}, {collection:'WebProjects'});

mongoose.model('WebProject', WebProjectSchema);