class BlogCtrl {
  constructor(AppConstants, $state, Blog, Comment) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$state = $state;
    this._Blog = Blog;
    this._Comment = Comment;
    this.blogs = [];
  }

  $onInit() {    
         this._Blog.get().then(
             (result) => {
                     this.blogs = result;
                 }
             )
     }

  submitForm(blogID){
    this.isSubmitting = true;
    if(this.formData.username == undefined){
      this.formData.username = 'Anonymous';
    }
    console.log('in submit form blogCtrl');
    this._Comment.save(blogID, this.formData).then(
      (newComment) => {
          console.log('Current blog', newComment);
          this._$state.go(this._$state.$current, null, { reload: true });
      },
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }
    )
  }

}

export default BlogCtrl;