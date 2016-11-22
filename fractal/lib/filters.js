module.exports = function(env) {
  
  /**
   * object used store the methods registered as a 'filter' (of the same name) within nunjucks
   * filters.foo("input") here, becomes {{ "input" | foo }} within nunjucks templates
   * @type {Object}
   */
  const filters = {};

  /**
   * logs an item of any type in the template to the console on the client.
   * @param  {Any} item any type
   * @return {String}   a script tag with a console.log call.
   * @example {{ "hello world" | log }}
   * @example {{ "hello world" | log | safe }}  [for environments with autoescaping turned on]
   */
  filters.log = function log(item) {
  	return '<script>console.log(' + JSON.stringify(item, null, '\t') + ');</script>';
  };
  
  return { 
    filters: filters
  }
  
}