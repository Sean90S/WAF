
routes.$inject = ['$stateProvider','$urlRouterProvider'];

export default function routes($stateProvider,$urlRouterProvider) {

	$urlRouterProvider.when("/event", '/event/blackandwhite');
	
	$stateProvider
        .state('event', {
            url: '/event',
            template: require('./sub-event.html'),
        })
        .state('event.blackandwhite', {
            url: '/blackandwhite',
            views: {
                'mainContent@event': {
                    template: require('./blackandwhite/blackandwhiteList.html'),
                    controller: 'BlackandwhiteController',
                    controllerAs: 'event'
                }
            }
        })
        .state('event.urlwhite', {
            url: '/urlwhite',
            views: {
                'mainContent@event': {
                    template: require('./urlwhite/urlwhiteList.html'),
                    controller: 'UrlwhiteController',
                    controllerAs: 'urlwhite'
                }
            }
        })
        .state('event.custom', {
            url: '/custom',
            views: {
                'mainContent@event': {
                    template: require('./custom/customList.html'),
                    controller: 'customController',
                    controllerAs: 'custom'
                }
            }
        })
}



