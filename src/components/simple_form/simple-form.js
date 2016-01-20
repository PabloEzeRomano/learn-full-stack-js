'use strict';

import template    from './simple-form.html';
import style       from './simple-form.styl';

export default ngModule => {

  ngModule.directive('sarSimpleForm',function () {

    return {
      restrict      : 'E',
      scope         : {
        title        : '@',
        subtitle     : '@',
        sarConfig    : '&',
        onFormSubmit : '&'
      },
      replace       : true,
      template      : template,
      link : {
        post : function postLink (scope, element, attributes) {

          scope.formModel = {};

          console.log('sarConfig', scope.sarConfig[1]);

        }
      }
    };

  });
};