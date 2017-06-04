export default class BwListActivationController {
    constructor($mdDialog, parentScope, commonService, $filter) {
        this.$mdDialog = $mdDialog;
        this.parentScope = parentScope;
        this.commonService = commonService;
        this.$filter = $filter;
        this.time = '';
    }

    $onInit() {
        const parentScope = this.parentScope;
        const title = "域名";
        this.formType = parentScope.formType;
        this.title = this.formType == 'edit' ? '激活ip黑/白名单' + title : '新增' + title;

        //初始化radio、checkbox值
        this.bwList = {
            protocol: 'http',
            waf: 'disabled'
        };

        if (this.formType == 'edit') {
            let rowData = angular.copy(parentScope.rowData);
            this.bwList = rowData;
            this.time = new Date(this.bwList.expireTime);
        }

    }


    submit() {
        const data = angular.copy(this.bwList);
        const activationGlobalIp = 'api/ipmanage/activationGlobalIp';

        this.commonService.saveForm(activationGlobalIp, data).then((response) => {
            this.cancel();
            this.parentScope.getListData();
        });
    }

    cancel() {
        this.$mdDialog.cancel();
    }


}