import ipBWTypeContController from './ipBWType.cont';

export default class BwListEditController {
    constructor($mdDialog, parentScope, commonService) {
        this.$mdDialog = $mdDialog;
        this.parentScope = parentScope;
        this.commonService = commonService;
        this.desserts = angular.copy(this.parentScope.desserts);
        this.data = this.desserts.data;
        this.AddData = [];
    }

    $onInit() {
        const parentScope = this.parentScope;
        const title = "域名";
        this.formType = parentScope.formType;
        this.title = this.formType == 'edit' ? '修改' + title : '新增' + title;


        if (this.formType == 'edit') {
            let rowData = angular.copy(parentScope.rowData);
            this.bwList = rowData;
        }
    }

    submit() {

        const data = angular.copy(this.bwList);

        for (let i in this.data) {
            this.ip = this.data[i].ipMask;

            if (data.ipMask == this.ip) {
                this.ipShow = data.ipMask;
                this.expireTime = data.expireTime;
                this.listType = this.parentScope.search;
                this.showDialog();
                alert('全局IP黑（白）名单存在冲突！');
                return;
            }
        }

        //const addGlobalIp = 'api/ipmanage/addGlobalIp';
        this.commonService.saveForm('rest/bwList', data).then((response) => {
            this.cancel();
            this.parentScope.getListData();
        });
    }

    cancel() {
        this.$mdDialog.cancel();
    }

    showDialog(ev, rowData) {

        this.formType = 'add';

        if (rowData) {
            this.formType = 'edit';
            this.rowData = rowData;
        }

        const $scope = this;
        this.baseUrl = 'rest/ipBWType';
        this.$mdDialog.show({
            controller: ipBWTypeContController,
            controllerAs: 'vm',
            template: require('./ipBWType.html'),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false,
            locals: {
                parentScope: $scope,
                ipBWType: this.baseUrl
            }
        })
    };
}