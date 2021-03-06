
loginApp.controller('loginCtrl', ['$scope', '$http', ($scope, $http) => {
    $scope.login = () => {
        $http.post('/api/login', { email: $scope.email , password: $scope.password }).then(res => {
                    // reset old errors
            $scope.errorMessage = undefined;
            $scope.user = res.data;
        }, err => {
            $scope.errorMessage = err.data.message;
        });
    }

    // Function for changing the password
    $scope.changePass = () => {
        // reset old errors
        $scope.errorMessage = undefined;
        $http.post('/api/change-pass', { password: $scope.newPassword }).then(res => {
            $scope.user = res.data;
            $scope.newPasswordMode = false;
            $scope.passwordChanged = true;
        }, err => {
            $scope.errorMessage = err.data.message;
        });
    }
}]);
