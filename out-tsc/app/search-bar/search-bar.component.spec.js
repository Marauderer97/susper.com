/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../reducers/index';
import { AutocompleteService } from "../autocomplete.service";
import { AutoCompleteComponent } from "../auto-complete/auto-complete.component";
import { SpeechService } from '../speech.service';
describe('Component: SearchBarComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule,
                HttpModule,
                JsonpModule,
                StoreModule.provideStore(reducer),
            ],
            declarations: [
                SearchBarComponent,
                AutoCompleteComponent,
            ],
            providers: [
                AutocompleteService,
                SpeechService
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SearchBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create an instance', function () {
        expect(component).toBeTruthy();
    });
    it('should have an input element for search inputs', function () {
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('div.input-group input#nav-input'));
    });
    it('should focus the input search element on initialization', function () {
        var compiled = fixture.debugElement.nativeElement;
        var inputElement = compiled.querySelector('div.input-group input#nav-input');
        expect(document.activeElement).toBe(inputElement);
    });
    it('should have "searchdata" property', function () {
        var compiled = fixture.debugElement.nativeElement;
        expect(component.searchdata).toBeTruthy();
    });
    it('should have an app-auto-complete element', function () {
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('app-auto-complete')).toBeTruthy();
    });
    it('should have search button', function () {
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('button#nav-button')).toBeTruthy();
    });
    it('should have microphone icon', function () {
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('img.microphone')).toBeTruthy();
    });
    it('should have wholequery$ as Observable', function () {
        expect(component.wholequery$).toBeTruthy();
    });
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/search-bar/search-bar.component.spec.js.map