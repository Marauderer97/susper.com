import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule, JsonpModule } from "@angular/http";
import { StoreModule } from "@ngrx/store";
import { AutoCorrectComponent } from './auto-correct.component';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { AutocorrectService } from "../autocorrect.service";
import { reducer } from "../reducers/index";
import { IntelligenceComponent } from "../intelligence/intelligence.component";
describe('AutoCorrectComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                BrowserModule,
                CommonModule,
                FormsModule,
                HttpModule,
                JsonpModule,
                StoreModule.provideStore(reducer),
                StoreDevtoolsModule.instrumentOnlyWithExtension(),
            ],
            declarations: [
                AutoCorrectComponent,
                IntelligenceComponent
            ],
            providers: [
                AutocorrectService
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AutoCorrectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/auto-correct/auto-correct.component.spec.js.map