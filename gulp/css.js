'use strict';

// Sass and CSS Stuff

const gulp = require('gulp')
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

gulp.task('css', function() {
  return gulp.src(config.paths.assets + '/sass/styles.scss')
  .pipe(sassGlob())
  .pipe(sass({
    outputStyle: 'expanded',
    includePaths: [
      'govuk_modules/govuk_frontend_toolkit/stylesheets',
      'govuk_modules/govuk_template/assets/stylesheets',
      'govuk_modules/govuk-elements-sass/'
    ],
  })).on('error', notify.onError(function (error) {
    return "Problem file : " + error.message;
  }))
  .pipe(sourcemaps.init())
  .pipe(sourcemaps.write())
  .pipe(autoprefixer(autoprefixerOptions))
  .pipe(browserSync.stream())
  .pipe(gulp.dest(config.paths.public + '/stylesheets/'));
});