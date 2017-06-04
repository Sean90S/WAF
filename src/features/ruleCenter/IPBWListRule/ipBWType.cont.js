export default class ipBWTypeContController {

    constructor($mdDialog, parentScope, commonService, confirmDialog, ipBWType) {
        this.$mdDialog = $mdDialog;
        this.parentScope = parentScope;  
        this.commonService = commonService;
        this.confirmDialog = confirmDialog;
        this.baseUrl = 'rest/bwList';
        this.ipShow = this.parentScope.ipShow;
        this.expireTime = this.parentScope.expireTime;
        this.block = false;
        this.search = {};

    }

    $onInit() {
        this.getListData();
        const parentScope = this.parentScope;
        this.listType = parentScope.listType.listType;
        this.title = this.listType == 'BLACK' ? '【黑】':'【白】';
        this.BLACK = this.listType == 'BLACK' ? true : false;
        this.WHITE = this.listType == 'WHITE' ? true : false;

    }

    submit() {
        const data = angular.copy(this.modify);
        this.commonService.save('rest/modify', data, data.id).then((response) => {
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
        this.search.ipMask = this.ipShow;
        // this.search.expireTime = this.expireTime;
        this.promise = this.commonService.query(this.baseUrl, this.search).then((data) => {
            this.desserts = {
                "count": data.length,
                "data": data
            }
        });
    }

}
