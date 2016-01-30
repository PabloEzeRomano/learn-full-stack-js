'use strict';

export default function routerConfig ($urlRouterProvider, $stateProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/bills');

  $stateProvider
    .state('home', {
      url: '/home',
      views: {
        '': {
          template: '<home-view></home-view>'
        }
      }
    })
    .state('examples', {
      url: '/examples',
      views: {
        '': {
          template: '<examples-view></examples-view>'
        }
      }
    })
    .state('examples.basic', {
      url: '/basic',
      views: {
        '': {
          template : '<examples-view></examples-view>'
        },
        'examples' : {
          template : '<lrn-basic-example-view></lrn-basic-example-view>'
        }
      }
    })
    .state('company', {
      url: '/company',
      views: {
        '': {
          template: '<company-view></company-view>'
        }
      }
    })
    .state('products', {
      url: '/products',
      views: {
        '': {
          template: '<product-view></product-view>'
        }
      }
    })
    .state('bills', {
      url: '/bills',
      views: {
        '': {
          template: '<bills-view></bills-view>'
        }
      }
    })
    .state('maps', {
      url: '/maps',
      views: {
        '': {
          template: '<test-view></test-view>'
        }
      }
    });


}

routerConfig.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];