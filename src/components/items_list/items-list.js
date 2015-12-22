'use strict';

import template    from './items-list.html';
import style       from './items-list.styl';

export default ngModule => {

  ngModule.directive('itemsList',function () {

    return {
      restrict      : 'E',
      scope         : {
        items         : '=',
        headers       : '=',
        selectAction  : '@',
        parameterName : '@'
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