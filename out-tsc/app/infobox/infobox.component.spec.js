import { async, TestBed } from '@angular/core/testing';
import { HttpModule, JsonpModule } from '@angular/http';
import { InfoboxComponent } from './infobox.component';
import { RouterTestingModule } from "@angular/router/testing";
import { KnowledgeapiService } from "../knowledgeapi.service";
import { reducer } from "../reducers/index";
import { StoreModule } from "@ngrx/store";
import { MockKnowledgeApi } from "../shared/mocks/knowledge.mock";
describe('Component: InfoboxComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpModule,
                JsonpModule,
                StoreModule.provideStore(reducer),
            ],
            declarations: [
                InfoboxComponent,
            ],
            providers: [
                { provide: KnowledgeapiService, useValue: MockKnowledgeApi }
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InfoboxComponent);
        component = fixture.componentInstance;
        component.results = MockKnowledgeApi.results;
        fixture.detectChanges();
    });
    it('should create Infobox component', function () {
        expect(component).toBeTruthy();
    });
    it('should have infobox heading same as query', function () {
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h2.heading')).toBeTruthy();
    });
    it('should have infobox description related to query', function () {
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p.description')).toBeTruthy();
    });
    it('should have related searches', function () {
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.card div#relate')).toBeTruthy();
    });
    it('should have results variable declared as Array<any>', function () {
        expect(component.results).toBeTruthy();
    });
    it('should have response$ observables', function () {
        expect(component.response$).toBeTruthy();
    });
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/infobox/infobox.component.spec.js.map