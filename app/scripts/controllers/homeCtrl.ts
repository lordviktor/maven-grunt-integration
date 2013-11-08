///<reference path='../reference.ts'/>
module controllers{

	export interface HomeViewModel extends ng.IScope{
		greetings:String;
	}

	export class HomeCtrl{
		constructor($scope:HomeViewModel){
			$scope.greetings = "Hello World!!";
		}
	}
}