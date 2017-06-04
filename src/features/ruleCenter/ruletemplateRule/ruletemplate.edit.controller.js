export  default class RuletemplateEditController {

    constructor(commonService, confirmDialog, $mdDialog) {
        this.commonService = commonService; 
        this.confirmDialog = confirmDialog;  
        this.$mdDialog = $mdDialog;
        this.baseUrl = 'rest/ruleT';

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
            'Determine': '确定',
            'cancel': '取消'
            
        }


       
    }

    $onInit() {
        this.getListData();
    }

    
    refresh() {
        this.getListData();
    }

    cancel() {
        this.$mdDialog.cancel();
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

    onInit(ev,rowData) {
        const title = '规则集'
        this.formType = 'add';

        if (rowData) {
            this.formType = 'edit';
            this.rowData = rowData;
        }

        this.title = this.formType == 'edit' ? '新增'+title : '修改'+title;
    }
    
    /**
     * 新增或修改弹出框
     * @param ev
     * @param rowData
     */
    

    deleteRecord(event,id){
        this.confirmDialog.showConfirm(event, '删除记录', '确定执行删除操作吗？').then(()=> {
            this.commonService.delete(this.baseUrl,id).then((response)=>{
                console.log(response)
                this.getListData();
            })
        })
    }

}
