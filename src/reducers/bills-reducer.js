'use strict';

import * as Immutable from 'immutable';
import
  {
    GET_BILLS,
    GET_BILLS_BY_CLIENT_ID,
    OPEN_BILL,
    ADD_BILL_LINE,
    REMOVE_BILL_LINE,
    CLOSE_BILL,
    PAY_BILL,
    SELECT_BILL
  }
  from '../actions/bills-actions';

const INITIAL_STATE = Immutable.Map({
  bills                  : Immutable.List(),
  billsByClientId        : Immutable.List(),
  selectedClient         : null,
  closedBills            : Immutable.List(),
  payedBills             : Immutable.List(),
  selectedBill           : null,
  lastInsertedBillId     : 0,
  lastInsertedBillLineId : 0
});

export default function bills (state = INITIAL_STATE, action) {

  if (!action || !action.type) {
    return state;
  }

  var actionPayload = null;

  if (action.payload){
    actionPayload = Immutable.fromJS(action.payload);
  }

  var
    bill      = null,
    billIndex = null;

  switch (action.type) {

    case GET_BILLS :

      return state;
      break;

    case GET_BILLS_BY_CLIENT_ID :

      // fetch bills

      return state;
      break;

    case OPEN_BILL :

      let exists = false;

      state.get('bills').forEach((bill) => {
        if (bill.get('id') === actionPayload.get('bill').get('id')) {
          exists = true;
        }
      });

      let newList;

      if (!exists) {

        bill = actionPayload.get('bill').toJS();

        bill.emissionDate = new Date();
        bill.billLines    = [];

        var newBill = Immutable.fromJS(bill);

        state   = state.set('lastInsertedBillId',state.get('lastInsertedBillId') + 1);
        newBill = newBill.set('id', state.get('lastInsertedBillId'));
        newList = state.get('bills').push(newBill);
        state   = state.set('bills', newList);
        state   = state.set('selectedBill', newBill);

        let newBillsByClient = state.get('billsByClientId').push(newBill);
        state = state.set('billsByClientId', newBillsByClient);

      }

      return state;
      break;

    case ADD_BILL_LINE :

      bill = state.get('bills').find(bill => {
        return bill.get('id') === actionPayload.get('billId');
      });

      let billLineWithProduct = false;

      if (bill) {
        billLineWithProduct = bill.get('billLines').find(billLine => {
          return billLine.get('productId') === actionPayload.get('billLine').get('productId');
        });
        if (!billLineWithProduct) {

          let updatedBill = bill.set('billLines', bill.get('billLines').push(actionPayload.get('billLine')));

          if (updatedBill.get('id') === state.get('selectedBill').get('id')){
            state = state.set('selectedBill', updatedBill);
          }

          state = state.get('bills').update(index, () => updatedBill);
        }
      }

      return state;
      break;

    case REMOVE_BILL_LINE :

      bill = state.get('bills').find( bill => {
        return bill.get('id') === actionPayload.get('billId');
      });

      let billLineIndex = false;

      if (bill) {
        billLineIndex = bill.get('billLines').findIndex (billLine => {
          return billLine.get('id') === actionPayload.get('billLineId');
        });
      }

      if (billLineIndex !== -1) {
        let newList = state.get('bills').get('billLines').delete(billLineIndex);
        if (state.get('selectedBill').get('id') === actionPayload.get('billId')) {
          state = state.set('selectedBill', null);
        }
        return state.set('bills', newList);
      }

      return state;
      break;

    case CLOSE_BILL :

      billIndex = state.get('bills').findIndex ( bill => {
        return bill.get('id') === actionPayload.get('billId');
      });

      if (billIndex !== -1) {
        let newList = state.get('bills').update(billIndex, bill => bill.set('open', !bill.get('open')));

        bill = newList.find(bill => {
          return bill.get('id') === actionPayload.get('billId');
        });

        if (bill.get('open') === false) {
          state = state.set('closedBills', state.get('closedBills').push(bill));
          state = state.set('bills', state.get('bills').delete(billIndex));
        } else {
          state = state.set('bills', state.get('bills').push(bill));
          state = state.set('closedBills', state.get('closedBills').delete(billIndex));
        }

        if (state.get('selectedBill').get('id') === actionPayload.get('billId')){
          state = state.set('selectedBill', bill.get('open'));
        }

        state = state.set('bills', newList);
      }

      return state;
      break;

    case PAY_BILL :

      billIndex = state.get('bills').findIndex(billIndex, bill => {
        return bill.get('id') === actionPayload.get('billId');
      });

      if (billIndex !== -1) {
        let newList = state.get('bills').update( billIndex, bill => bill.set('paid', !bill.get('paid')));

        bill = newList.find(bill => {
          return bill.get('id') === actionPayload.get('billId');
        });

        if (state.get('paid') === true) {
          state = state.set('payedBills', state.get('payedBills').push(bill));
        } else {
          state = state.set('payedBills', state.get('payedBills').delete(billIndex));
        }
        if (state.get('selectedBill').get('id') === actionPayload.get('billId')){
          state = state.set('selectedBill', !state.get('selectedBill').get('paid'))
        }

        state = state.set('bills', newList);
      }

      return state;
      break;

    case SELECT_BILL  :

      let billFound = false;

      state.get('bills').forEach( bill => {
          if (bill.get('id') === actionPayload.get('billId')) {
            billFound = bill;
          }
        });

      if (billFound) {
        state = state.set('selectedBill', billFound);
      } else {
        state = state.set('selectedBill', null);
      }

      return state;
      break;

    default :

      return state;
  }

}