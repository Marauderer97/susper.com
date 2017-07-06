/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule, JsonpModule } from '@angular/http';
import { IndexComponent } from './index.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../reducers/index';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { AutoCompleteComponent } from '../auto-complete/auto-complete.component';
import { FooterNavbarComponent } from '../footer-navbar/footer-navbar.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { AutocompleteService } from '../autocomplete.service';
import { SpeechService } from '../speech.service';
describe('IndexComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                RouterTestingModule,
                HttpModule,
                JsonpModule,
                StoreModule.provideStore(reducer)
            ],
            declarations: [
                IndexComponent,
                SearchBarComponent,
                FooterNavbarComponent,
                DropdownComponent,
                AutoCompleteComponent
            ],
            providers: [
                AutocompleteService,
                SpeechService
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(IndexComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create an instance', function () {
        expect(component).toBeTruthy();
    });
    it('should have logo with correct alt text property', function () {
        var compiled = fixture.debugElement.nativeElement;
        var image = compiled.querySelector('div img');
        expect(image).toBeTruthy();
        expect(image.alt).toBe('Susper');
    });
    it('should have an element app-search-bar', function () {
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('app-search-bar')).toBeTruthy();
    });
    it('should have set-susper-default option', function () {
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('div #set-susper-default')).toBeTruthy();
    });
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/index/index.component.spec.js.map