'use strict';

import {combineReducers}  from 'redux';
import {router}           from 'redux-ui-router';

import clientsStore from './clients-reducer';

const reducers = combineReducers(
  {
    router,
    clientsStore
  }
);

export default reducers;