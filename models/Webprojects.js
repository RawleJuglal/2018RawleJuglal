let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let WebProjectSchema = Schema({
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