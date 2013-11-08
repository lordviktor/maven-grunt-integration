///<reference path='../../../reference.ts'/>

module service.mock.base {
    export class AbstractCrudServiceMock<T extends entity.base.BaseEntity> implements batatinha.contract.base.CrudServiceContract<T> {

        public repo: Array<T> = new Array<T>();

        public timeoutService: ng.ITimeoutService;

        constructor($timeout: ng.ITimeoutService) {
            this.timeoutService = $timeout;
        }

        save(item: T): ng.IPromise<any> {
            return this.timeoutService(() => this.repo.push(item), 500);
        }

        update(item: T): ng.IPromise<any> {
            return this.timeoutService(() => console.log("Tentei atualizar"), 500);
        }

        remove(item: T): ng.IPromise<any> {
            return this.timeoutService(() => console.log("Tentei remover"), 500);
        }

        findById(id: number): ng.IPromise<T> {
            var target: T;
            this.repo.forEach((x) => { if (x.id == id) target = x });
            return this.timeoutService(() => target, 0);
        }

        all(): ng.IPromise<Array<T>> {
            return this.timeoutService(() => this.repo, 3000);
        }
        
    }
}

