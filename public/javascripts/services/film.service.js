export default class Film {
	constructor($http, $state, $q) {
		this._$http = $http;
		this._$state = $state;
		this._$q = $q;
	}

	get() {
		let deferred = this._$q.defer();
      
        this._$http({ 
          url:'/filmprojects/all',
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
      url: '/filmprojects/film/' + slug,
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

  destroy(slug) {
    return this._$http({
           url:'/filmprojects/film/' + slug,
           method: 'DELETE'
        });
  }

  save(project) {
    let request = {};

    if(project._id) {
      request.url = `/filmprojects/film/${project._id}`;
      request.method = 'PUT';
    } else {
      request.url = '/filmprojects/entry';
      request.method = 'POST';
    }

    request.data = project;

    return this._$http(request).then((res) => {
      res.data.project
    });
  }
}

