'use strict';

import BasicExampleActions from '../../../actions/basic-example-actions';

export default class BasicExampleViewController {

  constructor($scope, $ngRedux) {

    var actions = Object.assign({},
      BasicExampleActions
    );

    console.log(actions);

    let unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);
    $scope.$on('$destroy', unsubscribe);

    this.usersList = () => {
      return this.users;
    };

    this.panelUser = () => {
      return this.selectedUser;
    };

    this.getUsers();
  }

  mapStateToThis (state) {

    let basicExampleStore = state.basicExampleStore.toJS();

    return {
      users        : basicExampleStore.users,
      selectedUser : basicExampleStore.selectedUser
    };
  }
}
