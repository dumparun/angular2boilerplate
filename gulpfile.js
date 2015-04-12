var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var debug = true;

gulp.task('copyfiles', function() {
    gulp.src('src/app/**/').pipe(gulp.dest('www_dev/app/'));
    gulp.src('src/image/**/').pipe(gulp.dest('www_dev/image/'));
    gulp.src('src/template/**/').pipe(gulp.dest('www_dev/template/'));
});

gulp.task('cleanapp', function() {
    return del([ 'www_dev/app' ]);
});

gulp.task('sass', function() {
    var options = {
	errLogToConsole : true
    };
    if (!debug) {
	options.outputStyle = 'expanded';
	options.sourceComments = 'map';
    }
    var cssTask = gulp.src('src/sass/main.scss').pipe(sass(options));
    cssTask.pipe(gulp.dest('www_dev/css'));
});

gulp.task('default', [ 'sass', 'copyfiles' ]);