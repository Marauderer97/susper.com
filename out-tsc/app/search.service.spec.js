/* tslint:disable:no-unused-variable */
import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions, RequestMethod, Response, ResponseOptions, HttpModule, JsonpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/index';
import { SearchService } from './search.service';
import { MockSearchApi } from './shared/mocks/search.mock';
var mockHttp_provider = {
    provide: Http,
    deps: [MockBackend, BaseRequestOptions],
    useFactory: function (backend, options) {
        return new Http(backend, options);
    }
};
describe('Service: Search', function () {
    var service = null;
    var backend = null;
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                JsonpModule,
                StoreModule.provideStore(reducer)
            ],
            providers: [
                SearchService,
                mockHttp_provider,
                BaseRequestOptions,
                MockBackend
            ]
        });
    });
    beforeEach(inject([SearchService, MockBackend], function (searchService, mockBackend) {
        service = searchService;
        backend = mockBackend;
    }));
    var searchquery = 'India';
    var _queryResult = MockSearchApi;
    it('should create an instance SearchService', inject([SearchService, MockBackend], function () {
        expect(service).toBeTruthy();
    }));
    it('should call knowledge service API and return the result', function () {
        backend.connections.subscribe(function (connection) {
            var options = new ResponseOptions({
                body: JSON.stringify(MockSearchApi)
            });
            connection.mockRespond(new Response(options));
            expect(connection.request.method).toEqual(RequestMethod.Get);
            expect(connection.request.url).toBe("http://yacy.searchlab.eu/solr/select" +
                "?0=I&1=n&2=d&3=i&4=a&wt=yjson" +
                "&callback=JSONP_CALLBACK" +
                "&facet=true" +
                "&facet.mincount=1&facet.field=host_s" +
                "&facet.field=url_protocol_s" +
                "&facet.field=author_sxt" +
                "&facet.field=collection_sxt");
        });
    });
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/search.service.spec.js.map