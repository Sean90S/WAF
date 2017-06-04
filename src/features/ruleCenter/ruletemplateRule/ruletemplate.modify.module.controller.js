export default class ruletemplateModifyEditController {

    constructor($mdDialog, parentScope, commonService, confirmDialog, figuration) {
        this.$mdDialog = $mdDialog;
        this.parentScope = parentScope;
        this.commonService = commonService;
        this.confirmDialog = confirmDialog;
        this.baseUrl = figuration;
        /*值：vm
         * module
         */
        this.name = '初始值';
        this.selected = [];
        this.limitOptions = [10, 15, 20];

        this.options = {
            rowSelection: true,
            multiSelect: true,
            autoSelect: true,
            decapitate: false,
            largeEditDialog: false,
            boundaryLinks: true,
            limitSelect: true,
            pageSelect: true
        };

        this.query = {
            order: 'name',
            limit: 10,
            page: 1
        };

        this.batchOperatorMap = {
            Preservation: '保存'
        };

    }

    $onInit() {
        this.getListData()
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
        this.promise = this.commonService.query(this.baseUrl, this.search).then((data) => {
            this.desserts = {
                "count": data.length,
                "data": data
            }
        });
    }

    searchData() {

        const search = this.search;
        //删除查询条件值为空的字段
        for (let key in search) {
            if (search[key] == "") {
                delete search[key]
            }
        }
        this.getListData();
    }


    batch_handle(event) {
        const operator = this.batch_operator;
        console.log(operator)
        if (!operator) {
            return;
        }

        this.confirmDialog.showConfirm(event, '批量操作', '确定选中记录执行  [ ' + this.batchOperatorMap[operator] + ' ]？').then(()=> {
            console.log(operator);
            console.log(this.selected);
        });

    }
}