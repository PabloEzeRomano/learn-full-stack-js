'use strict';

import template    from './simple-grid.html';
import style       from './simple-grid.styl';

export default ngModule => {

  ngModule.directive('simpleUiGrid',function () {

    return {
      restrict      : 'E',
      scope         : {
        gridOptions : '&'
      },
      replace       : true,
      template      : template,
      link : {
        post : function postLink (scope, element, attributes) {

          console.log('Grid Options', scope.gridOptions());

        }
      }
    };

  });
};
