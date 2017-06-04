export default class ScenarioEditController {

    constructor($mdDialog, parentScope,commonService) {
        this.$mdDialog = $mdDialog;
        this.parentScope = parentScope;
        this.commonService = commonService;

    }

    $onInit() {
        const parentScope = this.parentScope;
        const title = "";
        this.formType = parentScope.formType;
        this.title = this.formType == 'edit' ? '修改'+title : '新增'+title;

        //初始化radio、checkbox值
        this.scenario ={
            protocol:'http',
            waf:'disabled'
        }


        if(this.formType =='edit'){
            let rowData = angular.copy(parentScope.rowData);
            this.scenario = rowData;  
            this.scenario.bsAdjective = rowData.bsAdjective;  
        }

    }


    submit(){
        const data = angular.copy(this.scenario);
        //data.ip = data.ip.replace(/\n/g,',');
        this.commonService.save('rest/scenario',data,data.id).then((response) =>{
            this.cancel();
            this.parentScope.getListData();
        });
    }

    cancel() {
        this.$mdDialog.cancel();
    }


}
