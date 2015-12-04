'use strict';

export default ngModule => {
  ngModule.directive('lnApp',function () {

    require('./.styl');

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

        }
      }
    }
  });
};