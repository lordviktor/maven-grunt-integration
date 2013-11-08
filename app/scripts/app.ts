/// <reference='reference.ts' />

angular.module('javawebpoc-html', [])
.config(($routeProvider : ng.IRouteProvider) =>{
	$routeProvider
	.when('/', {
		templateUrl: '/views/home.html',
		controller: 'HomeCtrl'
		})
	.when('/views/crud/student', {
		templateUrl:'/views/crud/student/studentList.html',
		controller: 'StudentListCtrl'
		})
	.otherwise({
		redirectTo: '/'
		});
	});
