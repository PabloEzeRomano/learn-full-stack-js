'use strict';

import * as Immutable from 'immutable';
import {GET_USERS, SELECT_USER, MARK_USER, DELETE_USER} from '../actions/basic-example-actions';


const _users = Immutable.List([
  Immutable.Map({
    id       : 1,
    name     : 'Pablo',
    lastname : 'Romano',
    username : 'Pablol',
    marked   : false
  }),
  Immutable.Map({
    id       : 2,
    name     : 'Nicolas',
    lastname : 'Flesler',
    username : 'Fleshter',
    marked   : false
  }),
  Immutable.Map({
    id       : 3,
    name     : 'Gabriel',
    lastname : 'Matusevich',
    username : 'Judio',
    marked   : false
  }),
  Immutable.Map({
    id       : 4,
    name     : 'Bernardo',
    lastname : 'Arbuello',
    username : 'Naber',
    marked   : false
  }),
  Immutable.Map({
    id       : 5,
    name     : 'Pablo',
    lastname : 'Maramarco',
    username : 'Ciego',
    marked   : false
  })
]);

const INITIAL_STATE = Immutable.Map({
  users        : [],
  selectedUser : null
});

export default function users (state = INITIAL_STATE, action) {

  if (!action || !action.type) {
    return state;
  }

  var
    usersList,
    newList,
    user;

  switch (action.type) {

    case GET_USERS :

      return state.set('users', _users);
      break;

    case SELECT_USER :

      var selectedUser = null;

      usersList = state.get('users').forEach(
        function (user) {
          if (user.get('id') === action.payload) {
            selectedUser = user;
          }
        });

      return state.set('selectedUser', selectedUser);
      break;

    case MARK_USER :

      usersList = state.get('users');

      newList = usersList.update(
        usersList.findIndex(function(user) {
          return user.get('id') === action.payload;
        }),
        function (user) {
          return user.set('marked', !user.get('marked'));
        }
      );

      user = state.get('selectedUser');

      if (user.get('id') === action.payload) {
        user = user.set('marked', !user.get('marked'));
      }

      state = state.set('selectedUser', user);

      return state.set('users', newList);
      break;

    case DELETE_USER :

      usersList = state.get('users');

      var index = usersList.findIndex(function(user) {
        return user.get('id') === action.payload;
      });

      if (index !== -1) {
        newList = usersList.delete(index);
        if (state.get('selectedUser').get('id') === action.payload) {
          state = state.set('selectedUser', null);
        }
        return state.set('users', newList);
      }

      return state;
      break;

    default :

      return state;
  }

}