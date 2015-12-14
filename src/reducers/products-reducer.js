'use strict';

import * as Immutable from 'immutable';
import {GET_PROMOS, GET_FAVORITES, GET_PRODUCTS} from '../actions/products-actions';

const _promos = Immutable.List([
  Immutable.Map({
    id          : 1,
    description : 'Verano 2015',
    products    : Immutable.List([
      Immutable.Map({
        id        : 2,
        description : 'Trisabor',
        price       : 50.00
      }),
      Immutable.Map({
        id        : 2,
        description : 'Frutal Naranja',
        price       : 35.00
      }),
      Immutable.Map({
        id        : 3,
        description : 'FruitSandwich',
        price       : 45.00
      }),
      Immutable.Map({
        id        : 4,
        description : 'Mentol X-5000',
        price       : 12.00
      })
    ]),
    price : 100.00,
    order : 1
  }),
  Immutable.Map({
    id          : 1,
    description : 'Duality',
    products    : Immutable.List([
      Immutable.Map({
        id        : 2,
        description : 'Vanilla Cup',
        price       : 25.00
      }),
      Immutable.Map({
        id        : 2,
        description : 'Strawberry Cup',
        price       : 25.00
      })
    ]),
    price : 40.00,
    order : 2
  })
]);

const _favorites = Immutable.List([
  Immutable.Map({
    id          : 1,
    description : 'Suday',
    price       : 15.00
  }),
  Immutable.Map({
    id        : 2,
    description : 'Sin Para',
    price       : 25.00
  })
]);

const _products = Immutable.List([
  Immutable.Map({
    id          : 1,
    description : 'Cono',
    price       : 50.00
  }),
  Immutable.Map({
    id        : 2,
    description : 'Valde 1l',
    price       : 80.50
  })
]);

const INITIAL_STATE = Immutable.Map(
  {
    promos    : [],
    favorites : [],
    products  : []
  }
);

export default function products (state = INITIAL_STATE, action) {

  if (!action || !action.type) {
    return state;
  }

  switch (action.type) {
    case GET_PROMOS :
      return state.set('promos', _promos);
    case GET_FAVORITES :
      return state.set('favorites', _favorites);
    case GET_PRODUCTS :
      return state.set('products', _products);
    default :
      return state;
  }

}