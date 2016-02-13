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
              var zoneToArray = [];
              zoneToArray = zone.coordinates.map ((coordinate) => {
                return [coordinate.latitude, coordinate.longitude]
              });
              scope.mobiles().forEach((mobile) => {
                mobile.coordinates.forEach((coordinate) => {
                  let pointInPoly = robustPointInPolygon;
                  if ((pointInPoly(zoneToArray,[coordinate.latitude, coordinate.longitude])) === -1){
                    console.log('adentro',(pointInPoly(zoneToArray,[coordinate.latitude, coordinate.longitude])));
                  } else {
                    console.log('afuera', (pointInPoly(zoneToArray,[coordinate.latitude, coordinate.longitude])));
                  }
                })
              })
            });
          });

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

          scope.hideMobileMenu = false;
          scope.hideZoneMenu = false;
          scope.hideBothMenu = true;

          scope.toggleMobileMenu = () => {
            scope.hideMobileMenu = !scope.hideMobileMenu;
            if (!scope.hideMobileMenu && !scope.hideZoneMenu) {
              scope.hideBothMenu = true;
            } else {
              scope.hideBothMenu = false;
            }
          };
          scope.toggleZoneMenu = () => {
            scope.hideZoneMenu = !scope.hideZoneMenu;
            if (!scope.hideMobileMenu && !scope.hideZoneMenu) {
              scope.hideBothMenu = true;
            } else {
              scope.hideBothMenu = false;
            }
          };

          setTimeout(function () {
            scope.toggleMobileMenu();
            scope.toggleZoneMenu();
          }, 500);

          scope.initialDateTime = moment().format('DD/01/YYYY');

          scope.endDateTime = moment().format('DD/MM/YYYY');

          scope.openInitDate = function() {
            scope.initDatePopUp.opened = true;
          };

          scope.openEndDate = function() {
            scope.endDatePopUp.opened = true;
          };

          scope.format = 'dd/MM/yyyy';

          scope.initDatePopUp = {
            opened: false
          };

          scope.endDatePopUp = {
            opened: false
          };

        }
      }
    }
  });
};