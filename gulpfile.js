var path = require('path'), gulp = require('gulp'), sass = require('gulp-sass'), debug = false;

gulp.task('copyfiles', function() {
    gulp.src('src/app/**/').pipe(gulp.dest('www_dev/app/'));
    gulp.src('src/image/**/').pipe(gulp.dest('www_dev/image/'));
    gulp.src('src/template/**/').pipe(gulp.dest('www_dev/template/'));
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
gulp.task('debug', function() {
    debug = true;
});

gulp.task('default', [ 'sass', 'copyfiles' ]);