'use strict';

import BillsActions    from '../../../actions/bills-actions';
import ProductsActions from '../../../actions/products-actions';
import ClientsActions  from '../../../actions/clients-actions';

export default class BillsViewController {

  constructor($scope, $ngRedux) {

    var actions = Object.assign({},
      BillsActions,
      ClientsActions,
      ProductsActions
    );

    let unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);
    $scope.$on('$destroy', unsubscribe);

    this.getClients();
    this.getProducts();

    this.totalBillCalculator = billLines => {
      return billLines.reduce((prevValue, billLine) => {
        return prevValue + (billLine.price * billLine.quantity);
      }, 0);
    };

  }

  mapStateToThis (state) {

    let clientsStore  = state.clientsStore.toJS();
    let billsStore    = state.billsStore.toJS();
    let productsStore = state.productsStore.toJS();

    return {
      clients        : clientsStore.clients,
      selectedClient : clientsStore.selectedClientForBills,
      bills          : billsStore.bills,
      billsByClientId: billsStore.billsByClientId,
      selectedBill   : billsStore.selectedBill,
      products       : productsStore.products
    };
  }

  clientComboBoxOnChange () {
    this.selectClientForBills(this.selectedClientId);
  }

  changedSelectedBill () {
    this.selectedBill = {
      id : Math.random(),
      clientId : Math.random(),
      cuit : Math.random(),
      emissionDate : new Date(),
      billLines : []
    };
  }
}