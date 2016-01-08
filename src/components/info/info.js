'use strict';

import template    from './info.html';
import style       from './info.styl';

export default ngModule => {

  ngModule.directive('info',function () {

    return {
      restrict      : 'E',
      scope         : {
        userInfo   : '&'
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
