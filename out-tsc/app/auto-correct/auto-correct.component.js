var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { AutocorrectService } from "../autocorrect.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import * as fromRoot from '../reducers';
var AutoCorrectComponent = (function () {
    function AutoCorrectComponent(autocorrectservice, route, activatedroute, store, ref) {
        var _this = this;
        this.autocorrectservice = autocorrectservice;
        this.route = route;
        this.activatedroute = activatedroute;
        this.store = store;
        this.ref = ref;
        this.resultsearch = '/search';
        this.hidecomponent = new EventEmitter();
        this.sugflag = false;
        this.query$ = store.select(fromRoot.getquery);
        this.query$.subscribe(function (query) {
            if (query) {
                _this.sugflag = false;
                _this.autocorrectservice.getsearchresults(query).subscribe(function (res) {
                    if (res) {
                        if (res['original'].toLocaleLowerCase() !== res['suggestion'].toLocaleLowerCase()) {
                            _this.sugflag = true;
                            _this.suggestion = res['suggestion'];
                        }
                    }
                });
            }
        });
    }
    AutoCorrectComponent.prototype.ngOnInit = function () {
    };
    return AutoCorrectComponent;
}());
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AutoCorrectComponent.prototype, "hidecomponent", void 0);
AutoCorrectComponent = __decorate([
    Component({
        selector: 'app-auto-correct',
        templateUrl: './auto-correct.component.html',
        styleUrls: ['./auto-correct.component.css']
    }),
    __metadata("design:paramtypes", [AutocorrectService, Router, ActivatedRoute,
        Store, ChangeDetectorRef])
], AutoCorrectComponent);
export { AutoCorrectComponent };
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/auto-correct/auto-correct.component.js.map