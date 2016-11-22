'use strict';

const gulp = require('gulp')
const clean = require('gulp-clean')
const config = require('./config.json')

gulp.task('clean', function(){
  return gulp.src([
    config.paths.public + '/*',
    config.paths.govukModules + '/*'
  ], {read: false})
  .pipe(clean())
});