routing.$inject = ['$urlRouterProvider', '$locationProvider','$stateProvider', '$mdThemingProvider'];

export default function routing($urlRouterProvider, $locationProvider,$stateProvider, $mdThemingProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/manager');

    // $mdThemingProvider.definePalette('amazingPaletteName', {
    //     '50': 'ffebee',
    //     '100': 'ffcdd2',
    //     '200': 'ef9a9a',
    //     '300': 'ffffff',
    //     '400': 'ef5350',
    //     '500': '004994',
    //     '600': 'e53935',
    //     '700': '1976D2',
    //     '800': 'c62828',
    //     '900': 'b71c1c',
    //     'A100': 'ff8a80',
    //     'A200': 'ff5252',
    //     'A400': 'ff1744',
    //     'A700': 'd50000',
    //     'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
    //                                         // on this palette should be dark or light
    //
    //     'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
    //         '200', '300', '400', 'A100'],
    //     'contrastLightColors': undefined    // could also specify this if default was 'dark'
    // });
    //
    // $mdThemingProvider.theme('default')
    //     .primaryPalette('amazingPaletteName')
    //     .accentPalette('amazingPaletteName', {
    //         'default': '300'
    //     });

    var neonRedMap = $mdThemingProvider.extendPalette('indigo', {
        '500': '#004994',
    });

    $mdThemingProvider.definePalette('neonRed', neonRedMap);

    $mdThemingProvider.theme('default')
        .primaryPalette('neonRed');



}