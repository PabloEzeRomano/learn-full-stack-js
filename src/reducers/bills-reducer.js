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

const INITIAL_STATE = Immutable.Map({
  bills                  : Immutable.List(),
  selectedClient         : null,
  openedBills            : Immutable.List(),
  closedBills            : Immutable.List(),
  payedBills             : Immutable.List(),
  selectedBill           : Immutable.List(),
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

  switch (action.type) {

    case GET_BILLS :

      return state.set('bills');
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

        let bill = actionPayload.get('bill').toJS();

        bill.emissionDate = new Date();

        var newBill = Immutable.fromJS(bill);

        state   = state.set('lastInsertedBillId',state.get('lastInsertedBillId') + 1);
        newBill = newBill.set('id', state.get('lastInsertedBillId'));
        newList = state.get('bills').push(newBill);
        state = state.set('bills', newList);
        state = state.set('selectedBill', newBill);
        state = state.set('openedBills', state.get('openedBills').push(newBill));
      }

      return state;
      break;

    case ADD_BILL_LINE :

      let bill = state.get('bills').find(bill => {
        return bill.get('id') === actionPayload.get('billLine').get('billId');
      });

      let billLineWithProduct = false;

      if (bill) {
        billLineWithProduct = bill.get('billLines').find(billLine => {
          return billLine.get('productId') === actionPayload.get('billLine').get('productId');
        });
      }

      if (!billLineWithProduct) {

        let udpatedBill = bill.set('billLines', bill.get('billLines').push(actionPayload.get('billLine')));

        state = state.set('openedBills', state.get('openedBills').push(udpatedBill));

        if (updatedBill.get('id') === state.get('selectedBill').get('id')){
          state = state.set('selectedBill', updatedBill);
        }

        state = state.get('bills').update(index, () => udpatedBill);
      }

      return state;
      break;

    case REMOVE_BILL_LINE :

      let bill = state.get('bills').find( bill => {
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

      let billIndex = state.get('bills').findIndex ( bill => {
        return bill.get('id') === actionPayload.get('billId');
      });

      if (billIndex !== -1) {
        let newList = state.get('bills').update( billIndex, bill => {
          return bill.set('open', !bill.get('open'));
        });
        if (bill.get('open') === false) {
          state = state.set('closedBills', state.get('closedBills').push(bill));
          state = state.set('openedBills', state.get('openedBills').delete(billIndex));
        } else {
          state = state.set('openedBills', state.get('openedBills').push(bill));
          state = state.set('closedBills', state.get('closedBills').delete(billIndex));
        }
        if (state.get('selectedBill').get('id') === actionPayload.get('billId')){
          state = state.set('selectedBill', !state.get('selectedBill').get('open'))
        }

        return state.set('bills', newList);
      }

      return state;
      break;

    case PAY_BILL :

      let billIndex = state.get('bills').findIndex( billIndex, bill => {
        return bill.get('id') === actionPayload.get('billId');
      });

      if (billIndex !== -1) {
        let newList = state.get('bills').update( billIndex, bill =>{
          return bill.set('payed', !bill.get('payed'));
        })
        if (state.get('payed') === true) {
          state = state.set('payedBills', state.get('payedBills').push(bill));
        } else {
          state = state.set('payedBills', state.get('payedBills').delete(billIndex));
        }
        if (state.get('selectedBill').get('id') === actionPayload.get('billId')){
          state = state.set('selectedBill', !state.get('selectedBill').get('payed'))
        }

        return state.set('bills', newList);
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

      if (found) {
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