var app = angular.module('app', [
    'ui.router',
    'oc.lazyLoad'
]).config([
    
    '$stateProvider', '$urlRouterProvider', '$componentLoaderProvider', '$httpProvider', '$qProvider',
    function ($stateProvider, $urlRouterProvider, $componentLoaderProvider, $httpProvider, $qProvider) {
        
        // дефолтный урл если роут не найден
        $urlRouterProvider.otherwise('/');
        
        $qProvider.errorOnUnhandledRejections(false);
        
        // устанавливаем дефолтный обработчик ошибок запросов
        $httpProvider.interceptors.push('GlobalRequestErrorFnFactory');
        
        
        $stateProvider.state('search', {
            url: '/',
            templateUrl: '/js/module/search/tpl/index.tpl.html',
            controller: 'IndexController',
            resolve: {
                fontAwesome: $componentLoaderProvider.fontAwesome,
                cssAnimate: $componentLoaderProvider.cssAnimate
            }
        });
        
    }

]).run([
    '$rootScope', '$location',
    function ($rootScope, $location) {
    }
]);
