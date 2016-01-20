'use strict';

import template    from './search-list.html';
import style       from './search-list.styl';

export default ngModule => {

  ngModule.directive('searchList',function () {

    return {
      restrict: 'E',
      scope: {
        onSearchSubmit: '@',
        onItemClick: '@',
        orderBy: '@',
        listItems: '@'
      },
      replace: true,
      template: template,
      link: {
        post: function postLink(scope, element, attributes) {

          if (!$transclude) {
            throw minErr('ngTransclude')('orphan',
              'Illegal use of ngTransclude directive in the template! ' +
              'No parent directive that requires a transclusion found. ' +
              'Element: {0}',
              startingTag($element));
          }
          var innerScope = $scope.$new();
          $transclude(innerScope, function (clone) {
            $element.empty();
            $element.append(clone);
            $element.on('$destroy', function () {
              innerScope.$destroy();
            });
          });
        }
      }
    }
  })
};

