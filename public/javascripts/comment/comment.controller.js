class CommentCtrl {
    constructor(AppConstants, Blog, blog, Comment, $state) {
        'ngInject';
        
        this.appName = AppConstants.appName;
        this._Blog = Blog;
        this._Comment = Comment;
        this._$state = $state;

        if(blog){
        	this.blog = blog;
        } else {
        	this.blog = {};
        }
    }

    deleteComment(blogID, commentID){
    	this.blog.comments = this.blog.comments.filter((comment) => comment._id != commentID);
    	this._Comment.destroy(blogID, commentID).then(
    		() => {
                  this._$state.go(this._$state.$current, null, { reload: true });
                },
                (err) => {
                  this.errors = err.data.errors;
                }
    	)
    }
}

export default CommentCtrl;