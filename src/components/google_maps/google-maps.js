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

          scope.hourStep = 1;
          scope.minuteStep = 15;

          scope.timeOptions = {
            hourStep   : [1, 2, 3],
            minuteStep : [1, 5, 10, 15, 25, 30]
          };

          scope.ismeridian = true;

          scope.initialTime = new Date();

          scope.endTime = new Date();

          scope.initialDate = new Date();

          scope.endDate = new Date();

          scope.buildDate = (date, time) => {
            let assembledDate = new Date();
            assembledDate.setFullYear(date.getFullYear());
            assembledDate.setMonth(date.getMonth());
            assembledDate.setDate(date.getDate());
            assembledDate.setHours(time.getHours());
            assembledDate.setMinutes(time.getMinutes());

            return moment(assembledDate).format('DD/MM/YYYY HH:mm');
          };

          scope.mobileByZone = false;
          scope.zoneByMobile = false;
          scope.hideMarkers = false;
          scope.mobilesInDate = 0;
        }
      }
    }
  });
};