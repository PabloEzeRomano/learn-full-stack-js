'use strict';

export const GET_CLIENTS              = 'GET_CLIENTS';
export const SELECT_CLIENT            = 'SELECT_CLIENT';
export const SELECT_CLIENTS_FOR_BILLS = 'SELECT_CLIENTS_FOR_BILLS';

export function getClients () {
  return {
    type : GET_CLIENTS
  }
}

export function selectClient (client) {
  return {
    type    : SELECT_CLIENT,
    payload : client
  }
}

export function selectClientForBills (clientId) {
  return {
    type    : SELECT_CLIENTS_FOR_BILLS,
    payload : {
      clientId
    }
  }
}

export default {
  getClients,
  selectClient,
  selectClientForBills
}