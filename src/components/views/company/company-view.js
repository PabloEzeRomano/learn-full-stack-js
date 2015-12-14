'use strict';

import controller  from './company-view-controller';
import template    from './company-view.html';
import style       from './company-view.styl';
import test        from './company-view.test';

export default ngModule => {

  if (ON_TEST) {
    test(ngModule);
  }

  ngModule.directive('companyView',function () {

    return {
      restrict      : 'E',
      scope         : {},
      replace       : true,
      template      : template,
      controllerAs  : 'company',
      controller    : controller,
      link : {
        post : function postLink (scope, element, attributes) {

        }
      }
    };

  });
};

