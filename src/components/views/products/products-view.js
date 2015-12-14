'use strict';

import controller  from './products-view-controller';
import template    from './products-view.html';
import style       from './products-view.styl';
import test        from './products-view.test';

export default ngModule => {

  if (ON_TEST) {
    test(ngModule);
  }

  ngModule.directive('productsView',function () {

    return {
      restrict      : 'E',
      scope         : {},
      replace       : true,
      template      : template,
      controllerAs  : 'products',
      controller    : controller,
      link : {
        post : function postLink (scope, element, attributes) {

        }
      }
    };

  });
};

