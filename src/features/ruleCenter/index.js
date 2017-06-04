import uirouter from 'angular-ui-router';

import routing from './rule.routes';
import bwListController from './IPBWListRule/bwList.controller';
import BwListEditController from './IPBWListRule/bwList.edit.controller';
import BwListFileImportController from './IPBWListRule/BwList.FileImport.Controller';
import BwListActivationController from './IPBWListRule/activation';
import ipBWTypeContController from './IPBWListRule/ipBWType.cont';
import generalController from './generalbaseRule/generalbase.controller';
import generalEditController from './generalbaseRule/general.edit.controller';
import attackTypeController from './generalbaseRule/attackTypeController'
import ruleTemplateController from './ruletemplateRule/ruletemplate.controller';
import RuletemplateEditController from './ruletemplateRule/ruletemplate.edit.controller';
import RuletemplateEditCopyController from './ruletemplateRule/ruletemplate.copy';
import RuletemplateModifyController from './ruletemplateRule/ruletemplate.modify';
import ruletemplateModifyEditController from './ruletemplateRule/ruletemplate.modify.module.controller';
import regularCtrl from './generalbaseRule/conditionsjs/regularCtrl';



export default angular.module('app.rule', [uirouter])
    .config(routing)
    .controller('bwListController',bwListController)
    .controller('BwListEditController',BwListEditController)
    .controller('BwListFileImportController',BwListFileImportController)
    .controller('ipBWTypeContController',ipBWTypeContController)
    .controller('BwListActivationController',BwListActivationController)
    .controller('generalController',generalController)
    .controller('generalEditController',generalEditController)
    .controller('attackTypeController',attackTypeController)
    .controller('ruleTemplateController',ruleTemplateController)
    .controller('RuletemplateEditController',RuletemplateEditController)
    .controller('RuletemplateEditCopyController',RuletemplateEditCopyController)
    .controller('RuletemplateModifyController',RuletemplateModifyController)
    .controller('ruletemplateModifyEditController',ruletemplateModifyEditController)
    .controller('regularCtrl',regularCtrl)


    .name
