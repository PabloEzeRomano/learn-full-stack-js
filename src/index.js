'use strict';

import jquery             from '../node_modules/jquery/dist/jquery.min';
import bootstrapJs        from '../node_modules/bootstrap/dist/js/bootstrap.min';

import angular            from 'angular';
import angularUiRouter    from 'angular-ui-router';
import angularUiBootstrap from './lib/ui-bootstrap-tpls-0.14.3.min';
import {combineReducers}  from 'redux';
import createLogger       from 'redux-logger';
import ngRedux            from 'ng-redux';
import ngReduxRouter      from 'redux-ui-router';
import * as Immutable     from 'immutable';
import ngImmutable        from './lib/ng-immutable';
import stateTransformer   from './lib/state-transformer';
import thunk              from 'redux-thunk';
import moment             from 'moment';

import routerConfig       from './index.config';

import reducers           from './reducers';

if (ON_TEST) {
  require('angular-mocks/angular-mocks');
}

const bootstrapCss = require('../node_modules/bootstrap/dist/css/bootstrap.min.css');

const logger = createLogger({
  level: 'info',
  collapsed: true,
  stateTransformer: stateTransformer
});

const ngModule = angular.module('app', [
  angularUiRouter,
  'ui.bootstrap',
  ngRedux,
  ngReduxRouter,
  ngImmutable
]);

ngModule.config(($ngReduxProvider) => {
  $ngReduxProvider.createStoreWith(reducers, ['ngUiRouterMiddleware', thunk, logger]);
});

ngModule.config(routerConfig);

import components from './components';
import services   from './services';

components(ngModule);
services(ngModule);