'use strict'

const gulp = require('gulp')
const config = require('./config.json')
const runSequence = require('run-sequence')

gulp.task('copy-govuk-modules', function (done) {
  runSequence(
    'copy-toolkit',
    'copy-template-assets',
    'copy-elements-sass',
    'copy-template',
    done
  )
})

gulp.task('generate-assets', function(done){
  runSequence(
    'clean',
    'copy-govuk-modules',
    'css',
    'copy-assets',
    done
  )
})

gulp.task('watch', function(done){
  runSequence(
    'watch-assets',
    'watchCSS',
    'watchJS',
    done
  )
})

gulp.task('fractal:server', function(done){
  runSequence(
    'generate-assets',
    'frctlStart',
    done
  )
})

gulp.task('dev', function(done) {
  runSequence(
    'generate-assets',
    'frctlStart:development',
    'watch'
  )  
})

gulp.task('default', function(done) {
  runSequence(
    'fractal:server'
  )  
})