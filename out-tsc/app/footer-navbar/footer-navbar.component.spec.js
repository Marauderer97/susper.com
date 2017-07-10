import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterNavbarComponent } from './footer-navbar.component';
describe('Component: FooterNavbar', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
            ],
            declarations: [
                FooterNavbarComponent,
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FooterNavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create FooterNavbar Component', function () {
        var footer = new FooterNavbarComponent();
        expect(footer).toBeTruthy();
    });
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/footer-navbar/footer-navbar.component.spec.js.map