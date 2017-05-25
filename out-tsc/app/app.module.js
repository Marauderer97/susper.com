var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { ResultsComponent } from './results/results.component';
import { RouterModule } from '@angular/router';
import { SearchService } from './search.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommonModule } from '@angular/common';
import { AdvancedsearchComponent } from './advancedsearch/advancedsearch.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/index';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AboutComponent } from './about/about.component';
import { FooterNavbarComponent } from './footer-navbar/footer-navbar.component';
import { ContactComponent } from './contact/contact.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { TermsComponent } from './terms/terms.component';
import { EffectsModule } from '@ngrx/effects';
import { ApiSearchEffects } from './effects/search-effects';
import { NewadvancedsearchComponent } from './newadvancedsearch/newadvancedsearch.component';
import { InfoboxComponent } from './infobox/infobox.component';
import { KnowledgeapiService } from './knowledgeapi.service';
import { RelatedSearchComponent } from './related-search/related-search.component';
var appRoutes = [
    { path: 'search', component: ResultsComponent },
    { path: '', component: IndexComponent },
    { path: 'about', component: AboutComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '404', component: NotFoundComponent },
    { path: 'advancedsearch', component: NewadvancedsearchComponent },
    { path: '**', redirectTo: '/404' },
];
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                NavbarComponent,
                IndexComponent,
                ResultsComponent,
                NotFoundComponent,
                AdvancedsearchComponent,
                SearchBarComponent,
                AboutComponent,
                FooterNavbarComponent,
                ContactComponent,
                TermsComponent,
                NewadvancedsearchComponent,
                InfoboxComponent,
                RelatedSearchComponent,
            ],
            imports: [
                BrowserModule,
                CommonModule,
                FormsModule,
                HttpModule,
                JsonpModule,
                RouterModule.forRoot(appRoutes),
                StoreModule.provideStore(reducer),
                EffectsModule.run(ApiSearchEffects),
                StoreDevtoolsModule.instrumentOnlyWithExtension(),
                Ng2Bs3ModalModule
            ],
            providers: [SearchService, KnowledgeapiService],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/app.module.js.map