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
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Rx';
export var AutocompleteService = (function () {
    function AutocompleteService(searchService) {
        this.searchService = searchService;
        this.server = 'yacy.searchlab.eu';
        this.suggestUrl = 'http://' + this.server + '/suggest.json?callback=?';
        this.search = {
            query: '',
            verify: false,
            nav: 'filetype,protocol,hosts,authors,collections,namespace,topics,date',
            start: 0,
            indexof: 'off',
            meanCount: '5',
            resource: 'global',
            prefermaskfilter: '',
            timezoneOffset: 0,
        };
        this.searchTerms = new Subject();
    }
    AutocompleteService.prototype.onquery = function (term) {
        this.searchTerms.next(term);
    };
    AutocompleteService.prototype.ngOnInit = function () {
        var _this = this;
        this.data = this.searchTerms
            .debounceTime(300) // pause in events
            .distinctUntilChanged() // ignore if search term not changed
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.searchService.search(term)
            : Observable.of([]); });
    };
    AutocompleteService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [AutocompleteService])
    ], AutocompleteService);
    return AutocompleteService;
}());
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/autocomplete.service.js.map