'use strict';

export const GET_PROMOS     = 'GET_PROMOS';
export const GET_FAVORITES  = 'GET_FAVORITES';
export const GET_PRODUCTS   = 'GET_PRODUCTS';

export function getPromos () {
  return {
    type : GET_PROMOS
  }
}

export function getFavorites () {
  return {
    type : GET_FAVORITES
  }
}

export function getProducts () {
  return {
    type : GET_PRODUCTS
  }
}

export default {
  getPromos,
  getFavorites,
  getProducts
}