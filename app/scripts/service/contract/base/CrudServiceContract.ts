///<reference path='../../../reference.ts'/>

module batatinha.contract.base {
    export interface CrudServiceContract<T extends entity.base.BaseEntity> {

        save(item: T) : ng.IPromise<any>;

        update(item: T) : ng.IPromise<any>;

        remove(item: T) : ng.IPromise<any>;

        findById(item: number) : ng.IPromise<T>;

        all() : ng.IPromise<Array<T>>;
        
    }
}
