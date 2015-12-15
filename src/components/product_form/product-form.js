'use strict';

import template    from './product-form.html';
import style       from './product-form.styl';

export default ngModule => {

  ngModule.directive('productForm',function () {

    return {
      restrict      : 'E',
      scope         : {
        selectedProduct   : '&',
        newProduct        : '&',
        updateProduct     : '&',
        removeProduct     : '&',
        softRemoveProduct : '&'
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