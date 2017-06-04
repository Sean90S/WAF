import uirouter from 'angular-ui-router';

import routing from './Journal.routes';
import LatestController from './latest/latest.controller';
//import echartsLine from './latest/directive/echartsLine';
import managementController from './management/management.controller';



export default angular.module('app.Journal', [uirouter])
    .config(routing)
   	.controller('LatestController',LatestController)
   	.controller('managementController',managementController)
   	//.directive('echartsLine',echartsLine)
    .name

