'use strict';


export default ngModule => {

  ngModule.filter('sarZoneByMobileFilter',function () {

    return function (zones, mobiles) {

      var zoneByMobile = [];

      zones.forEach((zone) => {
        var zoneToArray = [];
        zoneToArray = zone.coordinates.map ((coordinate) => {
          return [coordinate.latitude, coordinate.longitude]
        });
        mobiles.forEach((mobile) => {
          mobile.coordinates.forEach((coordinate) => {
            let pointInPoly = robustPointInPolygon;
            if ((pointInPoly(zoneToArray,[coordinate.latitude, coordinate.longitude])) === -1){
              if (!zoneByMobile.includes(zone)){
                zoneByMobile.push(zone);
                console.log('id', zone.id);
              }
              return true;
            }
          })
        });
      });

      return zoneByMobile

    }

  });
};/**
 * Created by pablol on 14/02/16.
 */
