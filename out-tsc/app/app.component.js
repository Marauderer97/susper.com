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
import { Router, NavigationEnd } from '@angular/router';
import { Store } from "@ngrx/store";
import * as fromRoot from './reducers';
import * as queryactions from './actions/query';
var AppComponent = (function () {
    function AppComponent(router, store) {
        var _this = this;
        this.router = router;
        this.store = store;
        this.title = 'Susper';
        this.searchdata = {
            query: '',
            rows: 10,
            start: 0,
        };
        this.resultscomponentchange$ = store.select(fromRoot.getItems);
        this.resultscomponentchange$.subscribe(function (res) {
            if (_this.searchdata.query.length > 0) {
                _this.router.navigate(['/search'], { queryParams: _this.searchdata });
            }
        });
        this.wholequery$ = store.select(fromRoot.getwholequery);
        this.wholequery$.subscribe(function (data) {
            _this.searchdata = data;
        });
        if (localStorage.getItem('resultscount')) {
            this.store.dispatch(new queryactions.QueryServerAction({ 'query': '', start: 0, rows: 10, search: false }));
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [Router, Store])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/app.component.js.map