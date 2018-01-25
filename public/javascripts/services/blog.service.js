export default class Blog {
	constructor($http, $state, $q) {
		this._$http = $http;
		this._$state = $state;
		this._$q = $q;
	}

	get() {
		let deferred = this._$q.defer();
      
        this._$http({ 
          url:'/blogs/all',
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
      url: '/blogs/blog/' + slug,
      method:'GET'
    }).then(
      (res) => {
        console.log('getOne', res.data);
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
           url:'/blogs/blog/' + slug,
           method: 'DELETE'
        });
  }

  save(project) {
    let request = {};

    if(project._id) {
      request.url = `/blogs/blog/${project._id}`;
      request.method = 'PUT';
    } else {
      request.url = '/blogs/entry';
      request.method = 'POST';
    }

    request.data = project;

    return this._$http(request).then((res) => {
      res.data.project
    });
  }
}

