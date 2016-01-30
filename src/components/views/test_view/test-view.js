'use strict';

import controller  from './test-view-controller';
import template    from './test-view.html';
import style       from './test-view.styl';
import test        from './test-view.test';

export default ngModule => {

  if (ON_TEST) {
    test(ngModule);
  }

  ngModule.directive('testView',function (uiGridConstants) {

    return {
      restrict      : 'E',
      scope         : {},
      replace       : true,
      template      : template,
      controllerAs  : 'testView',
      controller    : controller,
      link : {
        pre : function (scope, element, attributes) {

          scope.map = {
            center: {
              latitude: -27.473077,
              longitude: -58.820106
            },
            zoom: 17,
            bounds: {}
          };

          scope.markers = [
            {
              id: 1,
              title : 'marker 1',
              latitude: -27.473077,
              longitude: -58.820106
            },
            {
              id: 2,
              title : 'marker 2',
              latitude: -27.473305,
              longitude: -58.820714
            },
            {
              id: 3,
              title : 'marker 3',
              latitude: -27.473161,
              longitude: -58.819518
            }
          ];

          scope.options = {
            scrollwheel: false
          };

          scope.polylines = [
            {
              id: 'Movil 1',
              path: [
                {
                  latitude: -27.473959,
                  longitude: -58.820820,
                  timestamp : new Date ("2015-03-25T12:10:00")
                },
                {
                  latitude: -27.473305,
                  longitude: -58.820714,
                  timestamp : new Date ("2015-03-25T12:11:00")
                },
                {
                  latitude: -27.472498,
                  longitude: -58.820612,
                  timestamp : new Date ("2015-03-25T12:12:00")
                },
                {
                  latitude: -27.472508,
                  longitude: -58.820390,
                  timestamp : new Date ("2015-03-25T12:13:00")
                },
                {
                  latitude: -27.472567,
                  longitude: -58.819907,
                  timestamp : new Date ("2015-03-25T12:14:00")
                },
                {
                  latitude: -27.472612,
                  longitude: -58.819581,
                  timestamp : new Date ("2015-03-25T12:15:00")
                },
                {
                  latitude: -27.472624,
                  longitude: -58.819416,
                  timestamp : new Date ("2015-03-25T12:16:00")
                },
                {
                  latitude: -27.473161,
                  longitude: -58.819518,
                  timestamp : new Date ("2015-03-25T12:17:00")
                }
              ]
            },
            {
              id: 'Movil 2',
              path: [
                {
                  latitude: -27.474532,
                  longitude: -58.823383,
                  timestamp : new Date ("2015-03-25T12:00:00")
                },
                {
                  latitude: -27.474592,
                  longitude: -58.822810,
                  timestamp : new Date ("2015-03-25T12:01:10")
                },
                {
                  latitude: -27.474649,
                  longitude: -58.822201,
                  timestamp : new Date ("2015-03-25T12:02:02")
                }
              ]
            },
            {
              id: 'Movil 3',
              path: [
                {
                  latitude: -27.472198,
                  longitude: -58.823630,
                  timestamp : new Date ("2015-03-25T12:15:00")
                },
                {
                  latitude: -27.472224,
                  longitude:  -58.823271,
                  timestamp : new Date ("2015-03-25T12:16:00")
                },
                {
                  latitude: -27.472020,
                  longitude: -58.82323,
                  timestamp : new Date ("2015-03-25T12:17:00")
                }
              ]
            }
          ];

        }
      }
    };

  });
};