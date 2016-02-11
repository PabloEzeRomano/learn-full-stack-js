'use strict';

import template    from './google-maps.html';
import style       from './google-maps.styl';

export default ngModule => {

  ngModule.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      libraries: 'geometry,visualization'
    });
  });

  ngModule.directive('sarGoogleMap',function (uiGmapGoogleMapApi) {

    return {
      restrict: 'E',
      scope: {
        zones    : '&',
        mobiles  : '&',
        map      : '&',
        options  : '&'
      },
      replace: true,
      template: template,
      link: {
        post: function postLink(scope, element, attributes) {

          uiGmapGoogleMapApi.then(function () {

            scope.mobiles().forEach((mobile) => {
              mobile.visible = true;
              mobile.icons   = [{
                icon: {
                  path: google.maps.SymbolPath.FORWARD_OPEN_ARROW
                },
                offset: '25px',
                repeat: '70px'
              }];
              mobile.stroke = {};
              mobile.stroke.weight = 5;
              mobile.stroke.color = scope.randomColorGenerator();
            });

            scope.zones().forEach((zone) => {
              zone.visible = true;
              zone.stroke = {};
              zone.stroke.weight = 5;
              zone.stroke.color = scope.randomColorGenerator();
              zone.fill = {};
              zone.fill.color = zone.stroke.color;
              zone.fill.opacity = 0.5;
            });

            scope.zones().forEach((zone) => {
              scope.mobiles().forEach((mobile) => {
                mobile.coordinates.forEach((coordinate) => {

                  let pointInPoly = robustPointInPolygon;
                  if ((pointInPoly(zone.coordinates,[coordinate.latitude, coordinate.longitude])) === -1){
                    console.log('adentro',(pointInPoly(zone.coordinates,[coordinate.latitude, coordinate.longitude])));
                  } else {
                    console.log('afuera', (pointInPoly(zone.coordinates,[coordinate.latitude, coordinate.longitude])));
                  }
                })
              })
            });
          });



          //var classifyPoint = require('./../../../node_modules/point-in-polygon/index');
          //var polygon = [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ] ];
          //
          //console.log(
          //  classifyPoint(polygon, [1.5, 1.5]),
          //  classifyPoint(polygon, [1, 2]),
          //  classifyPoint(polygon, [100000, 10000]));
          //
          //
          var classifyPoints = require('./../../../node_modules/robust-point-in-polygon/robust-pnp');
          var polygons = [ [ -27.472850, -58.820296 ], [-27.472065, -58.820194], [ -27.471974, -58.820977 ], [  -27.472698, -58.821085] ];

          console.log(
            classifyPoints(polygons, [-27.472498,-58.820612]),
            classifyPoints(polygons, [-27.472508, -58.820390]),
            classifyPoints(polygons, [-27.472567, -58.819907]));

          scope.toggleMobile = (mobile)=> {
            scope.mobiles().find( (mobileChange) => {
              if(mobileChange === mobile) {
                mobile.visible = !mobile.visible;
              }
            })
          };

          scope.toggleZone = (zone)=> {
            scope.zones().find( (zoneChange) => {
              if(zoneChange === zone) {
                zone.visible = !zone.visible;
              }
            })
          };

          scope.initialDateTime = moment().format('DD/MM/YYYY 00:00');

          scope.endDateTime = moment().format('DD/MM/YYYY 23:59');

          scope.randomColorGenerator = () => {
            let chars = '0123456789ABCDEF'.split('');
            let hexColor = '#';
            for (let i = 0; i < 6; i++ ) {
              hexColor += chars[Math.floor(Math.random() * 16)];
            }
            var color = tinycolor(hexColor);
            if (color.isDark()) {
              color.setAlpha(.5);
            }
            return color;
          };

          scope.selectAllMobiles = () => {
            scope.mobiles().forEach( (mobile) => {
                mobile.visible = true;
            })
          };

          scope.deselectAllMobiles = () => {
            scope.mobiles().forEach( (mobile) => {
              mobile.visible = false;
            })
          };

          scope.selectAllZones = () => {
            scope.zones().forEach( (zone) => {
              zone.visible = true;
            })
          };

          scope.deselectAllZones = () => {
            scope.zones().forEach( (zone) => {
              zone.visible = false;
            })
          };

          $(function () {
            $('#datetimepicker1').datetimepicker({
              locale : 'es',
              sideBySide : true,
              defaultDate: moment().format('DD/MM/YYYY 00:00')
            });
            $('#datetimepicker2').datetimepicker({
              locale : 'es',
              sideBySide : true,
              defaultDate : moment().format('DD/MM/YYYY 23:59')
            });
            $("#datetimepicker1").on("dp.change", function (e) {
              $('#datetimepicker2').data("DateTimePicker").minDate(e.date);
            });
            $("#datetimepicker2").on("dp.change", function (e) {
              $('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
            });
          });

          scope.hideMobileMenu = false;

          scope.hideMobileMenu = setTimeout(function () {
            scope.hideMobileMenu = true;
          }, 500);

          scope.toggleMobileMenu = () => {
            scope.hideMobileMenu = !scope.hideMobileMenu;
          };

          scope.hideZoneMenu = false;

          scope.hideZoneMenu = setTimeout(function () {
            scope.hideZoneMenu = true;
          }, 500);

          scope.toggleZoneMenu = () => {
            scope.hideZoneMenu = !scope.hideZoneMenu;
          }
        }
      }
    }
  });


};