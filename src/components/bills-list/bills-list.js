'use strict';

import template    from './bills-list.html';
import style       from './bills-list.styl';

export default ngModule => {

  ngModule.directive('billsList',function () {

    return {
      restrict      : 'E',
      scope         : {
        clients    : '&',
        bills      : '&',
        selectBill : '&',
        openBill   : '&'
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