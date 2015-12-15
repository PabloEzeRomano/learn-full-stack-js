'use strict';

import controller  from './product-view-controller';
import template    from './product-view.html';
import style       from './product-view.styl';
import test        from './product-view.test';

export default ngModule => {

  if (ON_TEST) {
    test(ngModule);
  }

  ngModule.directive('productView',function () {

    return {
      restrict      : 'E',
      scope         : {},
      replace       : true,
      template      : template,
      controllerAs  : 'product',
      controller    : controller,
      link : {
        post : function postLink (scope, element, attributes) {

        }
      }
    };

  });
};
