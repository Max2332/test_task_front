app.service('SearchService', [
    '$urlConst', '$http',
    function ($urlConst, $http) {
        return {
            // поиск подсказок по переданному фрагменту
            search: function (fragment, callback) {
                $http({
                    method: 'GET',
                    params: {
                        fragment: fragment
                    },
                    url: $urlConst.api + "/search"
                }).then(function (response) {
                    callback(response.data);
                });
            },
        }
    }]
);

