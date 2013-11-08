///<reference path='../../reference.ts'/>

module service.impl {
    export class StudentServiceImpl extends service.impl.base.AbstractCrudServiceImpl<entity.Student>
        implements batatinha.contract.StudentServiceContract {

        constructor($http: ng.IHttpService) {
            super($http, "student");
        }
        
    }
}
