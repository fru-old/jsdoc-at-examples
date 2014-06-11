
var fs = require('fs');
var path = require('path');

var autodoc = require('../../index.js');
var istanbul = require('istanbul');
var instrumenter = autodoc(istanbul.Instrumenter);

module.exports = function(grunt) {
  grunt.initConfig({});

  grunt.registerTask('default', ['instrument']);

  grunt.registerTask('instrument', '', function() {
	var done = this.async();
	var counter = 0;
    grunt.file.expand('test-*.js').forEach(function(file){
	  counter++;
	  fs.readFile(path.resolve(file), 'utf8', function(err, content){
		var result = instrumenter.instrumentSync(content, path.resolve(file));
		fs.writeFile(path.resolve('actual-'+file), result, function(err) {
		  counter--;
		  if(counter <= 0)done();
		});
	  }); 
	});
  });

  // Seach root of project for grunt modules
  grunt.file.expand('../../node_modules/grunt-*/tasks').forEach(grunt.loadTasks);
};