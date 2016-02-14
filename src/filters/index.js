'use strict';

import sarDateFilter from './sar-date-filter';
import sarMobileByZoneFilter from './sar-mobile-by-zone-filter';
import sarZoneByMobileFilter from './sar-zone-by-mobile-filter';

export default ngModule => {
  sarDateFilter(ngModule);
  sarMobileByZoneFilter(ngModule);
  sarZoneByMobileFilter(ngModule);
}
