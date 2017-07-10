import { async, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
/**
 * import 'FormsModule' to avoid
 * "Can't bind to 'ngModel' since it isn't a known property of 'input'" error
 */
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactComponent } from '../contact/contact.component';
import { FooterNavbarComponent } from '../footer-navbar/footer-navbar.component';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
describe('Component: Contact', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                RouterTestingModule,
                FormsModule
            ],
            declarations: [
                FooterNavbarComponent,
                ContactComponent,
                ModalComponent,
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create a Contact Component', function () {
        var contactComponent = new ContactComponent();
        expect(contactComponent).toBeTruthy();
    });
    it('should have alt text property as brand', function () {
        var compiled = fixture.debugElement.nativeElement;
        var image = compiled.querySelector('div.navbar-header img');
        expect(image).toBeTruthy();
        expect(image.alt).toBe('brand');
    });
    it('should have a FooterNavbar Component', function () {
        var footerNavbar = new FooterNavbarComponent();
        expect(footerNavbar).toBeTruthy();
    });
    it('should have an element app-footer-navbar', function () {
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('app-footer-navbar')).toBeTruthy();
    });
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/contact/contact.component.spec.js.map