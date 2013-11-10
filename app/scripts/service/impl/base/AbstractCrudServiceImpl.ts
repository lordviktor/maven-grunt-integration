///<reference path='../../../reference.ts'/>

module service.impl.base {
    export class AbstractCrudServiceImpl<T extends entity.base.BaseEntity> implements batatinha.contract.base.CrudServiceContract<T> {

        private http: ng.IHttpService;
        private rootUrlContext: string;

        constructor($http: ng.IHttpService, urlContext: string) {
            this.http = $http;
            this.rootUrlContext = "rest/" + urlContext + "/";
        }

        save(item: T): ng.IPromise<any> {
            return this.http.post(this.rootUrlContext, item);
        }

        update(item: T): ng.IPromise<any> {
            return this.http.put(this.rootUrlContext, item);
        }

        remove(item: T): ng.IPromise<any> {
            return this.http.delete(this.rootUrlContext + item.id);
        }

        findById(id: number): ng.IPromise<T> {
            return this.http.get(this.rootUrlContext + id)
                .then(
                    (x) => {
                        if(x) return x.data
                    }
                );
        }

        all(): ng.IPromise<Array<T>> {
            return this.http.get(this.rootUrlContext)
                .then(
                    (x) => {
                        if(x) return x.data
                    }
                );
        }
        
    }
}