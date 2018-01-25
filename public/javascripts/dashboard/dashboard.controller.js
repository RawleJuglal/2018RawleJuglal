class DashboardCtrl {
  constructor(AppConstants, User, $state, Film, Web, Blog) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._User = User;
    this._Film = Film;
    this._Web = Web;
    this._Blog = Blog;
    this._$state = $state;
    this.films = [];
    this.websites = [];
    this.blogs = [];

    this.logout = User.logout.bind(User);
  }

  $onInit() {    
         this._Film.get().then(
             (result) => {
                     this.films = result;
                 }
             )

         this._Web.get().then(
            (result) => {
                this.websites = result;
            }
          )

         this._Blog.get().then(
            (result) => {
                this.blogs = result;
                console.log(this.blogs);
            }
        )
     }
  
     deleteProject(type, slug){
        if(type == 'film') {
            this._Film.destroy(slug).then(
                () => {
                  this._$state.go(this._$state.$current, null, { reload: true });
                },
                (err) => {
                  this.errors = err.data.errors;
                }
            )
        }
        else if (type == 'web') {
            this._Web.destroy(slug).then(
                () => {
                   this._$state.go(this._$state.$current, null, { reload: true }); 
                },
                (err) => {
                  this.errors = err.data.errors;
                }
            )
        }
        else if(type == 'blog') {
            this._Blog.destroy(slug).then(
                () => {
                    this._$state.go(this._$state.$current, null, { reload: true });
                },
                (err) => {
                    this.errors = err.data.errors;
                }
            )
        }
        else
        {
            console.log('not recognizing film or web project');
        }
     }

}

export default DashboardCtrl;