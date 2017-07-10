/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
/**
 * To avoid error 'No provider for Store'
 * import StoreModule and reducer
 */
import { reducer } from '../reducers/index';
import { StoreModule } from '@ngrx/store';
import { AdvancedsearchComponent } from './advancedsearch.component';
describe('AdvancedsearchComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule,
                HttpModule,
                JsonpModule,
                StoreModule.provideStore(reducer)
            ],
            declarations: [
                AdvancedsearchComponent,
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AdvancedsearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create an instance', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/advancedsearch/advancedsearch.component.spec.js.map