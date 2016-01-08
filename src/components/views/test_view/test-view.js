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
            messege: 2
          };

          scope.modules = [
            {
              name : 'Almacen'
            },
            {
              name : 'Caja'
            },
            {
              name : 'Compras'
            }
          ];

          scope.shortcutsAlmacen = [
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
          ];

          scope.moduleFunctionsAlmacen = [
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
          ];

          scope.shortcutsCaja = [
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
          ];

          scope.moduleFunctionsCaja= [
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
          ];

          scope.shortcutsCompras = [
            {
              link    : 'Compras',
              caption : 'Este es el shortcut de compras'
            }
          ];

          scope.moduleFunctionsCompras = [
            {
              link    : 'Compras',
              caption : 'Este es el moduleFunction de compras'
            }
          ];

          scope.footer = [
            {
              buttonName : 'arriba'
            },
            {
              buttonName : 'abajo'
            },
            {
              buttonName : 'saraza'
            }
          ];

          scope.selectedModule = scope.moduleFunctionsAlmacen;

          scope.activeShortcuts = scope.shortcutsAlmacen;

          scope.changeModule = (module) => {
            switch(module.name){
              case 'Almacen' :
                if(scope.selectedModule !== scope.moduleFunctionsAlmacen) {
                  scope.selectedModule = scope.moduleFunctionsAlmacen;
                  scope.activeShortcuts = scope.shortcutsAlmacen;
                }
                break;
              case 'Caja' :
                if(scope.selectedModule !== scope.moduleFunctionsCaja) {
                  scope.selectedModule = scope.moduleFunctionsCaja;
                  scope.activeShortcuts = scope.shortcutsCaja;
                }
                break;
              case 'Compras' :
                if(scope.selectedModule !== scope.moduleFunctionsCompras) {
                  scope.selectedModule = scope.moduleFunctionsCompras;
                  scope.activeShortcuts = scope.shortcutsCompras;
                }
                break;

            }

          }

          console.log('moduleList', scope.modules);
          console.log('moduleCaja', scope.moduleFunctionsCaja);
          console.log('shortcutCaja', scope.shortcutsCaja);
          console.log('moduleAlmacen', scope.moduleFunctionsAlmacen);
          console.log('shortcutAlmacen', scope.shortcutsAlmacen);
          console.log('moduleCompras', scope.moduleFunctionsCaja);
          console.log('shortcutCompras', scope.shortcutsCompras);
          console.log('user', scope.userInfo);

        }
      }
    };

  });
};