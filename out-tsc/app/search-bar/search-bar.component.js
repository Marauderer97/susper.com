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
import * as queryactions from '../actions/query';
import { SpeechService } from '../speech.service';
var SearchBarComponent = (function () {
    function SearchBarComponent(route, router, store, speech) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.store = store;
        this.speech = speech;
        this.searchdata = {
            query: '',
            rows: 10,
            start: 0,
            fq: ''
        };
        this.wholequery$ = store.select(fromRoot.getwholequery);
        this.wholequery$.subscribe(function (data) {
            _this.searchdata = data;
        });
        this.resultspage = this.router.url.toString().includes('/search');
    }
    ;
    SearchBarComponent.prototype.speechRecognition = function () {
        var _this = this;
        this.speech.record('en_US').subscribe(function (voice) { return _this.onquery(voice); });
    };
    SearchBarComponent.prototype.hidesuggestions = function (data) {
        if (data === 1) {
            this.displayStatus = 'hidebox';
        }
        else {
            this.displayStatus = 'showbox';
        }
    };
    SearchBarComponent.prototype.onEnter = function (event) {
        if (event.which === 13) {
            if (this.searchdata.fq !== '') {
                this.store.dispatch(new queryactions.QueryServerAction({ 'query': event.target.value, start: 0, rows: this.searchdata.rows, fq: this.searchdata.fq }));
            }
            else {
                this.store.dispatch(new queryactions.QueryServerAction({
                    'query': event.target.value,
                    start: 0,
                    rows: this.searchdata.rows
                }));
            }
            this.displayStatus = 'hidebox';
            event.target.blur();
            event.preventDefault();
            this.submit();
        }
    };
    SearchBarComponent.prototype.onquery = function (event) {
        this.store.dispatch(new query.QueryAction(event));
        var instantsearch = JSON.parse(localStorage.getItem('instantsearch'));
        if (instantsearch && instantsearch.value) {
            if (this.searchdata.fq !== '') {
                this.store.dispatch(new queryactions.QueryServerAction({ 'query': event, start: 0, rows: this.searchdata.rows, fq: this.searchdata.fq }));
            }
            else {
                this.store.dispatch(new queryactions.QueryServerAction({
                    'query': event,
                    start: 0,
                    rows: this.searchdata.rows
                }));
            }
            this.displayStatus = 'showbox';
        }
    };
    SearchBarComponent.prototype.ShowAuto = function () {
        return (this.displayStatus === 'showbox');
    };
    SearchBarComponent.prototype.ngOnInit = function () {
        this.displayStatus = 'hidebox';
    };
    SearchBarComponent.prototype.ngAfterViewInit = function () {
        this.vc.first.nativeElement.focus();
    };
    SearchBarComponent.prototype.submit = function () {
        if (this.searchdata.query.toString().length !== 0) {
            if (!this.resultspage) {
                this.router.navigate(['/search'], { queryParams: this.searchdata });
            }
        }
    };
    return SearchBarComponent;
}());
__decorate([
    ViewChildren('input'),
    __metadata("design:type", Object)
], SearchBarComponent.prototype, "vc", void 0);
SearchBarComponent = __decorate([
    Component({
        selector: 'app-search-bar',
        templateUrl: './search-bar.component.html',
        styleUrls: ['./search-bar.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        Store,
        SpeechService])
], SearchBarComponent);
export { SearchBarComponent };
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/search-bar/search-bar.component.js.map