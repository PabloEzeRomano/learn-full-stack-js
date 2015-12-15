'use strict';

export const GET_PRODUCTS         = 'GET_PRODUCTS';
export const CREATE_PRODUCT       = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT       = 'UPDATE_PRODUCT';
export const REMOVE_PRODUCT       = 'REMOVE_PRODUCT';
export const SELECT_PRODUCT       = 'SELECT_PRODUCT';
export const SOFT_REMOVE_PRODUCT  = 'SOFT_REMOVE_PRODUCT';


export function getProducts () {
  return {
    type : GET_PRODUCTS
  }
}

export function createProduct (product) {
  return {
    type    : CREATE_PRODUCT,
    payload : product
  }
}

export function updateProduct (product) {
  return {
    type    : UPDATE_PRODUCT,
    payload : product
  }
}

export function removeProduct (productId) {
  return {
    type    : REMOVE_PRODUCT,
    payload : productId
  }
}
export function selectProduct (productId) {
  return {
    type    : SELECT_PRODUCT,
    payload : productId
  }
}
export function softRemoveProduct (productId) {
  return {
    type    : SOFT_REMOVE_PRODUCT,
    payload : productId
  }
}
export default {
  getProducts,
  createProduct,
  updateProduct,
  removeProduct,
  selectProduct,
  softRemoveProduct
}