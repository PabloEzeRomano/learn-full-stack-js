'use strict';

import template    from './product-list.html';
import style       from './product-list.styl';

export default ngModule => {

  ngModule.directive('productList',function () {

    return {
      restrict      : 'E',
      scope         : {
        products      : '&',
        selectProduct : '&'
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