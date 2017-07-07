import { async, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { FooterNavbarComponent } from '../footer-navbar/footer-navbar.component';
import { HttpModule } from '@angular/http';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
describe('Component: About', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
            declarations: [
                AboutComponent,
                FooterNavbarComponent,
                ModalComponent
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AboutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create an About Component', function () {
        var aboutComponent = new AboutComponent();
        expect(aboutComponent).toBeTruthy();
    });
    it('should have alt text property as brand', function () {
        var compiled = fixture.debugElement.nativeElement;
        var image = compiled.querySelector('div.navbar-header img');
        expect(image).toBeTruthy();
        expect(image.alt).toBe('brand');
    });
    it('should have an footer navbar component', function () {
        var footerNavbar = new FooterNavbarComponent();
        expect(footerNavbar).toBeTruthy();
    });
    it('should have an app-footer-navbar element', function () {
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('app-footer-navbar')).toBeTruthy();
    });
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/about/about.component.spec.js.map