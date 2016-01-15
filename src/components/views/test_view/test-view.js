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
        post : function postLink (scope,uiGridConstants, element, attributes) {

          scope.myCollection = [
            {
              "firstName": "Cox",
              "lastName": "Carney",
              "age": "23",
              "employedSince": "17/02/2000"
            },
            {
              "firstName": "Lorraine",
              "lastName": "Wise",
              "age": "45",
              "employedSince": "30/05/2010"
            },
            {
              "firstName": "Nancy",
              "lastName": "Waters",
              "age": "34",
              "employedSince": '11/09/2002'
            }
          ];


          scope.uiGridHeader = {
            showGridFooter: true,
            showColumnFooter: true,
            enableFiltering: true,
            data: scope.myCollection,
            columnDefs:
              [
                { field: 'firstName', width: '10%' },
                { field: 'lastName',width: '10%' },
                { field: 'age', aggregationType: uiGridConstants.aggregationTypes.sum, width:'10%'},
                { field: 'employedSince', width: '10%'},
                { name:'minAge',field: 'age', aggregationType: uiGridConstants.aggregationTypes.min, displayName: 'Minimum age',width: '10%' },
                { name:'maxAge',field: 'age', aggregationType: uiGridConstants.aggregationTypes.max, displayName: 'Maximum age',width: '10%' },
                { name:'avgAge',field: 'age', aggregationType: uiGridConstants.aggregationTypes.avg, displayName: 'Average age',width: '10%'}
              ],
            onRegisterApi: function(gridApi) {
              $scope.gridApi = gridApi;
            }
          };

          console.log('data', scope.uiGridHeader.data);

        }
      }
    };

  });
};