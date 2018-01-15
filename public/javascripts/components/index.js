import angular from 'angular';

let componentsModule = angular.module('app.components', []);

import WebList from './weblist.component';
componentsModule.component('webList', WebList);

import FilmList from './filmlist.component';
componentsModule.component('filmList', FilmList);

export default componentsModule;