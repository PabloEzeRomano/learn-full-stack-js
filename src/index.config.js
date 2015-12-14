'use strict';

export default function routerConfig ($urlRouterProvider, $stateProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/home');

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
        'products' : {
          template : '<basic-examples></basic-examples>'
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
    });

}

routerConfig.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];