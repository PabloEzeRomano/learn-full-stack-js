'use strict';

import angular from 'angular';

if (ON_TEST) {
  require('angular-mocks/angular-mocks');
}

const bootstrap   = require('../node_modules/bootstrap/dist/css/bootstrap.min.css');

const ngModule = angular.module('app', []);

import components from './components';

components(ngModule);