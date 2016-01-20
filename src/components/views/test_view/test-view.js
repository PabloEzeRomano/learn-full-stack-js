'use strict';

import controller  from './test-view-controller';
import template    from './test-view.html';
import style       from './test-view.styl';
import test        from './test-view.test';

export default ngModule => {

  if (ON_TEST) {
    test(ngModule);
  }

  ngModule.directive('testView',function (uiGridConstants) {

    return {
      restrict      : 'E',
      scope         : {},
      replace       : true,
      template      : template,
      controllerAs  : 'testView',
      controller    : controller,
      link : {
        post : function postLink (scope, element, attributes) {

          scope.formFields = [
            {
              key: 'username',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Username',
                placeholder: 'Enter your username',
                required: true
              }
            },
            {
              key: 'firstName',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'First Name',
                placeholder: 'Enter your first name',
                required: true
              }
            },
            {
              key: 'lastName',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Last Name',
                placeholder: 'Enter your last name',
                required: true
              }
            },
            {
              key: 'email',
              type: 'input',
              templateOptions: {
                type: 'email',
                label: 'Email address',
                placeholder: 'Enter email',
                required: true
              }
            }
          ];

          scope.onSubmit = (model) => {
            console.log('model', model);
          };

        }
      }
    };

  });
};