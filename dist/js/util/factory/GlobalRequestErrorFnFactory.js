// если не передана функция обработчик то срабатывает дефолтная оьбрабока ошибки запроса
app.factory('GlobalRequestErrorFnFactory', ['$q', function ($q) {
    return {
        
        responseError: function (rejection) {
            
            if (rejection.status < 200) {
                alert("неизвестная ошибка, статус запроса: " + rejection.status);
            }
            
            if (rejection.status > 399) {
                alert(rejection.data.message);
            }
            
            return $q.reject(rejection);
        }
    };
}]);

