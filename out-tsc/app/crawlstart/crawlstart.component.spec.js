import { async, TestBed } from '@angular/core/testing';
import { CrawlstartComponent } from './crawlstart.component';
describe('CrawlstartComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CrawlstartComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CrawlstartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/crawlstart/crawlstart.component.spec.js.map