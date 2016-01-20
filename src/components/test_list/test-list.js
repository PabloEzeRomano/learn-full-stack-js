'use strict';

import template    from './test-list.html';
import style       from './test-list.styl';

export default ngModule => {

  ngModule.directive('testList',function () {

    return {
      restrict      : 'E',
      scope         : {},
      replace       : true,
      template      : template,
      link : {
        post : function postLink (scope, element, attributes) {

          scope.items = [
            {
              name : 'Gabriel'
            },
            {
              name : 'Pablo'
            },
            {
              name : 'Nico'
            }
          ]

        }
      }
    };

  });
};
