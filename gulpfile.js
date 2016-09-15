var gulp = require('gulp');
var gutil = require('gulp-util');
var browserSync = require('browser-sync').create();
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Paths
var stylesDir = 'assets/css';
var scriptsDir = 'assets/js';


// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'js'], function () {
	browserSync.init({
		server: './',
		port: 4000,
		notify: false,
		ui: false
	});

	gulp.watch('*.html').on('change', browserSync.reload);
	gulp.watch(stylesDir + '/**/*.scss', ['sass']).on('change', browserSync.reload);
	gulp.watch(scriptsDir + '/**/*.js', ['js-watch']).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
	return sass(stylesDir + '/*.scss')
		.on('error', sass.logError)
		.pipe(autoprefixer({ // auto vendor prefixing
			browsers: ['last 3 versions'],
			cascade: false
		}).on('error', sass.logError))
		.pipe(gulp.dest(stylesDir + '/'))
		.pipe(browserSync.stream());
});

// process JS files and return the stream.
gulp.task('js', function () {
	return gulp.src([
			scriptsDir + '/main.js'
		])
		.pipe(concat('main.min.js')) // concatenate to one JS
		.pipe(uglify())
		.on('error', function(error) { console.log(error); this.emit('end'); })
		.pipe(gulp.dest(scriptsDir + '/'));
});

// create a task that ensures the `js` task is complete before reloading browsers
gulp.task('js-watch', ['js'], browserSync.reload);

// use default task to launch Browsersync and watch JS files
gulp.task('default', ['serve']);
