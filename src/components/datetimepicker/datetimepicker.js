'use strict';

export default ngModule => {

  ngModule.directive('dateTimePicker',function ($rootScope) {

    return {
      require: '?ngModel',
      restrict: 'AE',
      scope: {
        pick12HourFormat: '@',
        language: '@',
        useCurrent: '@',
        location: '@'
      },
      link: function (scope, elem, attrs) {
        elem.datetimepicker({
          pick12HourFormat: scope.pick12HourFormat,
          language: scope.language,
          useCurrent: scope.useCurrent
        });

        elem.on('blur', function () {

          console.info('this', this);
          console.info('scope', scope);
          console.info('attrs', attrs);

        })
      }
    };
  })
}