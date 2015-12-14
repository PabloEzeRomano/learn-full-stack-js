'use strict';

import app          from './app/app';
import header       from './header/header';
import homeView     from './views/home/home-view';
import productsView from './views/products/products-view';
import companyView  from './views/company/company-view';

import promosList     from './promos_list/promos-list';
import favoritesList  from './favorites-list/favorites-list';

export default ngModule => {
  app(ngModule);
  header(ngModule);
  homeView(ngModule);
  productsView(ngModule);
  companyView(ngModule);
  promosList(ngModule);
  favoritesList(ngModule);
};