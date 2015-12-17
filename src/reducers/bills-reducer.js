'use strict';

import * as Immutable from 'immutable';
import
  {
    GET_BILLS,
    OPEN_BILL,
    ADD_BILL_LINE,
    REMOVE_BILL_LINE,
    CLOSE_BILL,
    PAY_BILL,
    SELECT_BILL
  }
  from '../actions/bills-actions';


const _bills = Immutable.List([
  Immutable.Map({
    id           : 1,
    clientId     : 1,
    cuit         : '20-54861357-8',
    emissionDate : '11/06/2015',
    billLines    : Immutable.List([
      Immutable.Map({
        id        : 1,
        billId    : 1,
        productId : 612,
        quantity  : 1,
        price     : 12.5
      }),
      Immutable.Map({
        id        : 2,
        billId    : 1,
        productId : 152,
        quantity  : 3,
        price:      50.66
      }),
      Immutable.Map({
        id        : 3,
        billId    : 1,
        productId : 546,
        quantity  : 2,
        price     : 2.5
      })
    ])
  }),
  Immutable.Map({
    id           : 2,
    clientId     : 2,
    cuit         : '20-54861357-8',
    emissionDate : '11/06/2015',
    billLines    : Immutable.List([
      Immutable.Map({
        id        : 1,
        billId    : 2,
        productId : 187,
        quantity  : 11,
        price     : 152.5
      }),
      Immutable.Map({
        id        : 2,
        billId    : 2,
        productId : 915,
        quantity  : 13,
        price:      500.66
      })
    ])
  }),
  Immutable.Map({
    id           : 3,
    clientId     : 5,
    cuit         : '20-54861357-8',
    emissionDate : '11/06/2015',
    billLines    : Immutable.List([
      Immutable.Map({
        id        : 1,
        billId    : 3,
        productId : 784,
        quantity  : 5,
        price     : 112.5
      }),
      Immutable.Map({
        id        : 2,
        billId    : 3,
        productId : 152,
        quantity  : 3,
        price:      50.66
      }),
      Immutable.Map({
        id        : 3,
        billId    : 3,
        productId : 591,
        quantity  : 25,
        price     : 2987.5
      }),
      Immutable.Map({
        id        : 4,
        billId    : 3,
        productId : 56,
        quantity  : 1,
        price     : 2.5
      })
    ])
  }),
  Immutable.Map({
    id           : 4,
    clientId     : 47,
    cuit         : '20-54861357-8',
    emissionDate : '11/06/2015',
    billLines    : Immutable.List([
      Immutable.Map({
        id        : 1,
        billId    : 4,
        productId : 91,
        quantity  : 12,
        price     : 196
      }),
      Immutable.Map({
        id        : 2,
        billId    : 4,
        productId : 54,
        quantity  : 3,
        price:      46.3
      }),
      Immutable.Map({
        id        : 3,
        billId    : 4,
        productId : 369,
        quantity  : 24,
        price     : 200.35
      }),Immutable.Map({
        id        : 4,
        billId    : 4,
        productId : 152,
        quantity  : 3,
        price:      50.66
      }),
      Immutable.Map({
        id        : 5,
        billId    : 4,
        productId : 56,
        quantity  : 2,
        price     : 22.5
      })
    ])
  }),
  Immutable.Map({
    id           : 5,
    clientId     : 32,
    cuit         : '20-54861357-8',
    emissionDate : '11/06/2015',
    billLines    : Immutable.List([
      Immutable.Map({
        id        : 1,
        billId    : 5,
        productId : 357,
        quantity  : 18,
        price     : 125.5
      })
    ])
  })
]);

const INITIAL_STATE = Immutable.Map({
  bills                  : [],
  selectedClient         : null,
  openedBills            : [],
  closedBills            : [],
  payedBills             : [],
  selectedBill           : [],
  lastInsertedBillId     : null,
  lastInsertedBillLineId : null
});

export default function bills (state = INITIAL_STATE, action) {

  if (!action || !action.type) {
    return state;
  }

  var
    billsList = state.get('bills'),
    newList;

  switch (action.type) {

    case GET_BILLS :

      return state.set('bills', _bills);
      break;

    case OPEN_BILL :

      action.payload.createdBill['id'] = lastInsertedId +1;
      newList = billsList.push(action.payload);

      return state.set('bills', newList);

    default :

      return state;
  }

}