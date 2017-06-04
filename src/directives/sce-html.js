import angular from 'angular';

function condition() {
    var directive = {
        restrict: 'E',
        template: '<md-input-container class="md-block">\
                        <md-select name="parameter" ng-model="vm.condition.parameter">\
                            <md-option value="allParameterArea" ng-click="vm.parName()">所有参数区域</md-option>\
                            <md-option value="parName" ng-click="vm.parName()">参数名</md-option>\
                            <md-option value="parVal" ng-click="vm.parVal()">参数值</md-option>\
                        </md-select>\
                    </md-input-container>',
        transclude: true
    }
    return directive;
}
export default angular.module('directives.sce-html', [])
    //.filter('showAsHtml', showAsHtml)
    .directive('condition', condition)
    .name;