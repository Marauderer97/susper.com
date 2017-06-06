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
export var ResultsComponent = (function () {
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
            verify: false,
            nav: 'filetype,protocol,hosts,authors,collections,namespace,topics,date',
            start: 0,
            indexof: 'off',
            meanCount: '5',
            resource: 'global',
            prefermaskfilter: '',
            rows: 10,
            timezoneOffset: 0,
        };
        this.querylook = {};
        this.hidefooter = 1;
        this.activatedroute.queryParams.subscribe(function (query) {
            _this.hidefooter = 1;
            if (query['fq']) {
                if (query['fq'].includes('png')) {
                    _this.resultDisplay = 'images';
                    _this.searchdata.fq = 'url_file_ext_s:(png+OR+jpeg+OR+jpg+OR+gif)';
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
                _this.searchdata.resultDisplay = _this.resultDisplay;
            }
            if (query['start']) {
                _this.searchdata.start = query['start'];
            }
            else {
                _this.searchdata.start = 0;
            }
            _this.searchdata.query = query['query'];
            _this.store.dispatch(new queryactions.QueryAction(query['query']));
            _this.querylook = Object.assign({}, query);
            _this.searchdata.sort = query['sort'];
            _this.begin = Number(query['start']) + 1;
            _this.message = '';
            _this.start = (_this.presentPage - 1) * _this.searchdata.rows;
            _this.begin = _this.start + 1;
            _this.store.dispatch(new queryactions.QueryServerAction(query));
            _this.items$ = store.select(fromRoot.getItems);
            _this.totalResults$ = store.select(fromRoot.getTotalResults);
            _this.totalResults$.subscribe(function (totalResults) {
                if (totalResults) {
                    _this.hidefooter = 0;
                }
                _this.end = Math.min(totalResults, _this.begin + _this.searchdata.rows - 1);
                _this.message = 'About ' + totalResults + ' results';
                _this.noOfPages = Math.ceil(totalResults / _this.searchdata.rows);
                _this.maxPage = Math.min(_this.searchdata.rows, _this.noOfPages);
            });
            _this.searchdata.rows = Number(query['rows']) || 10;
            _this.presentPage = Math.abs(query['start'] / _this.searchdata.rows) + 1;
        });
        this.totalResults$.subscribe(function (totalResults) {
            if (totalResults) {
                _this.hidefooter = 0;
            }
            _this.end = Math.min(totalResults, _this.begin + _this.searchdata.rows - 1);
            _this.message = 'About ' + totalResults + ' results';
            _this.noOfPages = Math.ceil(totalResults / _this.searchdata.rows);
            _this.maxPage = Math.min(_this.searchdata.rows, _this.noOfPages);
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
        this.searchdata.start = (this.presentPage) * this.searchdata.rows;
        this.route.navigate(['/search'], { queryParams: this.searchdata });
    };
    ResultsComponent.prototype.filterByDate = function () {
        this.searchdata.sort = 'last_modified desc';
        this.route.navigate(['/search'], { queryParams: this.searchdata });
    };
    ResultsComponent.prototype.filterByContext = function () {
        delete this.searchdata.sort;
        this.route.navigate(['/search'], { queryParams: this.searchdata });
    };
    ResultsComponent.prototype.Display = function (S) {
        return (this.resultDisplay === S);
    };
    ResultsComponent.prototype.videoClick = function () {
        this.getPresentPage(0);
        this.resultDisplay = 'videos';
        this.searchdata.rows = 10;
        this.searchdata.fq = 'url_file_ext_s:(avi+OR+mov+OR+flw+OR+mp4)';
        this.searchdata.resultDisplay = this.resultDisplay;
        this.route.navigate(['/search'], { queryParams: this.searchdata });
    };
    ResultsComponent.prototype.imageClick = function () {
        this.getPresentPage(0);
        this.resultDisplay = 'images';
        this.searchdata.rows = 100;
        this.searchdata.fq = 'url_file_ext_s:(png+OR+jpeg+OR+jpg+OR+gif)';
        this.searchdata.resultDisplay = this.resultDisplay;
        this.route.navigate(['/search'], { queryParams: this.searchdata });
    };
    ResultsComponent.prototype.docClick = function () {
        this.getPresentPage(0);
        this.resultDisplay = 'all';
        delete this.searchdata.fq;
        this.searchdata.rows = 10;
        this.searchdata.resultDisplay = this.resultDisplay;
        this.route.navigate(['/search'], { queryParams: this.searchdata });
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
    ;
    ResultsComponent.prototype.ngOnInit = function () {
    };
    ResultsComponent = __decorate([
        Component({
            selector: 'app-results',
            templateUrl: './results.component.html',
            styleUrls: ['./results.component.css']
        }), 
        __metadata('design:paramtypes', [SearchService, Router, ActivatedRoute, Store, ChangeDetectorRef, ThemeService])
    ], ResultsComponent);
    return ResultsComponent;
}());
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/results/results.component.js.map