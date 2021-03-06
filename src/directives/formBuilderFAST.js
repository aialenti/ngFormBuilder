'use strict';
var utils = require('formiojs/utils');
var _get = require('lodash/get');
var _reject = require('lodash/reject');
module.exports = [
  function() {
    return {
      restrict: 'E',
      scope: true,
      template: '' +
        '<uib-accordion>' +
          '<div uib-accordion-group heading="Simple" class="panel panel-default" is-open="status.simple">' +
            'ciaone:' +
            '<select class="form-control input-md" ng-model="component.conditionalDisable.show">' +
            '<option ng-repeat="item in _booleans track by $index" value="{{item}}">{{item.toString()}}</option>' +
            '</select>' +
            '<br>When the form component:' +
            '<select class="form-control input-md" ng-model="component.conditionalDisable.when">' +
            '<option ng-repeat="item in _components track by $index" value="{{item.key}}">{{item !== "" ? item.label + " (" + item.key + ")" : ""}}</option>' +
            '</select>' +
            '<br>Has the value:' +
            '<input type="text" class="form-control input-md" ng-model="component.conditionalDisable.eq">' +
          '</div>' +
          '<div uib-accordion-group heading="Advanced" class="panel panel-default" is-open="status.advanced">' +
            '<textarea class="form-control" rows="5" id="custom" name="custom" ng-model="component.customconditionalDisable" placeholder="/*** Example Code ***/\nshow = (data[\'mykey\'] > 1);"></textarea>' +
            '<small>' +
            '<p>Enter custom conditionalDisable code.</p>' +
            '<p>You must assign the <strong>show</strong> variable as either <strong>true</strong> or <strong>false</strong>.</p>' +
            '<p>The global variable <strong>data</strong> is provided, and allows you to access the data of any form component, by using its API key.</p>' +
            '<p><strong>Note: Advanced conditionalDisable logic will override the results of the Simple conditionalDisable logic.</strong></p>' +
            '</small>' +
          '</div>' +
          '<div uib-accordion-group heading="JSON" class="panel panel-default" is-open="status.json">' +
            '<small>' +
              '<p>Execute custom validation logic with JSON and <a href="http://jsonlogic.com/">JsonLogic</a>.</p>' +
              '<p>Submission data is available as JsonLogic variables, with the same api key as your components.</p>' +
            '</small>' +
            '<textarea class="form-control" rows="5" id="json" name="json" json-input ng-model="component.jsonconditionalDisable" placeholder="{ ... }"></textarea>' +
          '</div>' +
        '</uib-accordion>',
      controller: [
        '$scope',
        function(
          $scope) {
          console.log($scope);//#############################################
          // Default the current components conditionalDisable logic.
          $scope.component = $scope.component || {};
          $scope.component.conditionalDisable = $scope.component.conditionalDisable || {};

          // The available logic functions.
          $scope._booleans = ['', 'true', 'false'];

          // Filter the list of available form components for conditionalDisable logic.
          $scope._components = _get($scope, 'form.components') || [];
          $scope._components = utils.flattenComponents($scope._components);
          // Remove non-input/button fields because they don't make sense.
          // FA-890 - Dont allow the current component to be a conditionalDisable trigger.
          $scope._components = _reject($scope._components, function(c) {
            return !c.input || (c.type === 'button') || (c.key === $scope.component.key) || (!c.label && !c.key);
          });

          // Add default item to the components list.
          $scope._components.unshift('');

          // Default and watch the show logic.
          $scope.component.conditionalDisable.show = $scope.component.conditionalDisable.show || '';
          // Coerce show var to supported value.
          var _booleanMap = {
            '': '',
            'true': 'true',
            'false': 'false'
          };
          $scope.component.conditionalDisable.show = _booleanMap.hasOwnProperty($scope.component.conditionalDisable.show)
            ? _booleanMap[$scope.component.conditionalDisable.show]
            : '';

          // Default and watch the when logic.
          $scope.component.conditionalDisable.when = $scope.component.conditionalDisable.when || null;

          // Default and watch the search logic.
          $scope.component.conditionalDisable.eq = $scope.component.conditionalDisable.eq || '';

          // Track the status of the accordion panels open state.
          $scope.status = {
            simple: !$scope.component.customconditionalDisable,
            advanced: !!$scope.component.customconditionalDisable
          };
        }
      ]
    };
  }
];
