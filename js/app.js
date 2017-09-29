'use strict';

angular.module('StockNotesApp', [])
  .controller('StockNotesController', ['$scope', '$http', function($scope, $http){
    console.log("controller setup");

    $scope.search = function (){
      console.log("search started");
      $http.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" 
      + $scope.search + "&interval=1min&apikey=LLJJF4CASZ2LFSJC")
      .then(function(response){ $scope.chart = response.data; });
      
  
      $http.get("http://finance.google.com/finance/info?client=ig&q=NASDAQ%3" + $scope.search)
      .then(function(response){ $scope.news = response.data; });
    }

    $scope.update = function(movie){
      $scope.search = movie.Title;
    };

    $scope.select = function(){
      this.setSelectionRange(0, this.value.length);
    }
  }]);