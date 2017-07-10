var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectorRef } from '@angular/core';
import { SearchService } from '../search.service';
import { ThemeService } from '../theme.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as fromRoot from '../reducers';
import { Store } from '@ngrx/store';
import * as queryactions from '../actions/query';
var ResultsComponent = (function () {
    function ResultsComponent(searchservice, route, activatedroute, store, ref, themeService) {
        var _this = this;
        this.searchservice = searchservice;
        this.route = route;
        this.activatedroute = activatedroute;
        this.store = store;
        this.ref = ref;
        this.themeService = themeService;
        this.searchdata = {
            query: '',
            start: 0,
            rows: 10,
        };
        this.querylook = {};
        this.hidefooter = 1;
        this.hideAutoCorrect = 1;
        this.activatedroute.queryParams.subscribe(function (query) {
            var urldata = Object.assign({}, _this.searchdata);
            if (query['fq']) {
                if (query['fq'].includes('png')) {
                    _this.resultDisplay = 'images';
                    urldata.fq = 'url_file_ext_s:(png+OR+jpeg+OR+jpg+OR+gif)';
                }
                else if (query['fq'].includes('avi')) {
                    _this.resultDisplay = 'videos';
                }
                else {
                    _this.resultDisplay = 'all';
                }
            }
            else {
                _this.resultDisplay = 'all';
            }
            if (query['resultDisplay']) {
                _this.resultDisplay = query['resultDisplay'];
                urldata.resultDisplay = _this.resultDisplay;
            }
            if (query['start']) {
                urldata.start = query['start'];
            }
            else {
                urldata.start = 0;
            }
            urldata.query = query['query'];
            _this.store.dispatch(new queryactions.QueryAction(query['query']));
            _this.querylook = Object.assign({}, query);
            _this.begin = Number(query['start']) + 1;
            _this.start = (_this.presentPage - 1) * urldata.rows;
            _this.begin = _this.start + 1;
            urldata.rows = Number(query['rows']) || 10;
            _this.presentPage = Math.abs(query['start'] / urldata.rows) + 1;
            var querydata = Object.assign({}, urldata);
            _this.store.dispatch(new queryactions.QueryServerAction(querydata));
            if (_this.presentPage === 1) {
                _this.hideAutoCorrect = 0;
            }
            else {
                _this.hideAutoCorrect = 1;
            }
        });
        this.items$ = store.select(fromRoot.getItems);
        this.responseTime$ = store.select(fromRoot.getResponseTime);
        this.responseTime$.subscribe(function (responsetime) {
            _this.hidefooter = 0;
        });
        this.totalResults$ = store.select(fromRoot.getTotalResults);
        this.totalResults$.subscribe(function (totalResults) {
            _this.totalResults = totalResults;
            _this.end = Math.min(totalResults, _this.begin + _this.searchdata.rows - 1);
            _this.totalNumber = totalResults;
            _this.message = 'About ' + totalResults + ' results';
            _this.noOfPages = Math.ceil(totalResults / _this.searchdata.rows);
            _this.maxPage = Math.min(_this.searchdata.rows, _this.noOfPages);
        });
        this.querychange$ = store.select(fromRoot.getquery);
        this.querychange$.subscribe(function (res) {
            _this.hidefooter = 1;
        });
        this.wholequery$ = store.select(fromRoot.getwholequery);
        this.wholequery$.subscribe(function (data) {
            _this.searchdata = data;
            _this.start = (_this.presentPage - 1) * data.rows;
            _this.begin = _this.start + 1;
        });
    }
    ResultsComponent.prototype.getNumber = function (N) {
        var result = Array.apply(null, { length: N }).map(Number.call, Number);
        if (result.length > 10) {
            result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        }
        return result;
    };
    ;
    ResultsComponent.prototype.advancedsearch = function () {
    };
    ResultsComponent.prototype.getPresentPage = function (N) {
        this.presentPage = N;
        var urldata = Object.assign({}, this.searchdata);
        urldata.start = (this.presentPage - 1) * urldata.rows;
        this.store.dispatch(new queryactions.QueryServerAction(urldata));
    };
    ResultsComponent.prototype.filterByDate = function () {
        var urldata = Object.assign({}, this.searchdata);
        urldata.sort = 'last_modified desc';
        this.store.dispatch(new queryactions.QueryServerAction(urldata));
    };
    ResultsComponent.prototype.filterByContext = function () {
        var urldata = Object.assign({}, this.searchdata);
        delete urldata.sort;
        this.store.dispatch(new queryactions.QueryServerAction(urldata));
    };
    ResultsComponent.prototype.Display = function (S) {
        return (this.resultDisplay === S);
    };
    ResultsComponent.prototype.videoClick = function () {
        var urldata = Object.assign({}, this.searchdata);
        this.getPresentPage(1);
        this.resultDisplay = 'videos';
        urldata.rows = 10;
        urldata.fq = 'url_file_ext_s:(avi+OR+mov+OR+flw+OR+mp4)';
        urldata.resultDisplay = this.resultDisplay;
        this.store.dispatch(new queryactions.QueryServerAction(urldata));
    };
    ResultsComponent.prototype.imageClick = function () {
        var urldata = Object.assign({}, this.searchdata);
        this.getPresentPage(1);
        this.resultDisplay = 'images';
        urldata.rows = 100;
        urldata.fq = 'url_file_ext_s:(png+OR+jpeg+OR+jpg+OR+gif)';
        urldata.resultDisplay = this.resultDisplay;
        this.store.dispatch(new queryactions.QueryServerAction(urldata));
    };
    ResultsComponent.prototype.docClick = function () {
        var urldata = Object.assign({}, this.searchdata);
        this.getPresentPage(1);
        this.resultDisplay = 'all';
        delete urldata.fq;
        urldata.rows = 10;
        urldata.resultDisplay = this.resultDisplay;
        this.store.dispatch(new queryactions.QueryServerAction(urldata));
    };
    ResultsComponent.prototype.incPresentPage = function () {
        this.presentPage = Math.min(this.noOfPages, this.presentPage + 1);
        this.getPresentPage(this.presentPage);
    };
    ResultsComponent.prototype.decPresentPage = function () {
        this.presentPage = Math.max(1, this.presentPage - 1);
        this.getPresentPage(this.presentPage);
    };
    ResultsComponent.prototype.getStyle = function (page) {
        return ((this.presentPage) === page);
    };
    ResultsComponent.prototype.getWidth = function () {
        if (self.innerWidth) {
            return self.innerWidth;
        }
        if (document.documentElement && document.documentElement.clientWidth) {
            return document.documentElement.clientWidth;
        }
        if (document.body) {
            return document.body.clientWidth;
        }
    };
    ResultsComponent.prototype.ngOnInit = function () {
        if (this.getWidth() >= 800) {
            document.getElementById('nav-group').style.width = '632px';
        }
    };
    return ResultsComponent;
}());
ResultsComponent = __decorate([
    Component({
        selector: 'app-results',
        templateUrl: './results.component.html',
        styleUrls: ['./results.component.css']
    }),
    __metadata("design:paramtypes", [SearchService, Router, ActivatedRoute,
        Store, ChangeDetectorRef, ThemeService])
], ResultsComponent);
export { ResultsComponent };
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/results/results.component.js.map