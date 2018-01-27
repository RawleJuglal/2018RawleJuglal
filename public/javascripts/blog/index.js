import angular from 'angular';

let blogModule = angular.module('app.blog', []);

import BlogConfig from './blog.config';
blogModule.config(BlogConfig);

import BlogCtrl from './blog.controller';
blogModule.controller('BlogCtrl', BlogCtrl);

export default blogModule;