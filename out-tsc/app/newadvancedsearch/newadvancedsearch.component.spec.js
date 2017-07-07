import { async, TestBed } from '@angular/core/testing';
import { NewadvancedsearchComponent } from './newadvancedsearch.component';
import { FooterNavbarComponent } from '../footer-navbar/footer-navbar.component';
describe('NewadvancedsearchComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NewadvancedsearchComponent,
                FooterNavbarComponent,
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NewadvancedsearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/newadvancedsearch/newadvancedsearch.component.spec.js.map