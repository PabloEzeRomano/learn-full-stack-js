'use strict';

export default class AppController {
  constructor($injector) {
    console.log('billsView', $injector.has('billsViewDirective'));
  }
}

