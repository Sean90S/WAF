import BwListEditController from './bwList.edit.controller';
import BwListFileImportController from './BwList.FileImport.Controller';
import BwListActivationController from './activation';

export  default class bwListController {

    constructor(commonService, confirmDialog, $mdDialog, $filter, $http) {
        this.commonService = commonService;
        this.confirmDialog = confirmDialog;
        this.$mdDialog = $mdDialog;
        this.$filter = $filter;
        this.$http = $http;

        this.name = '初始值';
        this.selected = [];
        this.rows = [5, 10, 15];
        //this.IP = 'api/ipmanage/queryGlobalIp';
        this.baseUrl = 'rest/bwList';
        this.search = {};
        this.date = new Date().valueOf();
        this.none = false;

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
            limit: 5,
            page: 1
        };

        this.batchOperatorMap = {
            'EmptyexpiredIP': '清空过期IP',
            'delete': '删除',
        }

    }

    $onInit() {

        this.search.listType = 'BLACK';
        this.searchData();
    }

    refresh() {
        this.getListData();
    }

    /**
     * 切换黑名单
     * @param BLACK
     */
    BLACK() {
        this.search.listType = 'BLACK';
        this.searchData();
    }


    /**
     * 切换白名单
     * @param WHITE
     */
    WHITE() {
        this.search.listType = 'WHITE';
        this.searchData();
    }


    /**
     * 批量动作处理
     * @param event
     * @param id
     */
    batch_handle(event, id) {
        // debugger
        var id = this.selected;
        const delGlobalIp = 'api/ipmanage/delGlobalIp';

        angular.forEach(this.selected, function (data) {
            id = data.uuid;
        });

        const operator = this.batch_operator;
        if (!operator) {
            return;
        }
        this.confirmDialog.showConfirm(event, '批量操作', '确定选中记录执行  【 ' + this.batchOperatorMap[operator] + ' 】？').then(() => {
            console.log(operator);
            if (operator == 'delete') {
                this.commonService.save(delGlobalIp, {
                    "uuidList": [id]
                }).then((response) => {
                    console.log(response);
                    this.getListData();
                });
            } else if (operator == 'EmptyexpiredIP') {
                var delExpiredGlobalIp = 'api/ipmanage/delExpiredGlobalIp';
                this.commonService.save(delExpiredGlobalIp, {
                    "uuidList": listType
                }).then((response) => {
                    console.log(response);
                    this.getListData();
                });
            }


        })

    }

    getListData() {

        this.promise = this.commonService.query(this.baseUrl, this.search).then((data) => {
            this.desserts = {
                "count": data.length,
                "data": data
            };
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
     * @param event
     * @param rowData.search
     */

    showDialog(ev, rowData) {

        this.formType = 'add';

        if (rowData) {
            this.formType = 'edit';
            this.rowData = rowData;
        }

        const $scope = this;

        this.$mdDialog.show({
            controller: BwListEditController,
            controllerAs: 'vm',
            template: require('./bwList.edit.tmpl.html'),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false,
            locals: {
                parentScope: $scope
            }
        })
    };

    /**
     * 导入弹出框
     * @param ev
     * @param rowData
     */

    showFileImport(ev, rowData) {

        this.formType = 'add';

        if (rowData) {
            this.formType = 'edit';
            this.rowData = rowData;
        }

        const $scope = this;
        this.baseUrl = 'rest/FileImport';
        this.$mdDialog.show({
            controller: BwListFileImportController,
            controllerAs: 'vm',
            template: require('./bwList.FileImport.html'),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false,
            locals: {
                parentScope: $scope,
                FileImport: this.baseUrl
            }
        })
    };

    /**
     * 激活
     * @param ev
     * @param rowData
     */
    showActivation(ev, rowData) {

        this.formType = 'add';

        if (rowData) {
            this.formType = 'edit';
            this.rowData = rowData;
        }

        const $scope = this;

        this.$mdDialog.show({
            controller: BwListActivationController,
            controllerAs: 'vm',
            template: require('./activation.html'),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false,
            locals: {
                parentScope: $scope
            }
        })
    };

    /**
     * 失效
     * @param event
     * @param id
     */
    invalidGlobalIp(event, id) {

        const invalidGlobalIp = 'api/ipmanage/invalidGlobalIp';

        this.confirmDialog.showConfirm(event, '失效记录', '确定执行失效操作吗？').then(() => {
            this.commonService.save(invalidGlobalIp, id).then((response) => {
                console.log(response);
                this.getListData();
            });
        })
    }


    deleteRecord(event, id) {

        const delGlobalIp = 'api/ipmanage/delGlobalIp';

        this.confirmDialog.showConfirm(event, '删除记录', '确定执行删除操作吗？').then(() => {
            this.commonService.save(delGlobalIp, {
                "uuidList": [id]
            }).then((response) => {
                console.log(response);
                this.getListData();
            })
        })
    }

}
