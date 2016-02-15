'use strict';


export default ngModule => {

  ngModule.filter('sarMobileByZoneFilter',function () {

    return function (mobiles, zones, check) {

      var mobilesByZone = [];

      if (check) {
        zones.forEach((zone) => {
          var zoneToArray = [];
          zoneToArray = zone.coordinates.map ((coordinate) => {
            return [coordinate.latitude, coordinate.longitude]
          });
          mobiles.forEach((mobile) => {
            mobile.coordinates.forEach((coordinate) => {
              let pointInPoly = robustPointInPolygon;
              if ((pointInPoly(zoneToArray,[coordinate.latitude, coordinate.longitude])) === -1){
                if (!mobilesByZone.includes(mobile)){
                  mobilesByZone.push(mobile);
                }
                return true;
              }
            })
          });
        });
        return mobilesByZone;
      } else {
        return mobiles;
      }

      return mobilesByZone

    }

  });
};