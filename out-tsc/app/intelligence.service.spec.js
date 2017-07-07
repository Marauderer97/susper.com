import { TestBed, inject } from '@angular/core/testing';
import { IntelligenceService } from './intelligence.service';
import { HttpModule, JsonpModule } from "@angular/http";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./reducers/index";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
describe('IntelligenceService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                JsonpModule,
                StoreModule.provideStore(reducer),
                StoreDevtoolsModule.instrumentOnlyWithExtension(),
            ],
            providers: [IntelligenceService]
        });
    });
    it('should ...', inject([IntelligenceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/intelligence.service.spec.js.map