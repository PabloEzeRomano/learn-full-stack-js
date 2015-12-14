'use strict';

import * as Immutable from 'immutable';
import {GET_CLIENTS, SELECT_CLIENT} from '../actions/clients-actions';

const _clients = Immutable.List([
  Immutable.Map({
    id        : 1,
    name      : 'Gabriel',
    lastname  : 'Matusevich'
  }),
  Immutable.Map({
    id        : 2,
    name      : 'Pablo',
    lastname  : 'Romano'
  })
]);

const INITIAL_STATE = Immutable.Map(
  {
    clients         : [],
    selectedClient  : null
  }
);

export default function clients (state = INITIAL_STATE, action) {

  if (!action || !action.type) {
    return state;
  }

  switch (action.type) {

    case GET_CLIENTS :

      return state.set('clients', _clients);
      break;

    case SELECT_CLIENT :

      return state.set('selectedClient', action.payload);
      break;

    default :

      return state;
  }

}