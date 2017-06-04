

export default class RuletemplateEditCopyController {
    constructor($mdDialog, parentScope,commonService) {
        this.$mdDialog = $mdDialog;
        this.parentScope = parentScope;
        this.commonService =commonService;
    }

    $onInit() {
        const parentScope = this.parentScope;
        const title = "规则集";
        this.formType = parentScope.formType;
        this.title = this.formType == 'edit' ? '复制'+title : '新增'+title;

        //初始化radio、checkbox值
        this.ruleTemplate ={
            protocol:'http',
            waf:'disabled'
        }


        if(this.formType =='edit'){
            let rowData = angular.copy(parentScope.rowData);
            this.ruleTemplate = rowData;
            //this.ruleTemplate.ip = rowData.ip.split(",").join('\n');
        }

    }


    submit(){
        const data = angular.copy(this.ruleTemplate);
        //data.ip =data.ip.replace(/\n/g,',');
        this.commonService.save('rest/ruleTemplate',data,data.id).then((response) =>{
            this.cancel();
            this.parentScope.getListData();
        });
    }

    cancel() {
        this.$mdDialog.cancel();
    }


}