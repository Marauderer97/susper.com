import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, JsonpModule } from "@angular/http";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { reducer } from "./reducers/index";
import { AutocorrectService } from "./autocorrect.service";
describe('AutocorrectService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                JsonpModule,
                StoreModule.provideStore(reducer),
                StoreDevtoolsModule.instrumentOnlyWithExtension(),
            ],
            providers: [AutocorrectService]
        });
    });
    it('should be created', inject([AutocorrectService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/autocorrect.service.spec.js.map