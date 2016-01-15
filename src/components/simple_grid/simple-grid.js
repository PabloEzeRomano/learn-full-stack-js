'use strict';

import template    from './simple-grid.html';
import style       from './simple-grid.styl';

export default ngModule => {

  ngModule.directive('simpleUiGrid',function () {

    return {
      restrict      : 'E',
      scope         : {
        collection : '&',
        header     : '&'
      },
      replace       : true,
      template      : template,
      link : {
        post : function postLink (scope, element, attributes) {

          console.log('collection', scope.collection());

          console.log('header', scope.header);

          console.log('scope', scope);

        }
      }
    };

  });
};
