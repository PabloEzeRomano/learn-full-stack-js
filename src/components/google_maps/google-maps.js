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
        vehicles : '=',
        map      : '&',
        options  : '&'
      },
      replace: true,
      template: template,
      link: {
        post: function postLink(scope, element, attributes, $filter) {

          console.log('vehicles', scope.vehicles);

          uiGmapGoogleMapApi.then(function () {
            console.log('vehicles', scope.vehicles);
            scope.vehicles.forEach((vehicle) => {

              vehicle.visible = true;
              vehicle.icons   = [{
                icon: {
                  path: google.maps.SymbolPath.FORWARD_OPEN_ARROW
                },
                offset: '25px',
                repeat: '70px'
              }];
              vehicle.stroke = {};
              vehicle.stroke.weight = 5;
              vehicle.stroke.color = scope.randomColorGenerator();
            });

            scope.compareCar(scope.initialDateTime,scope.endDateTime);

          });

          scope.toggleMobile = (vehicle)=> {
            scope.vehicles.find( (polyvehicle) => {
              if(polyvehicle === vehicle) {
                polyvehicle.visible = !polyvehicle.visible;
              }
            })
          };

          scope.initialDateTime = moment().format('M/D/YYYY 00:00');

          scope.endDateTime = moment().format('M/D/YYYY 23:59');

          scope.compareCar = function (initialDate, endDate) {
            console.log('vehicles', scope.vehicles);
            scope.vehicles.forEach( (vehicle) => {
              vehicle.coordinates.forEach ( (coordinates) => {
                if ((moment(coordinates.timestamp).isAfter(initialDate)) && (moment(coordinates.timestamp).isBefore(endDate))) {

                  if (vehicle.visible === false) {
                    vehicle.visible = true;
                  }

                  vehicle.showOnDate = true;

                }
                else {

                  if (vehicle.showOnDate === true){
                    vehicle.showOnDate = false;
                  }
                  vehicle.visible = false;
                  console.log('deberia ser false',vehicle.visible);
                }
              });
            });
          };



          scope.randomColorGenerator = () => {
            let chars = '0123456789ABCDEF'.split('');
            let color = '#';
            for (let i = 0; i < 6; i++ ) {
              color += chars[Math.floor(Math.random() * 16)];
            }
            return color;
          };

          scope.selectAllMobiles = () => {
            scope.vehicles.forEach( (vehicle) => {
              if (vehicle.showOnDate) {
                vehicle.visible = true;
              }
            })
          };

          scope.deselectAllMobiles = () => {
            scope.vehicles.forEach( (vehicle) => {
              if (vehicle.showOnDate) {
                vehicle.visible = false;
              }
            })
          };

          scope.hideMenu = true;

          scope.hideMenu = setTimeout(function () {
            scope.hideMenu = false;
          }, 500);

          scope.toggleMenu = () => {
            scope.hideMenu = !scope.hideMenu;
          }
        }
      }
    }
  });
};