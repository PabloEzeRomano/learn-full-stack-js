'use strict';

import controller  from './test-view-controller';
import template    from './test-view.html';
import style       from './test-view.styl';
import test        from './test-view.test';

export default ngModule => {

  if (ON_TEST) {
    test(ngModule);
  }

  ngModule.directive('testView',function (uiGmapGoogleMapApi) {

    return {
      restrict     : 'E',
      scope        : {},
      replace      : true,
      template     : template,
      controllerAs : 'testView',
      controller   : controller,
      link : {
        pre : function (scope, element, attributes) {

          scope.map = {
            center: {
              latitude : -27.473123,
              longitude : -58.818332
            },
            zoom: 17,
            bounds: {}
          };

          scope.zones = [
            {
              id: 1,
              coordinates: [
                {
                  latitude: -27.472455,
                  longitude: -58.822200
                },
                {
                  latitude: -27.473407,
                  longitude: -58.821862
                },
                {
                  latitude: -27.472702,
                  longitude: -58.820307
                }
              ]
            },
            {
              id: 2,
              coordinates: [
                {
                  latitude: -27.473606,
                  longitude:  -58.822184
                },
                {
                  latitude: -27.472750,
                  longitude:  -58.822120
                },
                {
                  latitude: -27.473487,
                  longitude: -58.821283
                }
              ]
            },
            {
              id: 3,
              coordinates: [
                {
                  latitude: -27.472850,
                  longitude:  -58.820296
                },
                {
                  latitude: -27.472065,
                  longitude:  -58.820194
                },
                {
                  latitude: -27.471974,
                  longitude: -58.820977
                },
                {
                  latitude: -27.472698,
                  longitude: -58.821085
                }
              ]
            },
            {
              id: 4,
              coordinates: [
                {
                  latitude: -27.473857,
                  longitude:  -58.820594
                },
                {
                  latitude: -27.474638,
                  longitude:  -58.820723
                },
                {
                  latitude: -27.474324,
                  longitude: -58.819950
                }
              ]
            }
          ];

          scope.mobiles = [
            {
              id : '1',
              coordinates : [
                {
                  id : 1,
                  latitude : -27.473959,
                  longitude : -58.820820,
                  timestamp : moment().format('25/01/2016 12:10')
                },
                {
                  id : 2,
                  latitude : -27.473305,
                  longitude : -58.820714,
                  timestamp : moment().format('25/01/2016 12:11')
                },
                {
                  id : 3,
                  latitude : -27.472498,
                  longitude : -58.820612,
                  timestamp : moment().format('25/01/2016 12:12')
                },
                {
                  id : 4,
                  latitude : -27.472508,
                  longitude : -58.820390,
                  timestamp : moment().format('25/01/2016 12:13')
                },
                {
                  id : 5,
                  latitude : -27.472567,
                  longitude : -58.819907,
                  timestamp : moment().format('25/01/2016 12:14')
                },
                {
                  id : 6,
                  latitude : -27.472612,
                  longitude : -58.819581,
                  timestamp : moment().format('25/01/2016 12:15')
                },
                {
                  id : 7,
                  latitude : -27.472624,
                  longitude : -58.819416,
                  timestamp : moment().format('25/01/2016 12:16')
                },
                {
                  id : 8,
                  latitude : -27.473161,
                  longitude : -58.819518,
                  timestamp : moment().format('25/01/2016 12:17')
                }
              ]
            },
            {
              id : '2',
              coordinates : [
                {
                  id : 1,
                  latitude : -27.474532,
                  longitude : -58.823383,
                  timestamp : moment().format('25/01/2016 12:12')
                },
                {
                  id : 2,
                  latitude : -27.474592,
                  longitude : -58.822810,
                  timestamp : moment().format('25/01/2016 12:13')
                },
                {

                  id : 3,
                  latitude : -27.474649,
                  longitude : -58.822201,
                  timestamp : moment().format('25/01/2016 12:14')
                }
              ]
            },
            {
              id : '3',
              coordinates : [
                {
                  id : 1,
                  latitude : -27.472198,
                  longitude : -58.823630,
                  timestamp : moment().format('25/01/2016 12:11')
                },
                {
                  id : 2,
                  latitude : -27.472224,
                  longitude :  -58.823271,
                  timestamp : moment().format('25/01/2016 12:12')
                },
                {
                  id : 3,
                  latitude : -27.472020,
                  longitude : -58.82323,
                  timestamp : moment().format('25/01/2016 12:13')
                }
              ]
            },
            {
              id : '4',
              coordinates : [
                {
                  id : 1,
                  latitude : -27.474702,
                  longitude : -58.817617,
                  timestamp : moment().format('27/01/2016 12:15')
                },
                {
                  id : 2,
                  latitude : -27.473998,
                  longitude :  -58.817488,
                  timestamp : moment().format('27/01/2016 12:16')
                },
                {
                  id : 3,
                  latitude : -27.472989,
                  longitude : -58.817241,
                  timestamp : moment().format('27/01/2016 12:17')
                }
              ]
            },
            {
              id : '5',
              coordinates : [
                {
                  id : 1,
                  latitude : -27.473988,
                  longitude : -58.817928,
                  timestamp : moment().format('27/01/2016 12:15')
                },
                {
                  id : 2,
                  latitude : -27.473864,
                  longitude :  -58.818912,
                  timestamp : moment().format('27/01/2016 12:16')
                },
                {
                  id : 3,
                  latitude : -27.473857,
                  longitude : -58.819119,
                  timestamp : moment().format('27/01/2016 12:17')
                },
                {
                  id : 4,
                  latitude : -27.473452,
                  longitude : -58.819039,
                  timestamp : moment().format('27/01/2016 12:18')
                }
              ]
            },
            {
              id : '6',
              coordinates : [
                {
                  id : 1,
                  latitude : -27.474516,
                  longitude : -58.823469,
                  timestamp : moment().format('31/01/2016 12:15')
                },
                {
                  id : 2,
                  latitude : -27.473802,
                  longitude :  -58.823389,
                  timestamp : moment().format('31/01/2016 12:16')
                },
                {
                  id : 3,
                  latitude : -27.473393,
                  longitude : -58.823335,
                  timestamp : moment().format('31/01/2016 12:17')
                }
              ]
            },
            {
              id : '7',
              coordinates : [
                {
                  id : 1,
                  latitude : -27.474369,
                  longitude :  -58.822,
                  timestamp : moment().format('31/01/2016 12:15')
                },
                {
                  id : 2,
                  latitude : -27.474660,
                  longitude : -58.822151,
                  timestamp : moment().format('31/01/2016 12:16')
                },
                {
                  id : 3,
                  latitude : -27.474772,
                  longitude : -58.820971,
                  timestamp : moment().format('31/01/2016 12:17')
                }
              ]
            },
            {
              id : '8',
              coordinates : [
                {
                  id : 1,
                  latitude : -27.471807,
                  longitude : -58.821885,
                  timestamp : moment().format('02/02/2016 12:15')
                },
                {
                  id : 2,
                  latitude : -27.472388,
                  longitude :-58.821927,
                  timestamp : moment().format('02/02/2016 12:16')
                },
                {
                  id : 3,
                  latitude : -27.473073,
                  longitude : -58.821938,
                  timestamp : moment().format('02/02/2016 12:17')
                }
              ]
            },
            {
              id : '9',
              coordinates : [
                {
                  id : 1,
                  latitude : -27.473625,
                  longitude :  -58.821155,
                  timestamp : moment().format('05/02/2016 12:15')
                },
                {
                  id : 2,
                  latitude : -27.473530,
                  longitude : -58.822121,
                  timestamp : moment().format('05/02/2016 12:16')
                },
                {
                  id : 3,
                  latitude : -27.473414,
                  longitude : -58.823130,
                  timestamp : moment().format('05/02/2016 12:17')
                }
              ]
            },
            {
              id : '10',
              coordinates : [
                {
                  id : 1,
                  latitude : -27.472253,
                  longitude :   -58.823032,
                  timestamp : moment().format('08/02/2016 12:15')
                },
                {
                  id : 2,
                  latitude : -27.472301,
                  longitude : -58.822356,
                  timestamp : moment().format('08/02/2016 12:16')
                },
                {
                  id : 3,
                  latitude : -27.472396,
                  longitude : -58.821454,
                  timestamp : moment().format('08/02/2016 12:17')
                }
              ]
            },
            {
              id : '11',
              coordinates : [
                {
                  id : 1,
                  latitude : -27.471254,
                  longitude :  -58.822087,
                  timestamp : moment().format('08/02/2016 12:15')
                },
                {
                  id : 2,
                  latitude : -27.471158,
                  longitude : -58.823010,
                  timestamp : moment().format('08/02/2016 12:16')
                },
                {
                  id : 3,
                  latitude : -27.471025,
                  longitude : -58.823986,
                  timestamp : moment().format('08/02/2016 12:17')
                }
              ]
            },
            {
              id : '12',
              coordinates : [
                {
                  id : 1,
                  latitude : -27.472586,
                  longitude :  -58.818890,
                  timestamp : moment().format('14/02/2016 12:15')
                },
                {
                  id : 2,
                  latitude : -27.471977,
                  longitude : -58.818751,
                  timestamp : moment().format('14/02/2016 12:16')
                },
                {
                  id : 3,
                  latitude : -27.471311,
                  longitude : -58.818611,
                  timestamp : moment().format('14/02/2016 12:17')
                }
              ]
            }
          ];

          scope.options = {
            scrollwheel : false
          };

        }
      }
    };

  });
};