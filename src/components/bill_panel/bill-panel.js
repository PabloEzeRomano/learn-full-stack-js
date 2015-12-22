'use strict';

import template    from './bill-panel.html';
import style       from './bill-panel.styl';

export default ngModule => {

  ngModule.directive('billPanel',function ($interval) {

    return {
      restrict      : 'E',
      scope         : {
        selectBill     : '&',
        selectedBill   : '&',
        products       : '&',
        addBillLine    : '&',
        removeBillLine : '&',
        closeBill      : '&',
        payBill        : '&',
        selectedClient : '&',
        openBill       : '&'
      },
      replace       : true,
      template      : template,
      link : {
        post : function postLink (scope, element, attributes) {

          scope.formBill = null;

          scope.$watch(scope.selectedBill, (newValue, oldValue) => {
            scope.formBill = newValue;
          });

          scope.deselectBill = () => {
            scope.formBill = {
              id            : null,
              clientId      : scope.selectedClient().id,
              cuit          : scope.selectedClient().cuit,
              emissionDate  : new Date(),
              billLines     : []
            }
          };

          scope.submitBill = () => {

            if (!scope.formBill || !scope.formBill.id) {

              let bill = {
                clientId  : scope.selectedClient().id,
                cuit      : scope.selectedClient().cuit
              };

              scope.openBill({ bill })

            }


          };

          scope.getNewDate = () => {
            return new Date();
          }
        }
      }
    };

  });
};