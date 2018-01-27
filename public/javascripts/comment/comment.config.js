function CommentConfig($stateProvider) {
    'ngInject';
    
    $stateProvider
        .state('app.comment', {
            url: '/comment',
            params: {
    			slug:null
    		},
            controller: 'CommentCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'comment/comment.html',
            title: 'Comment',
            resolve: {
            	blog: function(Blog, $stateParams){
            		if($stateParams.slug){
            			return Blog.getOne($stateParams.slug).then(
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
        });

};

export default CommentConfig;