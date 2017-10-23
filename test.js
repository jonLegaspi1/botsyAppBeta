'use strict';

/**
 * Module dependencies.
 */
var should = require('should'), 
  mongoose = require('mongoose'), 
  User = require('../models/user.server.model'), 
  config = require('../config/config');

var app;
var assert = require("assert");
var path = require('path');
var app = require(path.resolve('./config/lib/app'));

describe('Register Page', function(){
  describe('Customer Registration', function(){
    it('should be able to register as customer', function(){
      broweser.get('http://localhost:3000/');
      element(by.model())
    })
  })
});
app.init(function () {
  console.log('Initialized test automation');
});
