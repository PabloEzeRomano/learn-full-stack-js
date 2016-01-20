'use strict';

import template    from './module.html';
import style       from './module.styl';

export default ngModule => {

  ngModule.directive('module',function () {

    return {
      restrict      : 'E',
      scope         : {
        selectedModule : '&'
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
