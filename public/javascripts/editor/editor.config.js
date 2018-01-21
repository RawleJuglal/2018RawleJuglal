function EditorConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.editor', {
    url: '/editor',
    params: {
    	type:null,
    	slug:null
    },
    controller: 'EditorCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'editor/editor.html',
    title: 'Editor',
    resolve: {
    	project: function(Web, Film,  User, $state, $stateParams) {
    		if($stateParams.type == 'website') {
    			if($stateParams.slug) {
		    		return Web.getOne($stateParams.slug).then(
		    			(project) => {
		    				return project;
		    			},
		    			(err) => {
		    				return err;
		    			}
		    		)
		    	} else {
		    		return null;
		    	}
    		} else if($stateParams.type == 'film') {
    			if($stateParams.slug) {
    				return Film.getOne($stateParams.slug).then(
    					(project) => {
    						return project;
    					},
    					(err) => {
    						return err;
    					}	
    				)
    			} else {
    				return null;
    			}
    		}
	    	
	    }
    }
  });

};

export default EditorConfig;