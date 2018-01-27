let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CommentSchema = Schema({
	blog: { type: Schema.Types.ObjectId, ref: 'Blog'},
    username: String,
    comment: String
}, {collection:'Comments'});

mongoose.model('Comment', CommentSchema);