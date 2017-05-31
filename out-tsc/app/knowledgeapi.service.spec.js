import { TestBed, inject } from '@angular/core/testing';
import { KnowledgeapiService } from './knowledgeapi.service';
import { HttpModule, JsonpModule } from "@angular/http";
import { reducer } from "./reducers/index";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
describe('KnowledgeapiService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                JsonpModule,
                StoreModule.provideStore(reducer),
                StoreDevtoolsModule.instrumentOnlyWithExtension(),
            ],
            providers: [KnowledgeapiService]
        });
    });
    it('should ...', inject([KnowledgeapiService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/knowledgeapi.service.spec.js.map