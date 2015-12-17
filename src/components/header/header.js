'use strict';

export default ngModule => {
  ngModule.directive('lrnHeader',function () {

    require('./header.styl');

    return {
      restrict      : 'E',
      scope         : {},
      replace       : true,
      template      : require('./header.html'),
      link : {
        post : function postLink (scope, element, attributes) {
          scope.links = [
            {
              caption : 'Home',
              state   : 'home',
              order   : 1
            },
            {
              caption : 'Examples',
              state   : 'examples',
              order   : 2
            },
            {
              caption : 'About',
              state   : 'about',
              order   : 5
            },
            {
              caption : 'Products',
              state   : 'products',
              order   : 3
            },
            {
              caption : 'Bills',
              state   : 'bills',
              order   : 4
            }
          ];
        }
      }
    };

  });
};