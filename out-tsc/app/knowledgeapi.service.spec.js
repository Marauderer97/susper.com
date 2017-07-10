/* tslint:disable:no-unused-variable */
import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions, RequestMethod, Response, ResponseOptions, HttpModule, JsonpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/index';
import { KnowledgeapiService } from './knowledgeapi.service';
import { MockKnowledgeApi } from './shared/mocks/knowledge.mock';
var mockHttp_provider = {
    provide: Http,
    deps: [MockBackend, BaseRequestOptions],
    useFactory: function (backend, options) {
        return new Http(backend, options);
    }
};
describe('Service: KnowledgeapiService', function () {
    var service = null;
    var backend = null;
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [
                KnowledgeapiService,
                MockBackend,
                BaseRequestOptions,
                mockHttp_provider,
            ],
            imports: [
                HttpModule,
                JsonpModule,
                StoreModule.provideStore(reducer)
            ]
        });
    });
    beforeEach(inject([KnowledgeapiService, MockBackend], function (knowledgeService, mockBackend) {
        service = knowledgeService;
        backend = mockBackend;
    }));
    var searchquery = 'Berlin';
    var _queryResult = MockKnowledgeApi;
    it('should create an instance KnowledgeapiService', inject([KnowledgeapiService, MockBackend], function () {
        expect(service).toBeTruthy();
    }));
    it('should call knowledge service API and return the result', function () {
        backend.connections.subscribe(function (connection) {
            var options = new ResponseOptions({
                body: JSON.stringify(MockKnowledgeApi)
            });
            connection.mockRespond(new Response(options));
            expect(connection.request.method).toEqual(RequestMethod.Get);
            expect(connection.request.url).toBe("http://lookup.dbpedia.org/api/search/KeywordSearch" +
                ("?&QueryString=" + searchquery));
        });
        service.getsearchresults(searchquery).subscribe(function (res) {
            expect(res).toEqual(MockKnowledgeApi);
        });
    });
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/knowledgeapi.service.spec.js.map