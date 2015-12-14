'use strict';

export const GET_USERS     = 'GET_USERS';
export const SELECT_USER   = 'SELECT_USER';
export const MARK_USER     = 'MARK_USER';
export const DELETE_USER   = 'DELETE_USER';

export function getUsers () {
  return {
    type : GET_USERS
  }
}

export function selectUser (user) {
  return {
    type    : SELECT_USER,
    payload : user
  }
}

export function markUser (user) {
  return {
    type    : MARK_USER,
    payload : user
  }
}

export function deleteUser (user) {
  return {
    type    : DELETE_USER,
    payload : user
  }
}
export default {
  getUsers,
  selectUser,
  markUser,
  deleteUser
}