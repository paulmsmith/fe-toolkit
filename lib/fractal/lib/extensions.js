'use strict'

module.exports = function(fractal) {

  /**
   * object used store the methods registered as a 'extension' (of the same name) within nunjucks
   * extension.foo("input") here, becomes {% foo &} within nunjucks templates
   * @type {Object}
   */
  const extensions = {}

  return {
    extensions: extensions
  }

}
