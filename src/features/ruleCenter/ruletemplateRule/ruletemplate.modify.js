import ruletemplateModifyEditController from './ruletemplate.modify.module.controller';

export  default class RuletemplateModifyController {
    constructor(commonService, confirmDialog, $mdDialog) {
        this.commonService = commonService;
        this.confirmDialog = confirmDialog;
        this.$mdDialog = $mdDialog;
        this.baseUrl = 'rest/modify';

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
            'monitoring': '统一监控动作',
            'AgreehHighest': '同意最高防护动作',
            'delete': '删除配置',
            'Preservation': '保存'
        }

        this.pages = {
            first: true,
            second: false
        }
        
    }

   disabled(witchpage) {
    
        for(let i in this.pages){
            this.pages[i] = false;
        }

        this.pages[witchpage] = true;
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
        const operator = this.batch_operator;
        if (!operator) {
            return;
        }
        this.confirmDialog.showConfirm(event, '批量操作', '确定选中记录执行  [ ' + this.batchOperatorMap[operator] + ' ]？').then(()=> {
            console.log(operator)
        })

    }

   getListData() {
        this.promise = this.commonService.query(this.baseUrl,this.search).then((data) =>{
            this.desserts = {
                "count": data.length,
                "data": data
            }
             
        });
    }

    searchData(){

        const search = this.search;

        //删除查询条件值为空的字段
        for(let key in search){
            if(search[key]==""){
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
        this.baseUrl = 'rest/ruleonfiguration';
        //console.log(ruleonfiguration)
        this.$mdDialog.show({
            controller: ruletemplateModifyEditController,
            controllerAs: 'vm',
            template: require('./rulemplate.modify.module.html'),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false,
            locals: {
                parentScope: $scope,
                figuration: this.baseUrl
            }
        })
    };

    deleteRecord(event,id){
        this.confirmDialog.showConfirm(event, '删除记录', '确定执行删除操作吗？').then(()=> {
            this.commonService.delete(this.baseUrl,id).then((response)=>{
                console.log(response)
                this.getListData();
            })
        })
    }
}
