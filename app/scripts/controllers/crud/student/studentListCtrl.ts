'use strict';
///<reference path='../../../reference.ts'/>
module controllers.crud.student {

    interface StudentListViewModel{
        state:String;
        students: entity.Student[];
    }

	export class StudentListCtrl {
		constructor($scope:ng.IScope){

		}
	}
}

angular.module('javawebpoc-html')
	.controller('StudentListCtrl', ($scope) => new controllers.crud.student.StudentListCtrl($scope));
