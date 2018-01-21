import angular from 'angular';

let filtersModule = angular.module('app.filters', []).filter('trusted', function($sce){
	return function(url) {
		return $sce.trustAsResourceUrl(url);
	};
});

export default filtersModule;