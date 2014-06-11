var esprima    = require('esprima');
var estraverse = require('estraverse');
var escodegen  = require('escodegen');
var parse      = require('./src/parser.js');

module.exports = function(instrumenter){
	"use strict";
	
	// If constructor is passed build instrumenter
	if(typeof instrumenter === 'function'){
		instrumenter = new instrumenter({
			preserveComments: true,
			noCompact: true
		});
	}
	
	// Contains the result 
	var examples = new Examples();

	// If code is directlly passed 
	if(typeof instrumenter === 'string'){
		var code = instrumenter;
		code = esprima.parse(code, {
			comment: true,
			range: true,
			tokens: true
		});
		estraverse.attachComments(code, code.comments, code.tokens);
		parse(code, examples.comments);
		examples.code = escodegen.generate(result);
		return examples;
	}
	
	// Intercept default walker with plugin
	var oldStartWalk = instrumenter.walker.startWalk;
	instrumenter.walker.startWalk = function(program){
		oldStartWalk.apply(this, arguments);
		parse(program, examples.comments);
	};

	// Return the istanbul instrumenter 
	instrumenter.examples = examples;
	return instrumenter;

	/* 
	 * Public interface 
	 * 
	 */
	function Examples(){
		this.comments = [];
		var contents = [];
		
		this.set = function(name, content){
			contents[name] = content;
		};
		
		this.get = function(name, content, value){
			return (contents[name] || '<%content%><%value%>')
				.replace(/<%content%>/g, content || '')
				.replace(/<%value%>/g, value || '');
		};
		
		this.build = function(){
			var content = '';
			for(var i in this.comments){
				var comment = commments[i];
				for(var j in comment.expose){
					content += this.get('expose', null, comment.expose[j]);
				}
				var test = '';
				for(var j in comment.setup){
					test += this.get('setup', comment.setup[j]);
				}
				var innertest = '';
				for(var j in comment.tests){
					var t = comment.tests[j];
					innertest += this.get(t.type, t.content, t.value);
				}
				if(innertest)test += this.get('test-inner', innertest);
				for(var j in comment.teardown){
					test += this.get('teardown', comment.teardown[j]);
				}
				if(test)content += this.get('test', test);
			}
			return this.get('template', content);
		};
	}
}