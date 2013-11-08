/// <reference='reference.ts' />

angular.module('javawebpoc-html', [])
	.config(($routeProvider : ng.IRouteProvider) =>{
		$routeProvider
		.when('/', {
			templateUrl: '/views/home.html',
			controller: 'HomeCtrl'
			})
		.when('/crud/student', {
			templateUrl:'/views/crud/student/studentList.html',
			controller: 'StudentListCtrl'
			})
		.otherwise({
			redirectTo: '/'
			});
		})
	.controller('StudentListCtrl', ($scope, $userService) => new controllers.crud.student.StudentListCtrl($scope, $userService))
	.controller('HomeCtrl', ($scope) => new controllers.HomeCtrl($scope))
	.service("$userService", ($timeout) => new service.mock.StudentServiceMock($timeout));

