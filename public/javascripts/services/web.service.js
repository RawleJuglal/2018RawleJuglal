export default class Website {
	constructor($http, $state, $q) {
		this._$http = $http;
		this._$state = $state;
		this._$q = $q;
	}

	get() {
		let deferred = this._$q.defer();
      
        this._$http({ 
          url:'/webprojects/all',
          method: 'GET'
        }).then(
           (res) => 
           {
            deferred.resolve(res.data)
           },
           (err) => deferred.reject(err)
         );
     
         return deferred.promise;
	}

  getOne(slug) {
    let deferred = this._$q.defer();

    this._$http({
      url: '/webprojects/website/' + slug,
      method:'GET'
    }).then(
      (res) => {
        deferred.resolve(res.data)
      },
      (err) => {
        deferred.reject(err)
      }
    );

    return deferred.promise;
  }

  save(project) {
    let request = {};

    if(project._id) {
      request.url = `/webprojects/website/${project._id}`;
      request.method = 'PUT';
    } else {
      request.url = '/webprojects/entry';
      request.method = 'POST';
    }

    request.data = project;

    return this._$http(request).then((res) => {
      res.data.project
    });
  }

  destroy(slug) {
     return this._$http({
       url: '/webprojects/website/' + slug,
       method: 'DELETE'
     });
   }
}
