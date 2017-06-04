import uirouter from 'angular-ui-router';

import routing from './event.routes';
import BlackandwhiteController from './blackandwhite/blackandwhite.controller';
import BlankandwhiteEditController from './blackandwhite/blankandwhite.edit.controller';
import BlankandwhiteFileImport from './blackandwhite/blankandwhite.edit.controller';
import UrlwhiteController from './urlwhite/urlwhite.controller';
import urlwhiteEditController from './urlwhite/urlwhite.edit.controller';
import customController from './custom/custom.controller';



export default angular.module('app.event', [uirouter])
    .config(routing)
    .controller('BlackandwhiteController',BlackandwhiteController)
    .controller('BlankandwhiteEditController',BlankandwhiteEditController)
    .controller('BlankandwhiteFileImport',BlankandwhiteFileImport)
    .controller('UrlwhiteController',UrlwhiteController)
    .controller('customController',customController)
    .name
