'use strict';

import app               from './app/app';
import header            from './header/header';
import homeView          from './views/home/home-view';
import companyView       from './views/company/company-view';
import examplesView      from './views/example/examples-view';
import basicExampleView  from './views/basic_example/basic-example-view';
import productView       from './views/product/product-view';

import promosList        from './promos_list/promos-list';
import favoritesList     from './favorites-list/favorites-list';
import basicExample      from './basic_example/basic-example';
import productList       from './product_list/product-list';
import productForm       from './product_form/product-form';

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
};