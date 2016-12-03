'use strict'

const gulp = require('gulp')
const gutil = require('gulp-util')
const plumber = require('gulp-plumber')
const config = require('./config.json')

const sass = require('gulp-sass')
const sassGlob = require('gulp-sass-glob')
const sourcemaps = require('gulp-sourcemaps')
const notify = require("gulp-notify")

const autoprefixer = require('gulp-autoprefixer')
const autoprefixerOptions = { browsers: ['last 2 versions', '> 5%', 'Firefox ESR'] }

// Local Server Stuff
const browserSync       = require('browser-sync').create();
const reload            = browserSync.reload;

function handleSass(taskConfig) {
	return gulp.src(taskConfig.gulpSrc, { nodir: true })
  .pipe(plumber(function (error) {
      gutil.log(error.message);
      this.emit('end');
  }))
  .pipe(sass({
    outputStyle: 'expanded',
    includePaths: taskConfig.includePaths
  }))
  .pipe(sourcemaps.init())
  .pipe(sourcemaps.write())
  .pipe(autoprefixer(autoprefixerOptions))
  .pipe(browserSync.stream())
  .pipe(gulp.dest(taskConfig.gulpDest));
};

gulp.task('css-fractal-theme', function(){
	handleSass({
		gulpSrc: [
			config.paths.fractal.sass + '/**/*'
		],
		includePaths: [
	    'govuk_modules/govuk_frontend_toolkit/stylesheets',
	    'govuk_modules/govuk_template/assets/stylesheets',
	    'govuk_modules/govuk-elements-sass/'
		],
		gulpDest: config.paths.public + '/stylesheets/'
	})
});

gulp.task('css-app', function(){
	handleSass({
		gulpSrc: [
			config.paths.assets + '/sass/**/*'
		],
		includePaths: [
	    'govuk_modules/govuk_frontend_toolkit/stylesheets',
	    'govuk_modules/govuk_template/assets/stylesheets',
	    'govuk_modules/govuk-elements-sass/'
		],
		gulpDest: config.paths.public + '/stylesheets/'
	})
});

gulp.task('css', ['css-fractal-theme','css-app']);
