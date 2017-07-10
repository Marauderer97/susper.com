/* tslint:disable:no-unused-variable */
import { TestBed, inject } from '@angular/core/testing';
import { AutocompleteService } from './autocomplete.service';
import { HttpModule, JsonpModule } from "@angular/http";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { reducer } from "./reducers/index";
describe('AutocompleteService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                JsonpModule,
                StoreModule.provideStore(reducer),
                StoreDevtoolsModule.instrumentOnlyWithExtension(),
            ],
            providers: [AutocompleteService]
        });
    });
    it('should ...', inject([AutocompleteService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/autocomplete.service.spec.js.map