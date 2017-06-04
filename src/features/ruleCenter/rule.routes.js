routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("/rule", '/rule/bwList');

    $stateProvider
        .state('rule', {
            url: '/rule',
            template: require('./sub-rule.html'),
        })
        // 全局IP黑白名单
        .state('rule.bwList', {
            url: '/bwList',
            views: {
                'mainContent@rule': {
                    template: require('./IPBWListRule/IPBWList.html'),
                    controller: 'bwListController',
                    controllerAs: 'bwList'
                }
            }
        })
        // 总规则库
        .state('rule.generalBase', {
            url: '/generalBase',
            views: {
                'mainContent@rule': {
                    template: require('./generalbaseRule/generalbaseList.html'),
                    controller: 'generalController',
                    controllerAs: 'general'
                }
            }
        })
        .state('rule.attackType', {
            url: '/attackType',
            views: {
                'mainContent@rule':{
                    template: require('./generalbaseRule/attackType.html'),
                    controller: 'attackTypeController',
                    controllerAs:'attackType'
                }
            }
        })
        // 规则集配置
        .state('rule.ruleTemplate', {
            url: '/ruleTemplate',
            views: {
                'mainContent@rule': {
                    template: require('./ruleTemplateRule/ruletemplateList.html'),
                    controller: 'ruleTemplateController',
                    controllerAs: 'ruleTemplate'
                }
            }
        })
        // 新增规则集
        .state('rule.ruleT', {
            url: '/ruleT',
            views: {
                'mainContent@rule': {
                    template: require('./ruleTemplateRule/ruletemplate.edit.tmpl.html'),
                    controller: 'RuletemplateEditController',
                    controllerAs: 'ruleT'
                }
            }
        })
        // 编辑规则集
        .state('rule.modify', {
            url: '/modify',
            views: {
                'mainContent@rule': {
                    template: require('./ruleTemplateRule/ruletemplate.modify.tmpl.html'),
                    controller: 'RuletemplateModifyController',
                    controllerAs: 'modify'
                }
            }
        })
}



