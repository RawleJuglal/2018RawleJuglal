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
}

