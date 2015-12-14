'use strict';

import template    from './basic-example.html';
import style       from './basic-example.styl';

export default ngModule => {

  ngModule.directive('lrnBasicExample',function () {

    return {
      restrict      : 'E',
      scope         : {
        usersList    : '&',
        selectedUser : '&',
        selectUser   : '&',
        markUser     : '&',
        deleteUser   : '&'
      },
      replace       : true,
      template      : template,
      link : {
        post : function postLink (scope, element, attributes) {

        }
      }
    };

  });
};