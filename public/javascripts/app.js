import angular from 'angular';

import constants from './config/app.constants';
import appConfig from './config/app.config';
import appRun from './config/app.run';
import 'angular-ui-router';

import './config/app.templates';

import './layout';
import './home';

const requires = [
	'ui.router', 
	'templates',
	'app.layout',
	'app.home'	
];

window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);
angular.module('app').config(appConfig);
angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
	strictDi:true
});