'use strict';

import controller  from './basic-example-view-controller';
import template    from './basic-example-view.html';
import style       from './basic-example-view.styl';
import test        from './basic-example-view.test';

export default ngModule => {

  if (ON_TEST) {
    test(ngModule);
  }

  ngModule.directive('lrnBasicExampleView',function () {

    return {
      restrict      : 'E',
      scope         : {},
      replace       : true,
      template      : template,
      controllerAs  : 'basic',
      controller    : controller,
      link : {
        post : function postLink (scope, element, attributes) {

        }
      }
    };

  });
};
