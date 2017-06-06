import { async, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NotFoundComponent } from './not-found.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from '../reducers/index';
import { AppComponent } from '../app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { IndexComponent } from '../index/index.component';
import { ResultsComponent } from '../results/results.component';
import { AdvancedsearchComponent } from '../advancedsearch/advancedsearch.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { FooterNavbarComponent } from '../footer-navbar/footer-navbar.component';
import { AboutComponent } from '../about/about.component';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ContactComponent } from '../contact/contact.component';
import { InfoboxComponent } from "../infobox/infobox.component";
import { RelatedSearchComponent } from "../related-search/related-search.component";
import { AutoCompleteComponent } from "../auto-complete/auto-complete.component";
import { AutocompleteService } from "../autocomplete.service";
import { ThemeComponent } from '../theme/theme.component';
describe('NotFoundComponent', function () {
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
                StoreDevtoolsModule.instrumentOnlyWithExtension()
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
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create an instance', function () {
        expect(component).toBeTruthy();
    });
    it('it should have logo with correct alt text property', function () {
        var compiled = fixture.debugElement.nativeElement;
        var image = compiled.querySelector('div.not-found-banner img');
        expect(image).toBeTruthy();
        expect(image.alt).toBe('YaCy');
    });
    it('should have an app-search-bar element', function () {
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('app-search-bar')).toBeTruthy();
    });
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/not-found/not-found.component.spec.js.map