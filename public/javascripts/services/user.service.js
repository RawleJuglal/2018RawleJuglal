export default class User {
	constructor(JWT, AppConstants, $http, $state, $q) {

		this._JWT = JWT;
		this._AppConstants = AppConstants;
		this._$http = $http;
		this._$state = $state;
		this._$q = $q;
	}

	attemptAuth(credentials) {
		let route = '/users/login';

		 return this._$http({
	       url:route,
	       method: 'POST',
	       data: credentials
	     }).then(
	       (res) => {
	       		this._JWT.save(res.data.token);
	       		this.current = res.data;
	       		return res;
	       }
	     );
	}

	logout() {
	    this._JWT.destroy();
	    this._$state.go('app.home');
	}
}