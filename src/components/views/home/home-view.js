'use strict';

import controller  from './home-view-controller';
import template    from './home-view.html';
import style       from './home-view.styl';
import test        from './home-view.test';

export default ngModule => {

  if (ON_TEST) {
    test(ngModule);
  }

  ngModule.directive('homeView',function () {

    return {
      restrict      : 'E',
      scope         : {},
      replace       : true,
      template      : template,
      controllerAs  : 'home',
      controller    : controller,
      link : {
        post : function postLink (scope, element, attributes) {

        }
      }
    };

  });
};