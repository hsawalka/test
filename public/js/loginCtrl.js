
loginApp.controller('loginCtrl', ['$scope', '$http', ($scope, $http) => {
    $scope.login= () => {
        $http.post('/api/login', { email: $scope.email , password: $scope.password}).then(res => {
            $scope.user = res.data;
        }, err => {
            $scope.errorMessage = err.data.message;
        });
    }
}]);
