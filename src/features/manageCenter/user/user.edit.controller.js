export default class UserEditController {

    constructor($mdDialog, parentScope,commonService) {
        this.$mdDialog = $mdDialog;
        this.parentScope = parentScope;
        this.commonService =commonService;

    }

    $onInit() {
        const parentScope = this.parentScope;
        const title = "管理员";
        this.formType = parentScope.formType;
        this.title = this.formType == 'edit' ? '修改'+title : '新增'+title;

        //初始化radio、checkbox值
        this.user ={
            protocol:'http',
            waf:'disabled'
        }


        if(this.formType =='edit'){
            let rowData = angular.copy(parentScope.rowData);
            this.user = rowData;  
            this.user.bsAdjective = rowData.bsAdjective;  
        }

    }


    submit(){
        const data = angular.copy(this.user);
        //data.ip = data.ip.replace(/\n/g,',');
        this.commonService.save('rest/user',data,data.id).then((response) =>{
            this.cancel();
            this.parentScope.getListData();
        });
    }

    cancel() {
        this.$mdDialog.cancel();
    }


}