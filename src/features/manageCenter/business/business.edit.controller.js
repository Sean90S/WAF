export default class BusinessEditController {

    constructor($mdDialog, parentScope, commonService) {
        this.$mdDialog = $mdDialog;
        this.parentScope = parentScope;
        this.commonService = commonService;

    }

    $onInit() {
        const parentScope = this.parentScope;
        const title = "引擎";
        this.formType = parentScope.formType;
        this.title = this.formType == 'edit' ? '修改' + title : '新增' + title;

        //初始化radio、checkbox值
        /*this.business = {
         protocol: 'http',
         waf: 'disabled'
         };*/

        if (this.formType == 'edit') {
            let rowData = angular.copy(parentScope.rowData);
            this.business = rowData;


            //this.business.default = rowData.default;
            // this.business.ip = rowData.ip.split(",").join('\n');
        }

    }


    submit() {
        const data = angular.copy(this.business);
        var addEngGrp = 'api/engGrp/addEngGrp';
        var editEngGrp = 'api/engGrp/editEngGrp';
        this.commonService.saveForm(this.formType == 'edit' ? editEngGrp : addEngGrp, data, data.id).then((response) => {
            this.cancel();
            this.parentScope.getListData();
        });
    }

    cancel() {
        this.$mdDialog.cancel();
    }


}