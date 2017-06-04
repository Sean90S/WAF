/**
 * Created by pafang on 16/9/27.
 */
routes.$inject = ['$stateProvider','$urlRouterProvider'];

export default function routes($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.when("/manager", '/manager/domainManager');

    $stateProvider
        .state('manager', {
            url: '/manager',
            template: require('./sub-menu.html'),
        })
        // 客户域名管理
        .state('manager.domainManager', {
            url: '/domainManager',
            views: {
                'mainContent@manager': {
                    template: require('./domainManager/domainList.html'),
                    controller: 'DomainController',
                    controllerAs: 'domain'
                }
            }

        })
        // 引擎池管理
        .state('manager.business', {
            url: '/business',
            views: {
                'mainContent@manager': {
                    template: require('./business/businessList.html'),
                    controller: 'BusinessController',
                    controllerAs: 'business'
                }
            }

        })
        .state('manager.engine',{
            url: '/engine/:demandId',
            views:{
                'mainContent@manager':{
                    template: require('./business/engine/engine.html'),
                    controller: 'engineController',
                    controllerAs: 'engine'
                }
            }
        })
        // 用户管理
        .state('manager.user', {
            url: '/user',
            views: {
                'mainContent@manager': {
                    template: require('./user/userList.html'),
                    controller: 'UserController',
                    controllerAs: 'user'
                }
            }

        })
        // 角色管理
        .state('manager.role', {
            url: '/role',
            views: {
                'mainContent@manager': {
                    template: require('./role/roleList.html'),
                    controller: 'RoleController',
                    controllerAs: 'role'
                }
            }

        })
        // 平台授权码管理
        .state('manager.scenario', {
            url: '/scenario',
            views: {
                'mainContent@manager': {
                    template: require('./scenario/scenarioList.html'),
                    controller: 'ScenarioController',
                    controllerAs: 'scenario'
                }
            }

        })
        // 安全审计
        .state('manager.menu', {
            url: '/menu',
            views: {
                'mainContent@manager': {
                    template: require('./menu/menuList.html'),
                    controller: 'MenuController',
                    controllerAs: 'menu'
                }
            }
        })

}