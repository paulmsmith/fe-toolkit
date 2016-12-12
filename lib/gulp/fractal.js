'use strict'

const gulp = require('gulp')
const config = require('./config.json')

console.log(__dirname);

// Housekeeping
const fractal = require('../../fractal.js');
const logger = fractal.cli.console;

/**
 * run a fractal web server with a passed config object
 * @method runFractalServer
 * @param  {object}         config configuration object see http://fractal.build
 */
function runFractalServer(config) {
  const server = fractal.web.server({
    sync: config.sync
  });
  server.on('error', err => logger.error(err.message));
  return server.start().then(() => {
    logger.success(`Fractal server is now running at ${server.url}`);
		logger.success(`Network URL: ${server.urls.sync.external}`);
  });
}

// starts the development server on your local machine
gulp.task('frctlstart:development', function(){
  runFractalServer({ sync: true })
});

// builds a static version of the fractal instance
gulp.task('frctlbuild', function () {
  const builder = fractal.web.builder();
  builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
  builder.on('error', err => logger.error(err.message));
  return builder.build().then(() => {
    logger.success('Fractal build completed!');
  });
});
