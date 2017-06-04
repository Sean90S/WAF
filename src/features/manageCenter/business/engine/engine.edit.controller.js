export default class engineEditController {

    constructor($mdDialog, parentScope,commonService) {
        this.$mdDialog = $mdDialog;
        this.parentScope = parentScope;
        this.commonService =commonService;

    }

    $onInit() {
        const parentScope = this.parentScope;
        const title = "引擎";
        this.formType = parentScope.formType;
        this.title = this.formType == 'edit' ? '修改'+title : '新增'+title;

        //初始化radio、checkbox值
        this.engine ={
            protocol:'http',
            waf:'disabled'
        }

        if(this.formType =='edit'){
            let rowData = angular.copy(parentScope.rowData);
            this.engine = rowData;
            //this.business.default = rowData.default;
            this.engine.ip = rowData.ip.split(",").join('\n');
        }

    }


    submit(){
        const data = angular.copy(this.engine);
        //data.ip =data.ip.replace(/\n/g,',');
        this.commonService.save('rest/engine',data,data.id).then((response) =>{
            this.cancel();
            this.parentScope.getListData();
        });
    }

    cancel() {
        this.$mdDialog.cancel();
    }


}
