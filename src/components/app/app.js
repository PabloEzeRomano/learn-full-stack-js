'use strict';

export default ngModule => {

  if (ON_TEST) {
    require('./app.test')(ngModule);
  }

  ngModule.directive('lrnApp',function () {

    require('./app.styl');

    return {
      restrict      : 'E',
      scope         : {},
      replace       : true,
      template      : require('./app.html'),
      controllerAs  : 'vm',
      controller    : function Ctrl () {
        var vm = this;
      },
      link : {
        post : function postLink (scope, element, attributes) {

          console.log('It\'s Muffin Time!');

        }
      }
    }
  });
};