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
}
