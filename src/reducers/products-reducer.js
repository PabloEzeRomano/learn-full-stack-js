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
    available       : true,
    code            : '354'
  }),
  Immutable.Map({
    id              : 2,
    name            : 'Manteca',
    description     : 'Untame bebe',
    stock           : 6,
    available       : true,
    code            : '591'
  }),
  Immutable.Map({
    id              : 3,
    name            : 'Leche',
    description     : 'Por tu cara',
    stock           : 52,
    available       : true,
    code            : '321'
  }),
  Immutable.Map({
    id              : 4,
    name            : 'Huevos',
    description     : 'Chupalos',
    stock           : 45,
    available       : true,
    code            : '654'
  }),
  Immutable.Map({
    id              : 5,
    name            : 'Cigarrillos',
    description     : 'Te destruye',
    stock           : 95,
    available       : false,
    code            : '987'
  })
]);

const INITIAL_STATE = Immutable.Map({
  products            : Immutable.List(),
  lastInsertedId      : 5,
  unavailableProducts : Immutable.List(),
  removedProducts     : Immutable.List(),
  selectedProduct     : null
});

export default function products (state = INITIAL_STATE, action) {

  if (!action || !action.type) {
    return state;
  }

  var actionPayload = null;

  if (action.payload) {
    actionPayload = Immutable.fromJS(action.payload);
  }

  var
    newList,
    product,
    index;

  switch (action.type) {

    case GET_PRODUCTS :

      return state.set('products', _products);
      break;

    case CREATE_PRODUCT :

      let exists = false;

      state.get('products').forEach((product) => {
          if (product.get('code') === actionPayload.get('product').get('code')) {
            exists = true;
          }
        });

      if (!exists) {

        var newProduct = Immutable.fromJS(actionPayload.get('product'));

        state = state.set('lastInsertedId',state.get('lastInsertedId') + 1);
        newProduct = newProduct.set('id', state.get('lastInsertedId'));
        newList = state.get('products').push(newProduct);
      }

      return state.set('products', newList);

    case UPDATE_PRODUCT :

      index = state.get('products').findIndex( product => {
        return product.get('code') === actionPayload.get('product').get('code');
      });

      if (index !== -1) {

        newList = state.get('products').update(index, () => actionPayload.get('product'));

        if (state.get('selectedProduct').get('id') === actionPayload.get('product').get('id')) {
          state = state.set('selectedProduct', actionPayload.get('product'));
        }

        state = state.set('products', newList);
      }

      return state;
      break;

    case REMOVE_PRODUCT :

      index = state.get('products').findIndex(function(product) {
        return product.get('id') === action.payload.productId;
      });

      if (index !== -1) {
        state.get('products').forEach(
          (product) => {
            if (product.get('id') === actionPayload.get('productId')) {
              state = state.set('removedProducts', state.get('removedProducts').push(product));
            }
          });
        newList = state.get('products').delete(index);
        if (state.get('selectedProduct').get('id') === actionPayload.get('productId')) {
          state = state.set('selectedProduct', null);
        }
        return state.set('products', newList);
      }

      return state;
      break;

    case SELECT_PRODUCT :

      let found = false;

      state.get('products').forEach(
        product => {
          if (product.get('id') === actionPayload.get('productId')) {
            found = product;
          }
        });

      if (found) {
        state = state.set('selectedProduct', found);
      } else {
        state = state.set('selectedProduct', null);
      }

      return state;
      break;

    case SOFT_REMOVE_PRODUCT :

      product = state.get('selectedProduct');

      index = state.get('products').findIndex(function(product) {
        return product.get('id') === actionPayload.get('productId');
      });

      if (index !== -1) {
        newList = state.get('products').update(index, product => {
          state = state.set('unavailableProducts', state.get('unavailableProducts').push(product));
          return product.set('available', !product.get('available'));
        });
        if (product.get('id') === actionPayload.get('productId')) {
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