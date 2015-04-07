/*
  * Inject the service used to make ajax requests
  * Create a method on service to fetch data from the reddit api
    - For instance a GET request to 'http://www.reddit.com/r/tech.json'
*/

angular.module('chart-app')
.factory('dataService', ['$http', function($http){
  var dataUrl = 'https://api.fda.gov/food/enforcement.json?&count=report_date';

  var service = {
    fetchData: function(subreddit){
      return $http.get(dataUrl).then(function(data){

        return data.results;

      })
    }
  };
  console.log(service);
  return service;

}]);

//http://www.reddit.com/r/nba.json