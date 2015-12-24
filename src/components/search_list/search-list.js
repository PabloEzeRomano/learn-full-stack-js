'use strict';

import template    from './search-list.html';
import style       from './search-list.styl';

export default ngModule => {

  ngModule.directive('searchList',function () {

    return {
      restrict      : 'E',
      scope         : {
        onSearchSubmit : '@',
        onItemClick    : '@',
        orderBy        : '@',
        listItems      : '@'
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