///<reference path='../../reference.ts'/>

module service.mock {
    export class StudentServiceMock extends service.mock.base.AbstractCrudServiceMock<entity.Student>
        implements batatinha.contract.StudentServiceContract {

        constructor($timeout: ng.ITimeoutService) {
            super($timeout);

            var asd: entity.vo.Telephone = { id: 1, ddd: 23, ddi: 55, telephoneNumber: 88311203 };
            this.repo.push({ id: 1, name: "Victor Jose", telephones: [asd] });
        }
        
    }
}