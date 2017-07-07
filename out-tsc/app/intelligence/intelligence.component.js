var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import * as fromRoot from '../reducers';
import { IntelligenceService } from "../intelligence.service";
var IntelligenceComponent = (function () {
    function IntelligenceComponent(store, intelligence) {
        var _this = this;
        this.store = store;
        this.intelligence = intelligence;
        this.actions = [];
        this.wholequery$ = store.select(fromRoot.getwholequery);
        this.wholequery$.subscribe(function (data) {
            _this.intelligence.getintelligentresponse(data.query).subscribe(function (res) {
                if (res && res.answers && res.answers[0].actions) {
                    _this.actions = res.answers[0].actions;
                    for (var _i = 0, _a = _this.actions; _i < _a.length; _i++) {
                        var action = _a[_i];
                        if (action.type === 'answer' && action.mood !== 'sabta') {
                            _this.answer = action.expression;
                        }
                        else {
                            _this.answer = '';
                        }
                    }
                }
                else {
                    _this.answer = '';
                }
            });
        });
    }
    IntelligenceComponent.prototype.ngOnInit = function () {
    };
    return IntelligenceComponent;
}());
IntelligenceComponent = __decorate([
    Component({
        selector: 'app-intelligence',
        templateUrl: './intelligence.component.html',
        styleUrls: ['./intelligence.component.css']
    }),
    __metadata("design:paramtypes", [Store, IntelligenceService])
], IntelligenceComponent);
export { IntelligenceComponent };
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/intelligence/intelligence.component.js.map