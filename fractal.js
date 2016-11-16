'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* require the mandelbrot theme module */
const mandelbrot = require('@frctl/mandelbrot');

/* include nunjucks filters from external file */
const nunjfilters = require(__dirname + '/fractal/lib/filters')();

/* configure nunjucks adapter for fractal merging in filters from nunjfilters */
const nunj = require('@frctl/nunjucks')(Object.assign({
    globals: {
        // global-name: global-val
    },
    extensions: {
        // extension-name: function extensionFunc(){}
    }
}, nunjfilters));

/* create a new instance with custom config options */
const themeconfig = mandelbrot({
    // skin: "black",
    // nav: ["docs", "components"]
    "skin": "black",
    "nav": ["docs", "components"],
    "panels": ["notes", "html", "view", "context", "resources", "info"],
    "static": {
        "mount": "theme"
    }
});

/* project meta data
----------------------------------------------------------------------------- */

/* Set the title of the project */
fractal.set('project.title', 'DWP Frontend Toolkit');
fractal.set('project.version', 'v1.0');
fractal.set('project.author', 'Paul Smith');

/* fractal components
----------------------------------------------------------------------------- */

// register the Nunjucks adapter for components
fractal.components.engine(nunj);

// component look for files with a .nunj file extension
fractal.components.set('ext', '.nunj');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

fractal.components.set('default.preview', '@preview');

/* fractal docs
----------------------------------------------------------------------------- */

// register the Nunjucks adapter for documentation
fractal.docs.engine(nunj);

// docs to look for files with a .nunj file extension
fractal.docs.set('ext', '.nunj');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

/* fractal web UI
----------------------------------------------------------------------------- */

// specify a directory to hold the theme override templates
themeconfig.addLoadPath(__dirname + '/fractal/theme');

/* tell fractal to use the configured theme by default */
fractal.web.theme(themeconfig);

/* set the directory within which any static HTML exports of the web UI should 
be generated */
fractal.web.set('builder.dest', __dirname + '/build');

/* Tell fractal to use browsersync by default */
fractal.web.set('server.sync', true);

/* serve a directory of static assets via the web UI (so that you can link to 
stylesheets from your preview layouts, for example) */
fractal.web.set('static.path', __dirname + '/public');