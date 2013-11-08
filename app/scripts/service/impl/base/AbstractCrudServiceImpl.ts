///<reference path='../../../reference.ts'/>

export module service.impl.base {
    export class AbstractCrudServiceImpl<T extends entity.base.BaseEntity> implements batatinha.contract.base.CrudServiceContract<T> {

        private http: ng.IHttpService;
        private rootUrlContext: string;

        constructor($http: ng.IHttpService, urlContext: string) {
            this.http = $http;
            this.rootUrlContext = "rest/" + urlContext + "/";
        }

        save(item: T) {
            return this.http.post(this.rootUrlContext, item);
        }

        update(item: T) {
            return this.http.put(this.rootUrlContext, item);
        }

        remove(item: T) {
            return this.http.delete(this.rootUrlContext + item.id);
        }

        findById(id: number) {
            return this.http.get(this.rootUrlContext + id);
        }

        all() {
            return this.http.get(this.rootUrlContext);
        }

    }
}