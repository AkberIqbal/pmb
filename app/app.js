var app = angular.module('bmpTech', ['apiService']);

app.controller('MainCtrl', function ($scope, apiCall) {
    //$scope.apiData = { "buttons": [16, 49, -27, -11], "bars": [31, 85, 43], "limit": 200 };

    apiCall.herokoCall().then(function (data) {
        $scope.apiData = data;
    })

    $scope.selectionChange = function () {
        if ($scope.selectedBar) {
            $scope.warningMessage = '';
        }
    }

    $scope.changeVal = function (btnValue) {
        if ($scope.selectedBar) {
            if ($scope.apiData.bars[$scope.selectedBar] + btnValue > $scope.apiData.limit) {
                $scope.apiData.bars[$scope.selectedBar] = $scope.apiData.limit;
            } else if ($scope.apiData.bars[$scope.selectedBar] + btnValue < 0) {
                $scope.apiData.bars[$scope.selectedBar] = 0;
            } else {
                $scope.apiData.bars[$scope.selectedBar] += btnValue;
            }
        } else { $scope.warningMessage = "please make a selection first"; }
    }
});

angular.module('bmpTech').component('bar', {
    templateUrl: 'bar.html',
    bindings: {
        val: '=',
        limit: '='
    }
});