class EditorCtrl {
  constructor($state, Web, Film, project, $stateParams) {
    'ngInject';
    
    this._$state = $state;
    this._$stateParams = $stateParams;
    this._Web = Web;
    this._Film = Film;
    this.type = $stateParams.type;

    if(!project) {
    	this.project = {

    	}
      this.project.listOfTechnologies = [];
    } else {
    	this.project = project;
    }
  }  

  back() {
    this._$state.go('app.dashboard');
  }

  addTag() {
  	if(!this.project.listOfTechnologies.includes(this.tagField)) {
  		var str = this.tagField.slice(0,-1);
  		this.project.listOfTechnologies.push(str);
  		this.tagField = '';
  	}
  }

  removeTag(tagName) {
  		this.project.listOfTechnologies = this.project.listOfTechnologies.filter((slug) => slug != tagName);
  }

  submit() {
  	this.isSubmitting = true;
    if(this.type == 'website') {
        this._Web.save(this.project).then(
        (newProject) => {
          this._$state.go('app.dashboard');
        },
        (err) => {
          this.isSubmitting = false;
          this.errors = err.data.errors;
        }
      )
    } else if (this.type == 'film') {
      this._Film.save(this.project).then(
        (newProject) => {
          this._$state.go('app.dashboard');
        },
        (err) => {
          this.isSubmitting = false;
          this.errors = err.data.errors;
        }
      )
    }
  	
  }


  

}

export default EditorCtrl;