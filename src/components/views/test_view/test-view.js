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
            },{
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
            }
          ];

          scope.mobiles = [
            {
              id : 'Movil 1',
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
              id : 'Movil 2',
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
              id : 'Movil 3',
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
              id : 'Movil 4',
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
              id : 'Movil 5',
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
              id : 'Movil 6',
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
              id : 'Movil 7',
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
            }
          ];

          scope.options = {
            scrollwheel : true
          };

        }
      }
    };

  });
};