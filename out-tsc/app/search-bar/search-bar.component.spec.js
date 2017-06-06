import { async, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { SearchBarComponent } from './search-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from '../reducers/index';
import { AppComponent } from '../app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { IndexComponent } from '../index/index.component';
import { ResultsComponent } from '../results/results.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AdvancedsearchComponent } from '../advancedsearch/advancedsearch.component';
import { FooterNavbarComponent } from '../footer-navbar/footer-navbar.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { InfoboxComponent } from "../infobox/infobox.component";
import { RelatedSearchComponent } from "../related-search/related-search.component";
import { AutocompleteService } from "../autocomplete.service";
import { AutoCompleteComponent } from "../auto-complete/auto-complete.component";
import { ThemeComponent } from '../theme/theme.component';
describe('SearchBarComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                BrowserModule,
                CommonModule,
                FormsModule,
                HttpModule,
                JsonpModule,
                StoreModule.provideStore(reducer),
                StoreDevtoolsModule.instrumentOnlyWithExtension(),
            ],
            declarations: [
                AppComponent,
                NavbarComponent,
                IndexComponent,
                ResultsComponent,
                NotFoundComponent,
                AdvancedsearchComponent,
                SearchBarComponent,
                FooterNavbarComponent,
                AboutComponent,
                ContactComponent,
                ModalComponent,
                InfoboxComponent,
                RelatedSearchComponent,
                AutoCompleteComponent,
                ThemeComponent
            ],
            providers: [
                AutocompleteService
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
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/search-bar/search-bar.component.spec.js.map