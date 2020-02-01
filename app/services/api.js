var app = angular.module('apiService', []);

app.factory("apiCall", function ($http) {
    herokoURL = "http://pb-api.herokuapp.com/bars";

    return {
        herokoCall: function () {
            return $http({
                method: "GET",
                url: herokoURL
            }).then(function mySuccess(response) {
                return response.data;
            }, function myError(response) {
                return response.statusText;
            });
        }
    }
});