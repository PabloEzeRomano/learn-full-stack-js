'use strict';

import template    from './favorites-list.html';
import style       from './favorites-list.styl';

export default ngModule => {

  ngModule.directive('lrnFavoritesList',function () {

    return {
      restrict      : 'E',
      scope         : {
        favorites : '='
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