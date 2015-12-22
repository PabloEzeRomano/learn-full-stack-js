'use strict';

import * as Immutable from 'immutable';
import {GET_CLIENTS, SELECT_CLIENT, SELECT_CLIENTS_FOR_BILLS} from '../actions/clients-actions';

const _clients = Immutable.List([
  Immutable.Map({
    id       : 1,
    name     : 'Gabriel',
    lastname : 'Matusevich',
    cuit     : '20-65411204-9'
  }),
  Immutable.Map({
    id       : 2,
    name     : 'Pablo',
    lastname : 'Romano',
    cuit     : '20-35254321-8'
  })
]);

const INITIAL_STATE = Immutable.Map(
  {
    clients                 : [],
    selectedClient          : null,
    selectedClientForBills  : null
  }
);

export default function clients (state = INITIAL_STATE, action) {

  if (!action || !action.type) {
    return state;
  }

  let actionPayload = null;

  if (action.payload) {
    actionPayload = Immutable.fromJS(action.payload);
  }

  switch (action.type) {

    case GET_CLIENTS :

      return state.set('clients', _clients);
      break;

    case SELECT_CLIENT :

      return state.set('selectedClient', action.payload);
      break;

    case SELECT_CLIENTS_FOR_BILLS :

      let client = state.get('clients').find((client) => {
        return client.get('id') === actionPayload.get('clientId');
      });

      if (client) {
        state = state.set('selectedClientForBills', client);
      }

      return state;
      break;

    default :

      return state;
  }

}