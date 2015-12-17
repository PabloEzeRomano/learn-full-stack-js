'use strict';

import * as Immutable from 'immutable';
import
  {
    GET_PRODUCTS,
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    REMOVE_PRODUCT,
    SELECT_PRODUCT,
    SOFT_REMOVE_PRODUCT
  }
  from '../actions/products-actions';


const _products = Immutable.List([
  Immutable.Map({
    id              : 1,
    name            : 'Chocolate',
    description     : 'Mmmm rico!!',
    stock           : 5,
    available       : false,
    code            : 354
  }),
  Immutable.Map({
    id              : 2,
    name            : 'Manteca',
    description     : 'Untame bebe',
    stock           : 6,
    available       : false,
    code            : 591
  }),
  Immutable.Map({
    id              : 3,
    name            : 'Leche',
    description     : 'Por tu cara',
    stock           : 52,
    available       : false,
    code            : 321
  }),
  Immutable.Map({
    id              : 4,
    name            : 'Huevos',
    description     : 'Chupalos',
    stock           : 45,
    available       : false,
    code            : 654
  }),
  Immutable.Map({
    id              : 5,
    name            : 'Cigarrillos',
    description     : 'Te destruye',
    stock           : 95,
    available       : false,
    code            : 987
  })
]);

const INITIAL_STATE = Immutable.Map({
  products            : [],
  lastInsertedId      : null,
  unavailableProducts : [],
  removedProducts     : [],
  selectedProduct     : null
});

export default function products (state = INITIAL_STATE, action) {

  if (!action || !action.type) {
    return state;
  }

  var
    productsList = state.get('products'),
    newList,
    product,
    lastInsertedId = 5,
    index;

  switch (action.type) {

    case GET_PRODUCTS :

      return state.set('products', _products);
      break;

    case CREATE_PRODUCT :

      let exists = false;

      productsList.forEach((product) => {
          if (product.get('code') === action.payload.createdProduct.code){
            exists = true;
          }
        });

      if (!exists){
        action.payload.createdProduct['id'] = lastInsertedId +1;
        newList = productsList.push(action.payload);
        state = state.set('lastInsertedId', lastInsertedId+1);
      }


      return state.set('products', newList);

    case UPDATE_PRODUCT :

      product = state.get('selectedProduct');

      index = productsList.findIndex(function(product) {
        return product.get('id') === action.payload.updatedProduct.id;
      });

      if (index !== -1) {
        newList = productsList.update(index,action.payload.updatedProduct);
        if (product.get('id') === action.payload.updatedProduct.id) {
          state = state.set('selectedProduct', product);
        }
        return state.set('products', newList);
      }

      return state;
      break;

    case REMOVE_PRODUCT :

      index = productsList.findIndex(function(product) {
        return product.get('id') === action.payload.productId;
      });

      if (index !== -1) {
        productsList.forEach(
          (product) => {
            if (product.get('id') === action.payload.productId) {
              state = state.push('removedProducts', product);
            }
          });
        newList = productsList.delete(index);
        if (state.get('selectedProduct').get('id') === action.payload.productId) {
          state = state.set('selectedProduct', null);
        }
        return state.set('products', newList);
      }

      return state;
      break;

    case SELECT_PRODUCT :

      var selectedProduct = null;

      productsList.forEach(
        function (product) {
          if (product.get('id') === action.payload.productId) {
            selectedProduct = product;
          }
        });

      return state.set('selectedProduct', selectedProduct);
      break;

    case SOFT_REMOVE_PRODUCT :

      product = state.get('selectedProduct');

      index = productsList.findIndex(function(product) {
        return product.get('id') === action.payload.productId;
      });

      if (index !== -1) {
        newList = productsList.update(index,(product) =>{
          state = state.push('unavailableProducts', product);
          return product.set('available', !product.get('available'));
        });
        if (product.get('id') === action.payload.productId) {
          product = product.set('available', !product.get('available'));
          state = state.set('selectedProduct', product);
        }
        return state.set('products', newList);
      }

      return state;
      break;

    default :

      return state;
  }

}