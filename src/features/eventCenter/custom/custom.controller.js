export  default class customController {
    constructor(commonService, $timeout, $q, $log) {
        this.commonService = commonService;
        this.$timeout = $timeout;
        this.$q = $q;
        this.$log = $log;
        this.baseUrl = 'rest/custom';

    }

    getListData() {

        this.promise = this.commonService.query(this.baseUrl, this.search).then((data) => {
            this.desserts = {
                "count": data.length,
                "data": data
            }
        });
    }

    searchTextChange(text) {
        this.$log.info('Text changed to' + text);
    }


}
