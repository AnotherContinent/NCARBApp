angular.module('myApp', []).controller('MainCtrl', function ($scope, $http, getDataService) {

    $scope.findValue = function(enteredValue) {
        alert("Searching for = " + enteredValue);

        $scope.MyData = [];

        getDataService.getData(function(ncarbdata) {

            $scope.MyData = ncarbdata.data;

        });
    }

});

angular.module('myApp', []).factory('getDataService', function($http) {
    return {
        getData: function(done) {
            $http.get('https://my.ncarb.org/Public/api/certification/search?pageSize=20&page=0&lastName=&firstName=&city=&stateCode=&countryCode=&orderBy=name')
                .success(function(data) {
                    done(data);
                })
                .error(function(error) {
                    alert('An error occured');
                });
        }
    }
});

$scope.results = [];
$scope.findValue = function(enteredValue) {
    angular.forEach($scope.myData.data, function(value, key) {
        if (value === enteredValue) {
            $scope.results.push({id: key, firstName: value[1].firstName, lastName: value[2].lastName,
                city: value[3].city, state: value[4].stateCode});
        }
    });
};