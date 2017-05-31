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
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
export var AdvancedsearchComponent = (function () {
    function AdvancedsearchComponent(route, activatedroute, store) {
        var _this = this;
        this.route = route;
        this.activatedroute = activatedroute;
        this.store = store;
        this.querylook = {};
        this.selectedelements = [];
        this.activatedroute.queryParams.subscribe(function (query) {
            _this.querylook = Object.assign({}, query);
            _this.navigation$ = store.select(fromRoot.getNavigation);
        });
    }
    AdvancedsearchComponent.prototype.changeurl = function (modifier, element) {
        this.querylook['query'] = this.querylook['query'] + '+' + decodeURIComponent(modifier);
        this.selectedelements.push(element);
        this.route.navigate(['/search'], { queryParams: this.querylook });
    };
    AdvancedsearchComponent.prototype.removeurl = function (modifier) {
        this.querylook['query'] = this.querylook['query'].replace('+' + decodeURIComponent(modifier), '');
        this.route.navigate(['/search'], { queryParams: this.querylook });
    };
    AdvancedsearchComponent.prototype.ngOnInit = function () {
    };
    AdvancedsearchComponent = __decorate([
        Component({
            selector: 'app-advancedsearch',
            templateUrl: './advancedsearch.component.html',
            styleUrls: ['./advancedsearch.component.css']
        }), 
        __metadata('design:paramtypes', [Router, ActivatedRoute, Store])
    ], AdvancedsearchComponent);
    return AdvancedsearchComponent;
}());
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/advancedsearch/advancedsearch.component.js.map