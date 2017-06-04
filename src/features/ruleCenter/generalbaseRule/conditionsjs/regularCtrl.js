export default class regularCtrl {

    constructor(commonService) {
        this.commonService = commonService;
    }

    $onInit() {
        this.init();
    }

    init(condition) {
        this.commonService.getConditionsMap().then(function (data) {

            console.log(data);

            if (this.formType == 'add' || !condition.privateSettings) {
                condition.privateSettings = {
                    operator: this.operatorsGroup[0]
                }
            }
        });
    }
}
