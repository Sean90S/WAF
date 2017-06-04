import regularCtrl from './conditionsjs/regularCtrl.js';

export default class generalEditController {
    constructor($mdDialog, parentScope, commonService, $location, $anchorScroll, confirmDialog) {
        this.$mdDialog = $mdDialog;
        this.parentScope = parentScope;
        this.commonService = commonService;
        this.$location = $location;
        this.$anchorScroll = $anchorScroll;
        this.confirmDialog = confirmDialog;
        this.visible = false;
        this.parameter = false;
        this.involved = false;
        this.GETparVal = false;
        this.top = false;
        this.topValue = false;
        this.topValueCookie = false;
        this.topCookieVal = false;

        this.now = 0;
        this.count = 0;

        this.formType = parentScope.formType;

        this.conditionsMapUrl = {
            'regular': function () {
                return 'regular'
            },
            'length': function () {
                return 'length'
            },
            'number': function () {
                return 'number'
            },
            'repeat': function () {
                return 'repeat'
            },
            'existence': function () {
                return 'existence'
            },
            'range': function () {
                return 'range'
            }
        };


        if (this.formType == "add") {
            this.rule = {
                ruleConditions: []
            };
        } else {   //修改时的数据

        }


        this.testing = [
            {name: '请求方法'},
            {name: '协议版本号'}
        ];

        this.ruleSet = [
            {name: '单请求规则条件集'},
            {name: '多请求规则条件集'}
        ];


    }

    $onInit() {
        const parentScope = this.parentScope;
        const title = "规则";
        this.formType = parentScope.formType;
        this.title = this.formType == 'edit' ? '修改' + title : '新增' + title;

        if (this.formType == 'edit') {
            let rowData = angular.copy(parentScope.rowData);
            this.general = rowData;
        }
    };

    submit() {
        const data = angular.copy(this.general);

        this.commonService.save('rest/general', data, data.id).then((response) => {
            this.cancel();
            this.parentScope.getListData();
        });
    };

    cancel() {
        this.$mdDialog.cancel();
    };

    deleteRuleCondition(index, condition) {
        if (condition.id && condition.editType == 'update') {
            condition.editType = 'delete'
        } else {
            this.rule.ruleConditions.splice(index, 1);
        }
    }

    /*
     * 新增或修改弹出框 
     */
    chooseCondition(type) {
        this.rule.ruleConditions.push({
            type: type
        });

        setTimeout(() => {
            const hashIndex = this.rule.ruleConditions.length - 1;
            this.$location.hash('hash' + hashIndex);
            this.$anchorScroll();
        }, 800);
    };


    hide() {
        this.$mdDialog.hide();
    };


    /*
     *  正则条件
     */
    // 正则条件 (body)

    changBody() {
        this.visible = !this.visible;
        this.parameter = false;
    }

    parameterValue() {
        this.parameter = !this.parameter;
    }

    changParameter() {
        this.parameter = false;
    }

    // 正则条件 (参数)
    changparVal() {
        this.involved = !this.involved;
        this.GETparVal = false;
    }

    parVal() {
        this.GETparVal = !this.GETparVal;
    }

    parName() {
        this.GETparVal = false;
    }

    // 正则条件 (头部)
    changTop() {
        this.top = !this.top;
        this.topValue = false;
        this.topValueCookie = false;
        this.topCookieVal = false;
    }

    changTopVal() {
        this.topValue = !this.topValue;
    }

    changCookie() {
        this.topValueCookie = !this.topValueCookie;
        this.topCookieVal = false;
    }

    cookieVal() {
        this.topCookieVal = !this.topCookieVal
    }

    topName() {
        this.topValue = false;
    }

    /*
     * 范围条件 ( 筛选 )
     */
    changMethodRequest(index) {
        this.now = index;
    }

    changRuleSet(index) {
        this.count = index;
    }
}

