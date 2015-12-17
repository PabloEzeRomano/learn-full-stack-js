'use strict';

import BillsActions from '../../../actions/bills-actions'

export default class BillsViewController {

  constructor($scope, $ngRedux) {

    var actions = Object.assign({},
      BillsActions
    );

    console.log(actions);

    let unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);
    $scope.$on('$destroy', unsubscribe);

    this.billsList = () => {
      return this.bills;
    };

    this.panelBills = () => {
      return this.selectedBills;
    };

    this.getBills();
  }

  mapStateToThis (state) {

    let billsStore = state.billsStore.toJS();

    return {
      bills        : billsStore.bills,
      selectedBills : billsStore.selectedBills
    };
  }
}