let gulp = require('gulp');
let notify = require('gulp-notify');

var interceptErrors = function(error) {
	var args = Array.prototype.slice.call(arguments);

	notify.onError({
		title: 'Compile Error',
		message: '<%= error.message %>'
	}).apply(this, args);

	this.emit('end');
};


gulp.task('bootstrap', function() {
	return gulp.src('node_modules/bootstrap/**/**.*')
	.pipe(gulp.dest('build/vendor/bootstrap'));
});

gulp.task('jquery', function() {
	return gulp.src('node_modules/jquery/**/**.*')
	.pipe(gulp.dest('build/vendor/jquery'));
});

gulp.task('html', function(){
	return gulp.src("public/index.html")
		.on('error', interceptErrors)
		.pipe(gulp.dest('./build/'));
});

gulp.task('default', gulp.series('bootstrap', 'jquery', 'html'), function(){
	console.log('finished');
});