var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as query from '../actions/query';
export var SearchBarComponent = (function () {
    function SearchBarComponent(route, router, store) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.store = store;
        this.searchdata = {
            query: '',
            verify: false,
            nav: 'filetype,protocol,hosts,authors,collections,namespace,topics,date',
            start: 0,
            indexof: 'off',
            meanCount: '5',
            resource: 'global',
            prefermaskfilter: '',
            maximumRecords: 10,
            timezoneOffset: 0
        };
        this.query$ = store.select(fromRoot.getquery);
        this.query$.subscribe(function (query) {
            _this.searchdata.query = query;
        });
    }
    ;
    SearchBarComponent.prototype.onquery = function (event) {
        this.store.dispatch(new query.QueryAction(event.target.value));
        this.submit();
    };
    SearchBarComponent.prototype.ngOnInit = function () {
        this.searchdata.timezoneOffset = new Date().getTimezoneOffset();
    };
    SearchBarComponent.prototype.ngAfterViewInit = function () {
        this.vc.first.nativeElement.focus();
    };
    SearchBarComponent.prototype.submit = function () {
        this.router.navigate(['/search'], { queryParams: this.searchdata });
    };
    __decorate([
        ViewChildren('input'), 
        __metadata('design:type', Object)
    ], SearchBarComponent.prototype, "vc", void 0);
    SearchBarComponent = __decorate([
        Component({
            selector: 'app-search-bar',
            templateUrl: './search-bar.component.html',
            styleUrls: ['./search-bar.component.css']
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, Router, Store])
    ], SearchBarComponent);
    return SearchBarComponent;
}());
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/search-bar/search-bar.component.js.map