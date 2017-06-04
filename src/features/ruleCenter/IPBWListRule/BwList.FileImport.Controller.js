export default class BwListFileImportController {

    constructor($mdDialog, parentScope, commonService, confirmDialog, Upload) {
        this.$mdDialog = $mdDialog;
        this.parentScope = parentScope;
        this.commonService = commonService;
        this.confirmDialog = confirmDialog;
        this.Upload = Upload;
        console.log(this.Upload);
        //this.baseUrl = FileImport;

    }

    $onInit() {
        const parentScope = this.parentScope;
        const title = "ip黑(白)名单列表";
        this.formType = parentScope.formType;
        this.title = this.formType == 'edit' ? '修改' + title : '导入' + title;

        if (this.formType == 'edit') {
            let rowData = angular.copy(parentScope.rowData);
            this.bwList = rowData;
        }
    }

    submit() {
        const data = angular.copy(this.modify);

        this.commonService.save('rest/bwList', data).then((response) => {
            this.cancel();
            this.parentScope.getListData();
        });
    }

    cancel() {
        this.$mdDialog.cancel();
    }


    /*
     *  数据结构
     */
    getListData() {
        this.promise = this.commonService.query(this.baseUrl, this.search).then((data) => {
            this.desserts = {
                "count": data.length,
                "data": data,
                queueLimit: 1,
                removeAfterUpload: true
            }
        });
    }

    clearItems() {
        var uploader = this.getListData();
        uploader.clearQueue();
    }
}
