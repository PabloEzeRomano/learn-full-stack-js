'use strict';

import template    from './module-list.html';
import style       from './module-list.styl';

export default ngModule => {

  ngModule.directive('moduleList',function () {

    return {
      restrict      : 'E',
      scope         : {
        onClickModule : '&',
        moduleList    : '&'
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
