'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* require the mandelbrot theme module */
const mandelbrot = require('@frctl/mandelbrot');

/* include nunjucks filters from external file */
const nunjfilters = require(__dirname + '/lib/fractal/lib/filters')(fractal);
const nunjextensions = require(__dirname + '/lib/fractal/lib/extensions')(fractal);

/* configure nunjucks adapter for fractal merging in filters from nunjfilters */
const nunj = require('@frctl/nunjucks')(Object.assign({
	paths: ['lib/fractal/theme'],
  globals: {
    docs: fractal.docs
  }
}, nunjextensions, nunjfilters));

/* create a new instance with custom config options
see: http://fractal.build/guide/web/default-theme#configuration - */
const themeconfig = mandelbrot({
  "skin": "black",
  styles: [
    'default', // default fractal styles
    '/stylesheets/fonts.css', // govuk fonts.css
    '/stylesheets/fractal-theme.css' // dwp fractal theme overrides
  ],
  "scripts": [
      "default",
      "/javascripts/scripts-fractal.js"
  ],
  "scripts": [
      "default",
      "/javascripts/scripts-fractal.js"
  ],
  "nav": [
    "docs",
    "components"
  ],
  "panels": [
    "notes",
    "html",
    "view",
    "context",
    "resources",
    "info"
  ],
  "static": {
    "mount": "theme"
  }
});

// init function for the theme
themeconfig.on('init', function(env){
	Object.keys(nunjfilters.filters).forEach(function (filterName) {
		// add the each filter with the same name as define in the filters file
    env.engine.filters[filterName] = nunjfilters.filters[filterName]
  })
});

/* project meta data
----------------------------------------------------------------------------- */

fractal.set('project.department', 'DWP')
fractal.set('project.title', 'Design System')
fractal.set('project.phase', 'alpha')
fractal.set('project.version', 'v1.0')
fractal.set('project.author', 'DWP Digital developers')

/* fractal components
----------------------------------------------------------------------------- */

// register the Nunjucks adapter for components
fractal.components.engine(nunj)

// component look for files with a .nunj file extension
fractal.components.set('ext', '.nunj')

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/app/components')

fractal.components.set('default.preview', '@preview')

fractal.components.set('label', 'DWP Frontend')

/* fractal docs
----------------------------------------------------------------------------- */

// docs to look for files with a .nunj file extension
fractal.docs.set('ext', '.md')

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/app/docs')

// set the label for the documentation
fractal.docs.set('label','Docs')

// register the Nunjucks adapter for documentation
fractal.docs.engine(nunj)

/* fractal web UI
----------------------------------------------------------------------------- */

// specify a directory to hold the theme override templates
themeconfig.addLoadPath(__dirname + '/lib/fractal/theme')

/* tell fractal to use the configured theme by default */
fractal.web.theme(themeconfig)

/* set the directory within which any static HTML exports of the web UI should
be generated */
fractal.web.set('builder.dest', __dirname + '/build')

/* serve a directory of static assets via the web UI (so that you can link to
stylesheets from your preview layouts, for example) */
fractal.web.set('static.path', __dirname + '/public')
