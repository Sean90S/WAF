import 'angular-material/angular-material.min.css';
import 'angular-material-data-table/dist/md-data-table.min.css';
import '../public/font/iconfont.css';
import '../scss/app.scss';
import '../scss/font-awesome.css';


import angular from 'angular';
import jquery from 'jquery';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import dataTable from 'angular-material-data-table';
import ngSanitize from 'angular-sanitize';
import routing from '../app/app.config';
import manager from '../features/manageCenter';
import rule from '../features/ruleCenter';
import event from '../features/eventCenter';
import Journal from '../features/JournalCenter';
import commonService from '../services/common.service';
import confirmDialog from '../services/confirm.service';
import sceHtml from '../directives/sce-html';

window.$ = jquery;

class AppCtrl {
    constructor() {
        this.url = 'https://github.com/preboot/angular-webpack';
    }

    logout(){
        //logout
        console.log("logout");
    }

}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [ngMaterial,uiRouter,ngSanitize,
    manager,rule,event,Journal,dataTable,commonService,confirmDialog,sceHtml])
    .config(routing)
    .controller('AppCtrl', AppCtrl);
export default MODULE_NAME
