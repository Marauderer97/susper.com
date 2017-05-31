var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import * as query from '../actions/query';
export var CHANGE = 'CHANGE';
import * as search from '../actions/search';
import { SearchService } from '../search.service';
/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application. StateUpdates is an observable of the latest state and
 * dispatched action. The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * A simple way to think of it is that ngrx/effects is an event listener of sorts.
 * It listens for actions being dispatched to the store. You can then tell `ngrx/effects`
 * that when a particular action is dispatched, to take another, new action as a result.
 * At the end, what’s really happening is `ngrx/effects` is an `action generator` that dispatches
 * a `new action` as a result of a different action.
 */
export var ApiSearchEffects = (function () {
    function ApiSearchEffects(actions$, searchService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.searchService = searchService;
        this.store = store;
        this.search$ = this.actions$
            .ofType(query.ActionTypes.QUERYSERVER)
            .debounceTime(300)
            .map(function (action) { return action.payload; })
            .switchMap(function (querypay) {
            if (querypay === '') {
                return empty();
            }
            var nextSearch$ = _this.actions$.ofType(query.ActionTypes.QUERYSERVER).skip(1);
            _this.searchService.getsearchresults(querypay)
                .takeUntil(nextSearch$)
                .subscribe(function (response) {
                _this.store.dispatch(new search.SearchAction(response));
                return empty();
            });
            return empty();
        });
    }
    __decorate([
        Effect(), 
        __metadata('design:type', Observable)
    ], ApiSearchEffects.prototype, "search$", void 0);
    ApiSearchEffects = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Actions, SearchService, Store])
    ], ApiSearchEffects);
    return ApiSearchEffects;
}());
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/effects/search-effects.js.map