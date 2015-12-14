'use strict';

import {combineReducers}  from 'redux';
import {router}           from 'redux-ui-router';

import clientsStore from './clients-reducer';
import basicExampleStore from './basic-example-reducer';

const reducers = combineReducers(
  {
    router,
    basicExampleStore,
    clientsStore
  }
);

export default reducers;