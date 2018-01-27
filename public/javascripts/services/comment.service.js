export default class Comment {
	constructor($http, $state, $q) {
		this._$http = $http;
		this._$state = $state;
		this._$q = $q;
	}

  destroy(blogID, commentID) {
    let request = {};
    request.url = `comments/${blogID}/comment/${commentID}`;
    request.method = 'DELETE';
    return this._$http(request).then((res) => {
      return res.data;
    });
  }

  save(blogID, comment) {
    let request = {
      url: `comments/${blogID}/comment/entry`,
      method:'POST',
      data: comment
    };

    return this._$http(request).then((res) => {
      return res.data;
    });
  }
}

