'use strict';

import angular from 'angular';
import logo from './logo.svg';

const directive = {
  restrict: 'E',
  template: logo,
  templateNamespace: 'svg'
};

export default angular.module('valet-io.logo', [])
  .directive('valetIoLogo', function () {
    return directive;
  })
  .name;
