'use strict';

import ClientsActions  from '../../../actions/clients-actions';

export default class HomeViewController {

  constructor($scope, $ngRedux) {

    var actions = Object.assign({},
      ClientsActions
    );

    let unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);
    $scope.$on('$destroy', unsubscribe);

    this.getClients();

  }

  mapStateToThis (state) {

    let clientsStore = state.clientsStore.toJS();

    return {
      clients         : clientsStore.clients,
      selectedClient  : clientsStore.selectedClient
    };
  }

}