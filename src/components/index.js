'use strict';

import app              from './app/app';
import header           from './header/header';
import homeView         from './views/home/home-view';
import companyView      from './views/company/company-view';
import examplesView     from './views/example/examples-view';
import basicExampleView from './views/basic_example/basic-example-view';
import productView      from './views/product/product-view';
import billsView        from './views/bills/bills-view';
import testView         from './views/test_view/test-view'

import promosList       from './promos_list/promos-list';
import favoritesList    from './favorites-list/favorites-list';
import basicExample     from './basic_example/basic-example';
import productList      from './product_list/product-list';
import productForm      from './product_form/product-form';
import billsList        from './bills_list/bills-list';
import billsPanel       from './bill_panel/bill-panel';
import itemsList        from './items_list/items-list';
import searchList       from './search_list/search-list';
import module           from './module/module';
import moduleList       from './module_list/module-list';
import info             from './info/info';

export default ngModule => {
  app(ngModule);
  header(ngModule);
  homeView(ngModule);
  companyView(ngModule);
  promosList(ngModule);
  favoritesList(ngModule);
  examplesView(ngModule);
  basicExampleView(ngModule);
  basicExample(ngModule);
  productView(ngModule);
  productList(ngModule);
  productForm(ngModule);
  billsView(ngModule);
  billsList(ngModule);
  billsPanel(ngModule);
  itemsList(ngModule);
  searchList(ngModule);
  testView(ngModule);
  module(ngModule);
  moduleList(ngModule);
  info(ngModule);
};