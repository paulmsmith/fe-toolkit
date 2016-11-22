'use strict'

const gulp = require('gulp')
const concat = require('gulp-concat')
const config = require('./config.json')

gulp.task('scripts', function() {
  return gulp.src([
    config.paths.assets + '/javascripts/**/*.js',
    config.paths.fractal.components + '/**/*.js'
  ])
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest(config.paths.public + '/javascripts/'));
});
