'use strict'

const gulp = require('gulp')
const concat = require('gulp-concat')
const config = require('./config.json')
const runSequence = require('run-sequence')

gulp.task('scripts:fractal', function(){
	return gulp.src([
		config.paths.fractal.scripts + '**/*.js'
	])
	.pipe(concat('scripts-fractal.js'))
	.pipe(gulp.dest(config.paths.public + '/javascripts/'));
})

gulp.task('scripts:content', function(){
	return gulp.src([
		config.paths.fractal.components + '/**/*.js'
	])
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest(config.paths.public + '/javascripts/'));
})

gulp.task('scripts', function(done) {
  runSequence(
    'scripts:fractal',
    'scripts:content',
    done
  )
})
