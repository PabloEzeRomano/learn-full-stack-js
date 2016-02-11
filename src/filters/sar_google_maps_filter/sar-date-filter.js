'use strict';


export default ngModule => {

  ngModule.filter('sarDateFilter',function () {

    return function (mobiles, initDate, endDate) {

      var includeMobile = null;

      return mobiles.filter( (mobile) => {
        includeMobile = false;
        mobile.coordinates.forEach ( (coordinates) => {
          console.log('date',typeof initDate);
          console.log(typeof coordinates.timestamp);
          if ((moment(coordinates.timestamp).isBetween(initDate, endDate))) {

            includeMobile = true;

          }
        });
        return includeMobile;
      });
    }

  });
};