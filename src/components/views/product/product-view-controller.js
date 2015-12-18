'use strict';

import ProductActions from '../../../actions/products-actions'

export default class ProductViewController {

  constructor($scope, $ngRedux) {

    var actions = Object.assign({},
      ProductActions
    );

    console.log(actions);

    let unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);
    $scope.$on('$destroy', unsubscribe);

    this.getProducts();
  }

  mapStateToThis (state) {

    let productsStore = state.productsStore.toJS();

    return {
      products        : productsStore.products,
      selectedProduct : productsStore.selectedProduct
    };
  }
}