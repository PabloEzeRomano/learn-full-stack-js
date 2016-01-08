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

          scope.userInfo =
          {
            user: 'Pablo Romano',
            company: 'SistAr',
            message: 2
          };

          scope.modules = [
            {
              name : 'Almacen',
              shortcuts :
                [
                {
                  link    : 'Almacen',
                  caption : 'Este es el shortcut de almacen'
                },
                {
                  link    : 'Stock',
                  caption : 'Este es el shortcut de Stock'
                },
                {
                  link    : 'Asd',
                  caption : 'Este es el shortcut de asd'
                }
              ],
              moduleFunctions : [
                {
                  link    : 'Almacen',
                  caption : 'Este es el moduleFunction de almacen'
                },
                {
                  link    : 'Stock',
                  caption : 'Este es el moduleFunction de Stock'
                },
                {
                  link    : 'Asd',
                  caption : 'Este es el moduleFunction de asd'
                }
              ],
              footer : [
                {
                  buttonName : 'Boton'
                },
                {
                  buttonName : 'De'
                },
                {
                  buttonName : 'Almacen'
                }
              ]
            },
            {
              name : 'Caja',
              shortcuts :  [
                {
                  link    : 'Debe',
                  caption : 'Este es el shortcut del debe'
                },
                {
                  link    : 'Caja',
                  caption : 'Este es el shortcut de la caja'
                },
                {
                  link    : 'Haber',
                  caption : 'Este es el shortcut del haber'
                }
              ],
              moduleFunctions : [
                {
                  link    : 'Debe',
                  caption : 'Este es el moduleFunction del debe'
                },
                {
                  link    : 'Caja',
                  caption : 'Este es el moduleFunction de la caja'
                },
                {
                  link    : 'Haber',
                  caption : 'Este es el moduleFunction del Haber'
                }
              ],
              footer : [
                {
                  buttonName : 'Boton'
                },
                {
                  buttonName : 'De'
                },
                {
                  buttonName : 'Caja'
                }
              ]
            },
            {
              name : 'Compras',
              shortcuts : [
                {
                  link    : 'Compras',
                  caption : 'Este es el shortcut de compras'
                }
              ],
              moduleFunctions : [
                {
                  link    : 'Compras',
                  caption : 'Este es el moduleFunction de compras'
                }
              ],
              footer : [
                {
                  buttonName : 'Boton'
                },
                {
                  buttonName : 'De'
                },
                {
                  buttonName : 'Compras'
                }
              ]
            }
          ];

          scope.selectedModule = null;

          scope.changeModule = function (name) {
            for (var i = 0; i < scope.modules.length; i++) {
                if (scope.modules[i].name === name ) {
                  scope.selectedModule = scope.modules[i];
                }
            }
          };

          console.log ('selectedModule', scope.selectedModule);
        }
      }
    };

  });
};