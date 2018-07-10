// ленивая загрузка файлов указанных в стейте
app.provider('$componentLoader', function $componentLoaderProvider() {
        return {
            
            /** нет необходимоси вохваращть что то. так сервис используется только в config*/
            $get: function () {
                return "componentLoaderProvider";
            },
            
            fontAwesome: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: "ngMessages",
                    files: [
                        '/node_modules/font-awesome/css/font-awesome.min.css'
                    ]
                });
            }],
            cssAnimate: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: [
                        '/node_modules/animate.css/animate.min.css'
                    ]
                });
            }]
        }
    }
);