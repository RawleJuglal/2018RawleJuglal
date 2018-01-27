import angular from 'angular';

let servicesModule = angular.module('app.services', []);

//Services
import UserService from './user.service';
servicesModule.service('User', UserService);

import JwtService from './jwt.service';
servicesModule.service('JWT', JwtService);

import FilmService from './film.service';
servicesModule.service('Film', FilmService);

import WebService from './web.service';
servicesModule.service('Web', WebService);

import BlogService from './blog.service';
servicesModule.service('Blog', BlogService);

import CommentService from './comment.service';
servicesModule.service('Comment', CommentService);

export default servicesModule;