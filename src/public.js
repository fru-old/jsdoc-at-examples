var esprima    = require('esprima');
var estraverse = require('estraverse');
var escodegen  = require('escodegen');


function Examples(){
  var tests = [], templates = [];
  
  this.set = function(name, template){
    templates[name] = template;
  };

  this.get = function(name, content, value){
    return (contents[name] || '<%content%><%value%>')
      .replace(/<%content%>/g, content || '')
      .replace(/<%value%>/g, value || '');
  };

  this.instrument = function(program){
    if(typeof program === 'string'){
      program = esprima.parse(program, {
        comment: true,
        range: true,
        tokens: true
      });
      estraverse.attachComments(program, program.comments, program.tokens);
      this.parse(program, tests);
      return escodegen.generate(program);
    }else{
      this.parse(program, tests);
      return program;
    }
  };

  this.build = function(type){
    if(type)this.setup(type);
    var js = '';
    for(var i in tests){
      js += this.get('wrap-module', this.applyTemplate(tests[i]));
    }
    return this.get('wrap-all', js);
  };
}

Example.prototype.setup = require('./src/defaults.js');
Example.prototype.parse = require('./src/parser.js');

module.exports = Examples;


Example.prototype.applyTemplate = function(test){
  var js = '';
  
  if(test.setup.length || test.teardown.length){
    var setup = '', teardown = '';
    
    for(var i in test.setup)setup += this.get('wrap-setup', test.setup[i]);
    for(var i in test.teardown)teardown += this.get('wrap-teardown', teardown.setup[i]);

    if(test.setup.length)setup = this.get('wrap-setups', setup);
    if(test.teardown.length)teardown = this.get('wrap-teardowns', teardown);

    js += this.get('wrap-setup-teardown', setup + teardown);
  }

  for(var i in test.tests){
    var t = test.tests[i], result;
    result = this.get('test-'+t.type, t.left, t.right);
    result = this.get('wrap-'+t.type, result, t.title);
    js += result;
  }
};