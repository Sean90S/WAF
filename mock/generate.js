module.exports = function () {
    var faker = require("faker");
    var _ = require("lodash");
    return {

        /*
         *    managerCenter( 管理中心 )
         */
        //manager.domainManager (客户域名管理)
        domain: _.times(100, function (n) {
            return {
                id: n,
                dommainName: faker.name.findName(),
                domain: faker.internet.domainName(),
                engGrpName: 'POOL_WAF',
                isSecurity: '是',
                isForward: '否',
                platform: '云平台',
                backendIP: _.times(2, function () {
                    return faker.internet.ip();
                }).join(","),
                waf: "enabled",
                modifyUser: faker.name.findName(),
                munber: 80
            }
        }),

        // manager.business(引擎池管理)
        business: _.times(100, function (n) {
            return {
                id: n,
                engGrpName: faker.name.findName(),
                state: faker.address.state(),
                default: 'default',
                ip: _.times(2, function () {
                    return faker.internet.ip();
                }).join(","),
                waf: "enabled",
                notSurvive: "是",
                isSecurity: '是',
                isDefault: '否'
            }
        }),

        engine: _.times(100, function (n) {
            return {
                ip: _.times(2, function () {
                    return faker.internet.ip();
                }).join(","),
                engineName: faker.name.findName(),
                isAlice: '否',
                lastHeartBeatTime: faker.date.future()
            }
        }),

        // manager.user(用户管理)
        user: _.times(100, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
                firstName: faker.name.firstName(),
                bsAdjective: faker.company.bsAdjective(),
                companyName: faker.company.companyName(),
                catchPhraseAdjective: faker.company.catchPhraseAdjective(),
                email: faker.internet.email(),
                iphone: faker.phone.phoneNumber()
            }
        }),

        // manager.role(角色管理)
        role: _.times(100, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
                sentence: faker.lorem.sentence()
            }
        }),

        // manager.scenario(平台授权码管理)
        scenario: _.times(100, function (n) {
            return {
                id: n,
                lastName: faker.name.lastName(),
                password: faker.internet.password(),
                jobArea: faker.name.jobArea(),
                interface: '查询日志接口',
                apiclassification: '拉取配置接口',
                Authorization: 'WAF引擎'
            }
        }),

        // manager.menu(安全审计)
        menu: _.times(100, function (n) {
            return {
                id: n,
                month: faker.date.month(),
                name: faker.name.findName(),
                ip: _.times(2, function () {
                    return faker.internet.ip();
                }).join(","),
                accountName: faker.finance.accountName(),
                bsAdjective: faker.company.bsAdjective(),
                OperationMo: 'xss',
                jobArea: faker.name.jobArea(),
                OperationAction: 'Operation action',
                state: faker.address.state(),
                jobArea: faker.name.jobArea()
            }
        }),


        /*
         *      ruleCenter( 规则中心 )
         */

        // rule.bwList (IP黑白明单)
        bwList: _.times(100, function (n) {
            return {
                id: n,
                expireTime: faker.date.past(),
                ipMask: _.times(2, function () {
                    return faker.internet.ip();
                }).join(","),
                isValid: faker.internet.protocol(),
                description: faker.lorem.sentence(),
                effectiveTime: faker.date.month()
            }
        }),

        ipBWType: _.times(100, function (n) {
            return {
                id: n,
                enpireTime: faker.date.past(),
                isMask: _.times(2, function () {
                    return faker.internet.ip();
                }).join(","),
            }
        }),

        FileImport: _.times(100, function (n) {
            return {
                id: n,
                enpireTime: faker.date.past(),
                isMask: _.times(2, function () {
                    return faker.internet.ip();
                }).join(","),
                sentence: faker.lorem.sentence()
            }
        }),

        // rule.generalBase(总规则库)
        general: _.times(100, function (n) {
            return {
                id: n,
                ruleName: faker.name.findName(),
                attackType: 'attack',
                maxProtectAct: 'intercept',
                description: faker.lorem.sentence(),
                suggestConf: 'disposition',
                score: '100'
            }
        }),

        attackType: _.times(100, function (n) {
            return {
                id: n,
                attactName: 'attack',
                attactPrefix: faker.company.suffixes()
            }
        }),

        //rule.ruleTemplate (规则集配置)
        ruleTemplate: _.times(100, function (n) {
            return {
                id: n,
                ruleSetName: faker.name.lastName(),
                isDefaule: '是',
                locale: faker.random.locale(),
                relateDomains: faker.lorem.sentence()
            }
        }),
        // rule.ruleT (新增规则集)
        ruleT: _.times(100, function (n) {
            return {
                id: n,
                ruleName: faker.name.lastName(),
                name: faker.name.findName(),
                attackType: 'attack',
                descriType: faker.lorem.sentence(),
                maxProtectAct: faker.address.state(),
                suggestCon: 'open'
            }
        }),

        //ruleonfiguration(添加规则配置)
        ruleonfiguration: _.times(100, function (n) {
            return {
                id: n,
                ruleName: faker.name.lastName(),
                name: faker.name.findName(),
                attackType: 'attack',
                description: faker.lorem.sentence(),
                maxProtectAct: faker.address.state(),
                suggestConf: 'open'
            }
        }),

        // rule.modify(编辑规则集)
        modify: _.times(100, function (n) {
            return {
                id: n,
                ruleName: faker.name.lastName(),
                name: faker.name.findName(),
                attackType: 'attack',
                description: faker.lorem.sentence(),
                maxProtectAct: faker.address.state(),
                suggestConf: 'open'
            }
        }),

        /**
         *   eventCenter( 事件中心 )
         */

        // event.blackandwhite( IP黑白名单 )
        event: _.times(100, function (n) {
            return {
                id: n,
                past: faker.date.past(),
                ip: _.times(2, function () {
                    return faker.internet.ip();
                }).join(","),
                protocol: faker.internet.protocol(),
                sentence: faker.lorem.sentence()
            }
        }),
        // event.urlwhite( URL白名单 )
        urlwhite: _.times(100, function (n) {
            return {
                id: n,
                mimeType: faker.system.mimeType(),
                value: faker.internet.url(),
                sentence: faker.lorem.sentence()
            }
        }),
        // event.custom( 自定义规则 )
        custom: _.times(100, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
                attack: 'attack',
                intercept: 'intercept',
                sentence: faker.lorem.sentence(),
                Proposed: 'open'
            }
        }),

        /*
         *   JournalConter( 日志监控 )
         *
         */
        management: _.times(100, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
                weekday: faker.date.weekday(),
                ip: _.times(2, function () {
                    return faker.internet.ip();
                }).join(","),
                fileName: faker.system.fileName(),
                url: faker.internet.url(),
                attack: 'attack',
                Response: 'Response'
            }
        })
    }
};
