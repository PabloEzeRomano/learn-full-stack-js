'use strict';

import template    from './bills-panel.html';
import style       from './bills-panel.styl';

export default ngModule => {

  ngModule.directive('billPanel',function () {

    return {
      restrict      : 'E',
      scope         : {
        selectedBill : '&',
        products     : '&',
        addBillLine  : '&',
        closeBill    : '&',
        payBill      : '&'
      },
      replace       : true,
      template      : template,
      link : {
        post : function postLink (scope, element, attributes) {

        }
      }
    };

  });
};