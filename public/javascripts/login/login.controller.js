class LoginCtrl {
    constructor(AppConstants, User, $state) {
        'ngInject';
        
        this.appName = AppConstants.appName;
        this._$state = $state;
        this.title = $state.current.title;
        this._User = User;
    }
    
    //when html form clicks submit
  submitForm () {
    this.isSubmitting = true;
    this._User.attemptAuth(this.formData).then(
        (res) => {
          this.isSubmitting = false;
          this._$state.go('app.dashboard');
        },
        (err) => {
          this.isSubmitting = false;
          this.formData = {};
          console.log(err.data.message);
        }
      );
  }
  
}

export default LoginCtrl;