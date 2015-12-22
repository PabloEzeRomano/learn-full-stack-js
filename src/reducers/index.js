'use strict';

import {combineReducers}  from 'redux';
import {router}           from 'redux-ui-router';

import clientsStore       from './clients-reducer';
import basicExampleStore  from './basic-example-reducer';
import productsStore      from './products-reducer';
import billsStore         from './bills-reducer';

const reducers = combineReducers(
  {
    router,
    basicExampleStore,
    productsStore,
    clientsStore,
    billsStore
  }
);

export default reducers;