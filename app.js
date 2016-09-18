(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController)

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope){
	$scope.dishes = "";
	$scope.lunchEvaluation = "";
	
	function removeEmptyItems(arr) {
      for(var i = arr.length; i--;) {
          if(arr[i].trim() === "") {
              arr.splice(i, 1);
			}
		}
	}
	
	function countDishes(){
		if ($scope.dishes == ""){
			return 0;
		}
		var numberOfDishes = $scope.dishes.split(",");
		removeEmptyItems(numberOfDishes)
		return numberOfDishes.length;
	}
	
	$scope.evaluateLunch = function(){
		
		var dishes = countDishes();
		if (dishes <4 && dishes >0){
			$scope.lunchEvaluation = "Enjoy!";
		}
		else if (dishes >3){
			$scope.lunchEvaluation = "Too Much";
		}
		else{
			$scope.lunchEvaluation = "Please enter data first";
		}
		
	}
	
}


})();
