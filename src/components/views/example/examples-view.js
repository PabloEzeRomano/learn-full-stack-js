'use strict';

import controller  from './examples-view-controller';
import template    from './examples-view.html';
import style       from './examples-view.styl';
import test        from './examples-view.test.js';

export default ngModule => {

  if (ON_TEST) {
    test(ngModule);
  }

  ngModule.directive('examplesView',function () {

    return {
      restrict      : 'E',
      scope         : {},
      replace       : true,
      template      : template,
      controllerAs  : 'examples',
      controller    : controller,
      link : {
        post : function postLink (scope, element, attributes) {
          
        }
      }
    };
    
  });
};