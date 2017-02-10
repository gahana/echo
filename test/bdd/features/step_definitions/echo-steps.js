/* jslint node: true */
'use strict';

var apickli = require('apickli');

module.exports = function() {
    // cleanup before every scenario
    this.Before(function(scenario, callback) {
        this.apickli = new apickli.Apickli('http', 'srinisref-test.apigee.net');
        this.apickli.storeValueInScenarioScope("ECHO_TEXT", "HiThere");
        callback();
    });

    this.Given(/^I set query parameter (.*) to (.*)$/, function(param, value, callback) {
    	  var obj = {};
    	  obj.parameter = param;
    	  obj.value = value;
    	  var arr = [];
    	  arr.push(obj);
        this.apickli.setQueryParameters(arr);
        callback();
    });
};