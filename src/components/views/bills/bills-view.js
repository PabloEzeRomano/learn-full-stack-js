'use strict';

import controller  from './bills-view-controller';
import template    from './bills-view.html';
import style       from './bills-view.styl';
import test        from './bills-view.test';

export default ngModule => {

  if (ON_TEST) {
    test(ngModule);
  }

  ngModule.directive('billsView',function () {

    return {
      restrict      : 'E',
      scope         : {},
      replace       : true,
      template      : template,
      controllerAs  : 'bill',
      controller    : controller,
      link : {
        post : function postLink (scope, element, attributes) {

        }
      }
    };

  });
};
