'use strict';

import * as Immutable from 'immutable';

export default state => {

  var newState = {};
  for (var i of Object.keys(state)) {
    if (Immutable.Iterable.isIterable(state[i])) {
      newState[i] = state[i].toJS();
    } else {
      newState[i] = state[i];
    }
  }
  return newState;

}

