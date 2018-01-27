let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let BlogSchema = Schema({
    title:String,
    publishDate: {type: Date, default: Date.now},
    body: String,
    comments:[{ type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {collection:'Blogs'});

mongoose.model('Blog', BlogSchema);