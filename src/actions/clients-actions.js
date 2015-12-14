'use strict';

export const GET_CLIENTS    = 'GET_CLIENTS';
export const SELECT_CLIENT  = 'SELECT_CLIENT';

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

export default {
  getClients,
  selectClient
}