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
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import * as fromRoot from '../reducers';
import * as queryactions from '../actions/query';
var SearchsettingsComponent = (function () {
    function SearchsettingsComponent(router, store) {
        var _this = this;
        this.router = router;
        this.store = store;
        this.resultCount = 10;
        this.searchdata = [];
        if (localStorage.getItem('instantsearch')) {
            this.instantresults = JSON.parse(localStorage.getItem('instantsearch')).value || false;
        }
        else {
            this.instantresults = false;
        }
        if (localStorage.getItem('resultscount')) {
            this.resultCount = JSON.parse(localStorage.getItem('resultscount')).value || false;
        }
        else {
            this.resultCount = 10;
        }
        this.wholequery$ = store.select(fromRoot.getwholequery);
        this.wholequery$.subscribe(function (data) {
            _this.searchdata = data;
        });
    }
    SearchsettingsComponent.prototype.ngOnInit = function () {
    };
    SearchsettingsComponent.prototype.onSave = function () {
        if (this.instantresults) {
            localStorage.setItem('instantsearch', JSON.stringify({ value: true }));
            localStorage.setItem('resultscount', JSON.stringify({ value: 10 }));
            this.store.dispatch(new queryactions.QueryServerAction({ 'query': '', start: 0, rows: 10, search: false }));
        }
        else {
            localStorage.removeItem('instantsearch');
            localStorage.setItem('resultscount', JSON.stringify({ value: this.resultCount }));
            this.store.dispatch(new queryactions.QueryServerAction({ 'query': '', start: 0, rows: this.resultCount, search: false }));
        }
        this.router.navigate(['/']);
    };
    SearchsettingsComponent.prototype.onCancel = function () {
        this.router.navigate(['/']);
    };
    return SearchsettingsComponent;
}());
SearchsettingsComponent = __decorate([
    Component({
        selector: 'app-searchsettings',
        templateUrl: './searchsettings.component.html',
        styleUrls: ['./searchsettings.component.css']
    }),
    __metadata("design:paramtypes", [Router, Store])
], SearchsettingsComponent);
export { SearchsettingsComponent };
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/searchsettings/searchsettings.component.js.map