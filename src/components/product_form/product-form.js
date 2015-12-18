'use strict';

import template    from './product-form.html';
import style       from './product-form.styl';

export default ngModule => {

  ngModule.directive('productForm',function () {

    return {
      restrict      : 'E',
      scope         : {
        selectProduct     : '&',
        selectedProduct   : '=',
        newProduct        : '&',
        updateProduct     : '&',
        removeProduct     : '&',
        softRemoveProduct : '&'
      },
      replace       : true,
      template      : template,
      link : {
        post : function postLink (scope, element, attributes) {

          scope.submitProduct = () => {

            if (!scope.selectedProduct.id) {
              scope.newProduct({ myProduct : scope.selectedProduct });
            } else {
              scope.updateProduct({ myProduct : scope.selectedProduct });
            }
          };

        }
      }
    };

  });
};