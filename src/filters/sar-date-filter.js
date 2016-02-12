'use strict';


export default ngModule => {

  ngModule.filter('sarDateFilter',function () {

    return function (mobiles, initDate, endDate) {

      var includeMobile = null;
      var mInitDate = moment(initDate,'DD/MM/YYYY HH:mm');
      var mEndDate = moment(endDate,'DD/MM/YYYY HH:mm');

      return mobiles.filter( (mobile) => {
        includeMobile = false;

        mobile.coordinates.forEach ( (coordinates) => {
          var timestamp = moment(coordinates.timestamp,'DD/MM/YYYY HH:mm');
          if (timestamp.isBetween(mInitDate, mEndDate)) {

            includeMobile = true;

          }
        });
        return includeMobile;
      });
    }

  });
};