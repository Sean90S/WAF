import attackTypeEditController from './attackType.edit.controller';

export  default class attackTypeController {
    constructor(commonService, confirmDialog, $mdDialog) {
        this.commonService = commonService;
        this.confirmDialog = confirmDialog;
        this.$mdDialog = $mdDialog;
        this.baseUrl = 'rest/attackType';

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
            'delete': '删除',
            'enabledWaf': '启用WAF',
            'disabledWaf': '禁用WAF',
            'enabled': '启用',
            'disabled': '禁用',
        }

    }

    $onInit() {
        this.getListData();

    }

    refresh() {
        this.getListData();
    }

    /**
     * 批量动作处理
     * @param event
     */
    batch_handle(event) {
        alert(222)
        const operator = this.batch_operator;
        if (!operator) {
            return;
        }
        this.confirmDialog.showConfirm(event, '批量操作', '确定选中记录执行  [ ' + this.batchOperatorMap[operator] + ' ]？').then(() => {
            console.log(operator)
            console.log(this.selected);
        });

    }

    getListData() {

        var queryRule = 'api/rule/queryRule';

        this.promise = this.commonService.query(queryRule, this.search).then((data) => {
            this.desserts = {
                "count": data.total,
                "data": data.rows
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

    /**
     * 新增或修改弹出框
     * @param ev
     * @param rowData
     */
    showDialog(ev, rowData) {

        this.formType = 'add';

        if (rowData) {
            this.formType = 'edit';
            this.rowData = rowData;
        }

        const $scope = this;

        this.$mdDialog.show({
            controller: attackTypeEditController,
            controllerAs: 'vm',
            template: require('./attackType.edit.html'),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false,
            locals: {
                parentScope: $scope
            }
        })
    };

    deleteRecord(event, id) {
        this.confirmDialog.showConfirm(event, '删除记录', '确定执行删除操作吗？').then(() => {
            this.commonService.delete(this.baseUrl, id).then((response) => {
                console.log(response)
                this.getListData();
            })
        })
    }

}

