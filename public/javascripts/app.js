import angular from 'angular';

import constants from './config/app.constants';
import appConfig from './config/app.config';
import appRun from './config/app.run';
import 'angular-ui-router';
import 'angular-scroll';

import './config/app.templates';

import './layout';
import './home';
import './components';
import './services';
import './login';
import './dashboard';
import './editor';
import './filters';

const requires = [
	'ui.router',
	'duScroll', 
	'templates',
	'app.services',
	'app.layout',
	'app.home',
	'app.components',
	'app.login',
	'app.dashboard',
	'app.editor',
	'app.filters',	
];

window.app = angular.module('app', requires).value('duScrollOffset', 80);

angular.module('app').constant('AppConstants', constants);
angular.module('app').config(appConfig);
angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
	strictDi:false
});