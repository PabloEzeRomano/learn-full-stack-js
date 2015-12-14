'use strict';

import {combineReducers}  from 'redux';
import {router}           from 'redux-ui-router';

import clientsStore from './clients-reducer';
import productsStore from './products-reducer';

const reducers = combineReducers(
  {
    router,
    clientsStore,
    productsStore
  }
);

export default reducers;