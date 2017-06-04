
routes.$inject = ['$stateProvider','$urlRouterProvider'];

export default function routes($stateProvider,$urlRouterProvider) {

	$urlRouterProvider.when("/Journal", '/Journal/latest');
	
	$stateProvider
        .state('Journal', {
            url: '/Journal',
            template: require('./sub-Journal.html'),
        })
        .state('Journal.latest', {
        	url: '/latest',
        	views: {
        		'mainContent@Journal': {
        			template: require('./latest/latestList.html'),
        			controller: 'LatestController',
        			controllerAs: 'latest'
        		}
        	}
        })
        .state('Journal.management', {
        	url: '/management',
        	views: {
        		'mainContent@Journal': {
        			template: require('./management/managementList.html'),
        			controller: 'managementController',
        			controllerAs: 'management'
        		}
        	}
        })
        
}



