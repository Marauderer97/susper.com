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
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { KnowledgeapiService } from '../knowledgeapi.service';
export var RelatedSearchComponent = (function () {
    function RelatedSearchComponent(knowledgeservice, route, activatedroute, store, ref) {
        var _this = this;
        this.knowledgeservice = knowledgeservice;
        this.route = route;
        this.activatedroute = activatedroute;
        this.store = store;
        this.ref = ref;
        this.resultsearch = '/search';
        this.query$ = store.select(fromRoot.getquery);
        this.resultscomponentchange$ = store.select(fromRoot.getItems);
        this.resultscomponentchange$.subscribe(function (res) {
            _this.results = _this.initialresults;
        });
        this.query$.subscribe(function (query) {
            if (query) {
                _this.knowledgeservice.getsearchresults(query).subscribe(function (res) {
                    if (res.results) {
                        if (!res.results[0].label.toLowerCase().localeCompare(query.toLowerCase())) {
                            res.results.splice(0, 1);
                            _this.initialresults = res.results;
                        }
                        else {
                            _this.initialresults = res.results;
                        }
                        _this.keyword = query;
                    }
                    else {
                        _this.initialresults = [];
                        _this.keyword = query;
                    }
                });
            }
            else {
                _this.initialresults = [];
            }
        });
    }
    RelatedSearchComponent.prototype.ngOnInit = function () {
    };
    RelatedSearchComponent = __decorate([
        Component({
            selector: 'app-related-search',
            templateUrl: './related-search.component.html',
            styleUrls: ['./related-search.component.css']
        }), 
        __metadata('design:paramtypes', [KnowledgeapiService, Router, ActivatedRoute, Store, ChangeDetectorRef])
    ], RelatedSearchComponent);
    return RelatedSearchComponent;
}());
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/related-search/related-search.component.js.map