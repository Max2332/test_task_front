app.directive("search", ['SearchService', function ($searchService) {
    return {
        templateUrl: '/js/module/search/tpl/directive/search.tpl.html',
        restrict: 'EACM',
        scope: {
            searchResult: '='
        },
        link: function (scope, element) {
            scope.helpers = [];
            scope.searchTimeoutId = null;
            scope.searchResult = scope.searchResult || '';

            scope.search = function () {
                if (scope.searchResult && scope.searchResult.length >= 3) {
                    // event bus для того чтобы не создавать нагрузку постоянными запросами
                    window.clearTimeout(scope.searchTimeoutId);
                    scope.searchTimeoutId = setTimeout(function () {
                        $searchService.search(scope.searchResult, function (helpers) {
                            scope.helpers = helpers;
                        });
                    }, 500)
                }
            };

            // останавливаем результирующий обьект
            scope.setHelper = function (helper) {
                scope.searchResult = helper.description;
            };

            scope.clearHelpers = function () {
               scope.helpers = [];
            };
        }

    }
}]);