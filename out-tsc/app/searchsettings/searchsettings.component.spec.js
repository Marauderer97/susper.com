import { async, TestBed } from '@angular/core/testing';
import { SearchsettingsComponent } from './searchsettings.component';
describe('SearchsettingsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SearchsettingsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SearchsettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/searchsettings/searchsettings.component.spec.js.map