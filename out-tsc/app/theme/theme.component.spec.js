import { async, TestBed } from '@angular/core/testing';
import { ThemeComponent } from './theme.component';
import { ThemeService } from '../theme.service';
describe('ThemeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                ThemeComponent
            ],
            providers: [
                ThemeService
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ThemeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/theme/theme.component.spec.js.map