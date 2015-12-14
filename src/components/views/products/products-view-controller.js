'use strict';

import ProductsActions  from '../../../actions/products-actions';

export default class ProductsViewController {

  constructor($scope, $ngRedux) {

    var actions = Object.assign({},
      ProductsActions
    );

    let unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);
    $scope.$on('$destroy', unsubscribe);

    this.categories = [
      {
        name  : 'Promos',
        state : 'products.promos',
        order : 1
      },
      {
        name  : 'Favoritos',
        state : 'products.favorites',
        order : 2
      },
      {
        name  : 'Productos',
        state : 'products.products',
        order : 3
      }
    ];

    this.getPromos();
    this.getFavorites();
    this.getProducts();

  }

  mapStateToThis (state) {

    let productsStore = state.productsStore.toJS();

    return {
      promos    : productsStore.promos,
      favorites : productsStore.favorites,
      products  : productsStore.products
    };
  }

}