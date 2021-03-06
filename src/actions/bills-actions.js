'use strict';

export const GET_BILLS              = 'GET_BILLS';
export const GET_BILLS_BY_CLIENT_ID = 'GET_BILLS_BY_CLIENT_ID';
export const OPEN_BILL              = 'OPEN_BILL';
export const ADD_BILL_LINE          = 'ADD_BILL_LINE';
export const REMOVE_BILL_LINE       = 'REMOVE_BILL_LINE';
export const CLOSE_BILL             = 'CLOSE_BILL';
export const PAY_BILL               = 'PAY_BILL';
export const SELECT_BILL            = 'SELECT_BILL';

export function getBills () {
  return {
    type : GET_BILLS
  }
}

export function getBillsByClientId (clientId) {
  return {
    type    : GET_BILLS_BY_CLIENT_ID,
    payload : {
      clientId
    }
  }
}

export function openBill (bill) {
  return {
    type    : OPEN_BILL,
    payload : {
      bill
    }
  }
}

export function addBillLine (billId, billLine) {
  return {
    type    : ADD_BILL_LINE,
    payload :
    {
      billId : billId,
      billLine : billLine
    }
  }
}

export function removeBill (billId, billLineId) {
  return {
    type    : REMOVE_BILL_LINE,
    payload :
    {
      billId : billId,
      billLine : billLineId

    }
  }
}
export function closeBill (billId) {
  return {
    type    : CLOSE_BILL,
    payload : billId
  }
}
export function payBill (billId) {
  return {
    type    : PAY_BILL,
    payload : billId
  }
}

export function selectBill (billId) {
  return {
    type    : SELECT_BILL,
    payload : {
      billId
    }
  }
}
export default {
  getBills,
  getBillsByClientId,
  openBill,
  addBillLine,
  removeBill,
  closeBill,
  payBill,
  selectBill
}