module.exports = function ($scope, gettext, $filter) {

  $scope.reboot = function (device) {
    var config = {
      rebootEnabled: true
    }

    if (config.rebootEnabled) {
      if (confirm($filter('translate')(
        gettext('Are you sure you want to reboot this device? \nThe device will be unavailable for a moment.')))) {
        console.log('reboot')

      }
    }
  }

}
