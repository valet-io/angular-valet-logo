'use strict';

import angular from 'angular';
import logo from './logo.svg';
import styles from './styles.css';
import insertStyles from 'insert-css';

const directive = {
  restrict: 'E',
  template: logo,
  templateNamespace: 'svg'
};

insertStyles(styles);

export default angular.module('valet-io.logo', [])
  .directive('valetIoLogo', function () {
    return directive;
  })
  .name;
