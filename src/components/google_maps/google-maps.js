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
        map       : '&',
        polylines : '=',
        markers   : '&',
        options   : '&'
      },
      replace: true,
      template: template,
      link: {
        post: function postLink(scope, element, attributes) {

          uiGmapGoogleMapApi.then(function () {

            scope.polylines.forEach((line) => {
              line.visible = true;
              line.icons   = [{
                icon: {
                  path: google.maps.SymbolPath.FORWARD_OPEN_ARROW
                },
                offset: '25px',
                repeat: '70px'
              }];
              line.stroke = {};
              line.stroke.weight = 5;
              line.stroke.color = scope.randomColorGenerator();
            });
          });

          scope.toggleMobile = (line)=> {
           scope.polylines.find( (polyline) => {
             if(polyline === line) {
               polyline.visible = !polyline.visible;
             }
           })
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
              scope.polylines.forEach( (line) => {
                line.visible = true;
              })
          };

          scope.deselectAllMobiles = () => {
            scope.polylines.forEach( (line) => {
              line.visible = false;
            })
          };

          scope.hideMenu = false;

          scope.toggleMenu = () => {
            scope.hideMenu = !scope.hideMenu;
          }
        }
      }
    }
  });
};