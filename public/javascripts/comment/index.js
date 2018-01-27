import angular from 'angular';

let commentModule = angular.module('app.comment', []);

import CommentConfig from './comment.config';
commentModule.config(CommentConfig);

import CommentCtrl from './comment.controller';
commentModule.controller('CommentCtrl', CommentCtrl);

export default commentModule;