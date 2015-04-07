/*
  * Inject the service you built that handles ajax requests
  * Use this service to fetch data from Reddit (bind to a property on $scope)
*/

angular.module('chart-app')

.controller('chartController', ['$scope', 'dataService', function($scope, dataService){
  dataService.fetchData('nba').then(function(data){
    // console.log(data)
    $scope.dataService = data;
    // console.log($scope.feedRecords);
  })

}])
