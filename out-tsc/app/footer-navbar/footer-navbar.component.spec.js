import { async, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FooterNavbarComponent } from './footer-navbar.component';
import { AboutComponent } from '../about/about.component';
import { AppComponent } from '../app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { IndexComponent } from '../index/index.component';
import { ResultsComponent } from '../results/results.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AdvancedsearchComponent } from '../advancedsearch/advancedsearch.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from '../reducers/search';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ContactComponent } from '../contact/contact.component';
import { InfoboxComponent } from "../infobox/infobox.component";
import { RelatedSearchComponent } from "../related-search/related-search.component";
import { AutoCompleteComponent } from "../auto-complete/auto-complete.component";
import { ThemeComponent } from '../theme/theme.component';
describe('FooterNavbarComponent', function () {
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
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FooterNavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/footer-navbar/footer-navbar.component.spec.js.map