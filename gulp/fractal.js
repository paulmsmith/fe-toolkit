'use strict'

const gulp = require('gulp')
const config = require('./config.json')

// Housekeeping
const fractal = require('../fractal.js');
const logger = fractal.cli.console;

// -----------------------------------------------------------------------------
// fractal tasks
// -----------------------------------------------------------------------------

// starts the development server on your local machine
gulp.task('frctlStart', function(){
  const server = fractal.web.server({
    sync: true
  });
  server.on('error', err => logger.error(err.message));
  return server.start().then(() => {
    logger.success(`Fractal server is now running at ${server.url}`);
  });
});

// builds a static version of the fractal instance
gulp.task('frctlBuild', function () {
  const builder = fractal.web.builder();
  builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
  builder.on('error', err => logger.error(err.message));
  return builder.build().then(() => {
    logger.success('Fractal build completed!');
  });
});