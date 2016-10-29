'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* require the mandelbrot theme module */
const mandelbrot = require('@frctl/mandelbrot');

/* include nunjucks filters from external file */
const nunjfilters = require(__dirname + '/lib/filters')();

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
    skin: "black",
    nav: ["docs", "components"]
});

/* fractal instantiation
----------------------------------------------------------------------------- */

/* Set the title of the project */
fractal.set('project.title', 'DWP Frontend Toolkit');

// register the Nunjucks adapter for components
fractal.components.engine(nunj);

// component look for files with a .nunj file extension
fractal.components.set('ext', '.nunj');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

// register the Nunjucks adapter for documentation
fractal.docs.engine(nunj);

// docs to look for files with a .nunj file extension
fractal.docs.set('ext', '.nunj');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

// specify a directory to hold the theme override templates
themeconfig.addLoadPath(__dirname + '/theme_overrides');

/* tell fractal to use the configured theme by default */
fractal.web.theme(themeconfig);

/* Tell fractal to use browsersync by default */
fractal.web.set('server.sync', true);