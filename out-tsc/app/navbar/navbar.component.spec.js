import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { AutoCompleteComponent } from '../auto-complete/auto-complete.component';
import { AutocompleteService } from '../autocomplete.service';
import { SpeechService } from '../speech.service';
/**
 * import HttpModule to avoid error -
 * No provider for Http!
 */
import { HttpModule, JsonpModule } from '@angular/http';
/**
 * import StoreModule and reducer to avoid error -
 * No provider for Store!
 */
import { StoreModule } from '@ngrx/store';
import { reducer } from '../reducers/index';
/**
 * import 'FormsModule' to avoid
 * "Can't bind to 'ngModel' since it isn't a known property of 'input'" error
 */
import { FormsModule } from '@angular/forms';
describe('Component: Navbar', function () {
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
                NavbarComponent,
                SearchBarComponent,
                AutoCompleteComponent,
                DropdownComponent
            ],
            providers: [
                AutocompleteService,
                SpeechService
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    /**
     * No need to add 'create NavbarComponent' test-suite as it will require
     * to pass parameters :
     * router : Router, route: ActivatedRoute
     */
    it('should have an app-search-bar element', function () {
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('app-search-bar')).toBeTruthy();
    });
    it('should have alt text property as brand', function () {
        var compiled = fixture.debugElement.nativeElement;
        var image = compiled.querySelector('div.navbar-header img');
        expect(image).toBeTruthy();
        expect(image.alt).toBe('brand');
    });
    it('should have an app-dropdown element', function () {
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('app-dropdown')).toBeTruthy();
    });
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/navbar/navbar.component.spec.js.map