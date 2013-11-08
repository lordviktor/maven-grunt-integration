'use strict';
///<reference path='../../../reference.ts'/>
module controllers.crud.student {

    export interface StudentListViewModel{
        state:String;
        students: entity.Student[];
    }

	export class StudentListCtrl {

		constructor($scope: StudentListViewModel, $userService: batatinha.contract.StudentServiceContract){
			
			$userService.all().then((data) => $scope.students = data);

		}
	}
}