'use strict';

import controller  from './test-view-controller';
import template    from './test-view.html';
import style       from './test-view.styl';
import test        from './test-view.test';

export default ngModule => {

  if (ON_TEST) {
    test(ngModule);
  }

  ngModule.directive('testView',function () {

    return {
      restrict      : 'E',
      scope         : {},
      replace       : true,
      template      : template,
      controllerAs  : 'testView',
      controller    : controller,
      link : {
        post : function postLink (scope, element, attributes) {

          scope.myCollection = [
            {
              "firstName": "Cox",
              "lastName": "Carney",
              "company": "Enormo",
              "employed": true
            },
            {
              "firstName": "Lorraine",
              "lastName": "Wise",
              "company": "Comveyer",
              "employed": false
            },
            {
              "firstName": "Nancy",
              "lastName": "Waters",
              "company": "Fuelton",
              "employed": false
            }
          ];


          scope.uiGridHeader = {
            showGridFooter: true,
            showColumnFooter: true,
            enableFiltering: true,
            data: scope.myCollection
          };

          console.log('data', scope.uiGridHeader.data);

        }
      }
    };

  });
};