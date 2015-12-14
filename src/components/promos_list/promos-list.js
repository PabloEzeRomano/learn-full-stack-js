'use strict';

import template    from './promos-list.html';
import style       from './promos-list.styl';

export default ngModule => {

  ngModule.directive('lrnPromosList',function () {

    return {
      restrict      : 'E',
      scope         : {
        promos : '='
      },
      replace       : true,
      template      : template,
      link : {
        post : function postLink (scope, element, attributes) {
          console.log(scope.promos);
        }
      }
    };

  });
};