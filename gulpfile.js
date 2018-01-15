let gulp = require('gulp');
let notify = require('gulp-notify');
let source = require('vinyl-source-stream');
let browserify = require('browserify');
let babelify = require('babelify');
let ngAnnotate = require('browserify-ngannotate');
let browserSync = require('browser-sync').create();
let jshint = require('gulp-jshint');
let rename = require('gulp-rename');
let templateCache = require('gulp-angular-templatecache');

let interceptErrors = function(error) {
	var args = Array.prototype.slice.call(arguments);

	notify.onError({
		title: 'Compile Error',
		message:'<%= error.message %>'
	}).apply(this, args);

	this.emit('end');
};

var jsFiles = "public/javascripts/**/*.js";
var viewFiles = "public/javascripts/**/*.html";

gulp.task('lint', [], function(){
	return gulp.src('jsFiles')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('browserify', ['views'], function(){
	return browserify('./public/javascripts/app.js')
	.transform(babelify, {presets:["env"]})
	.transform(ngAnnotate)
	.bundle()
	.on('error', interceptErrors)
	.pipe(source('main.js'))
	.pipe(gulp.dest('./build/'));
});

gulp.task('html', [], function(){
	return gulp.src("public/index.html")
		.on('error', interceptErrors)
		.pipe(gulp.dest('./build/'));
});

gulp.task('css', [], function(){
	return gulp.src("public/stylesheets/*.css")
		.on('error', interceptErrors)
		.pipe(gulp.dest('./build/'));
});

gulp.task('views', [], function(){
	return gulp.src(viewFiles)
		.pipe(templateCache({
			standalone: true
		}))
		.on('error', interceptErrors)
		.pipe(rename("app.templates.js"))
		.pipe(gulp.dest('./public/javascripts/config/'));
});

gulp.task('errors', [], function(){
	return gulp.src("public/*.ejs")
		.on('error', interceptErrors)
		.pipe(gulp.dest('./build/'));
});

gulp.task('bootstrap', [], function(){
	return gulp.src('node_modules/bootstrap/**/**.*')
	.pipe(gulp.dest('./build/vendor/bootstrap'));
});

gulp.task('jquery', [], function(){
	return gulp.src('node_modules/jquery/**/**.*')
	.pipe(gulp.dest('./build/vendor/jquery'));
});

gulp.task('animateCSS', [], function(){
	return gulp.src('node_modules/animate.css/**/**.*')
	.pipe(gulp.dest('./build/vendor/animate'));
});

gulp.task('default', ['lint', 'html', 'css', 'errors', 'bootstrap', 'jquery', 'animateCSS', 'browserify'], function(done){
  console.log('all tasks finished');
});


// gulp.task('default', gulp.series('bootstrap', 'jquery', 'html', 'css', 'browserify'), function(done){
// 	done();
// });