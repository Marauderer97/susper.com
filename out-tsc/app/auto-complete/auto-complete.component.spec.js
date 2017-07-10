/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { AutoCompleteComponent } from './auto-complete.component';
import { AutocompleteService } from '../autocomplete.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { reducer } from '../reducers/index';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from "@angular/router/testing";
describe('AutoCompleteComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpModule,
                JsonpModule,
                StoreModule.provideStore(reducer)
            ],
            declarations: [
                AutoCompleteComponent,
            ],
            providers: [
                AutocompleteService
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AutoCompleteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/auto-complete/auto-complete.component.spec.js.map