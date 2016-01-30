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
        pre : function (scope, element, attributes) {
          console.log(scope.sarConfig());
        },
        post : function postLink (scope, element, attributes) {

          console.log('post child', scope.sarConfig());

          scope.$watch(scope.sarConfig, (newValue, oldValue) => {
            console.log('watch', oldValue, newValue);
          });

          var classes = [];

          if (attributes.classes)
            classes = attributes.classes.split('|');

          scope.getOuterClasses = () => {

            return !classes[0] ? 'panel panel-default' : classes[0];

          };

          scope.getHeadingClasses = () => {

            return !classes[1] ? 'panel-heading' : classes[1];

          };

          scope.getBodyClasses = () => {

            return !classes[2] ? 'panel-body' : classes[2];

          };

          scope.getFooterClasses = () => {

            return !classes[3] ? 'panel-footer' : classes[3];

          };

          scope.formModel = {};



        }
      }
    };

  });
};