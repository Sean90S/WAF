import uirouter from 'angular-ui-router';

// 管理中心
import routing from './manage.routes';
import DomainController from './domainManager/domain.controller';
import DomainEditController from './domainManager/domain.edit.controller';
import BusinessController from './business/business.controller';
import BusinessEditController from './business/business.edit.controller';
import UserController from './user/user.controller';
import UserEditController from './user/user.edit.controller';
import RoleController from './role/role.controller';
import RoleEditController from './role/role.edit.controller';
import ScenarioController from './scenario/scenario.controller';
import ScenarioEditController from './scenario/scenario.edit.controller';
import ScenarioApiEditController from './scenario/scenario.api.edit.controller';
import MenuController from './menu/menu.controller';
import engineController from './business/engine/engine';
import engineEditController from './business/engine/engine.edit.controller';


export default  angular.module('app.manager', [uirouter])
    .config(routing)
    .controller('DomainController',DomainController)
    .controller('DomainEditController',DomainEditController)
    .controller('BusinessController',BusinessController)
    .controller('BusinessEditController',BusinessEditController)
    .controller('UserController',UserController)
    .controller('UserEditController',UserEditController)
    .controller('RoleController',RoleController)
    .controller('RoleEditController',RoleEditController)
    .controller('ScenarioController',ScenarioController)
    .controller('ScenarioEditController',ScenarioEditController)
    .controller('ScenarioApiEditController',ScenarioApiEditController)
    .controller('MenuController',MenuController)
    .controller('engineController',engineController)
    .controller('engineEditController',engineEditController)
    .name
