class BlogCtrl {
  constructor(AppConstants, Blog) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._Blog = Blog;
    this.blogs = [];
  }

  $onInit() {    
         this._Blog.get().then(
             (result) => {
                     this.blogs = result;
                 }
             )
     }

}

export default BlogCtrl;