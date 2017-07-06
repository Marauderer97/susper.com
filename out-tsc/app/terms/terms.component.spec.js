import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
/**
 * import 'FormsModule' to avoid
 * "Can't bind to 'ngModel' since it isn't a known property of 'input'" error
 */
import { FormsModule } from '@angular/forms';
import { FooterNavbarComponent } from '../footer-navbar/footer-navbar.component';
import { TermsComponent } from './terms.component';
describe('Component: Terms', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule
            ],
            declarations: [
                FooterNavbarComponent,
                TermsComponent
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TermsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create a Terms Component', function () {
        var terms = new TermsComponent();
        expect(terms).toBeTruthy();
    });
    it('should create a FooterNavbar Component', function () {
        var footerNavbar = new FooterNavbarComponent();
        expect(footerNavbar).toBeTruthy();
    });
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/terms/terms.component.spec.js.map