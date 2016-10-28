'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

// include nunjucks filters from external file
const nunjfilters = require(__dirname + '/lib/filters')();

/* Configure nunjucks adapter for fractal merging in filters from nunjfilters */
const nunj = require('@frctl/nunjucks')(Object.assign({
    globals: {
        // global-name: global-val
    },
    extensions: {
        // extension-name: function extensionFunc(){}
    }
}, nunjfilters));

// register the Nunjucks adapter for components
fractal.components.engine(nunj);

// register the Nunjucks adapter for documentation
fractal.docs.engine(nunj);

// look for files with a .nunj file extension
fractal.components.set('ext', '.nunj');

// look for files with a .nunj file extension
fractal.docs.set('ext', '.nunj');

/* Set the title of the project */
fractal.set('project.title', 'DWP Front-end toolkit');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');