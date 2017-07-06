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
var RelatedSearchComponent = (function () {
    function RelatedSearchComponent(knowledgeservice, route, activatedroute, store, ref) {
        var _this = this;
        this.knowledgeservice = knowledgeservice;
        this.route = route;
        this.activatedroute = activatedroute;
        this.store = store;
        this.ref = ref;
        this.resultsearch = '/search';
        this.query$ = store.select(fromRoot.getquery);
        this.query$.subscribe(function (query) {
            _this.keyword = query;
        });
        this.results = [];
        this.response$ = store.select(fromRoot.getKnowledge);
        this.response$.subscribe(function (res) {
            _this.results = res.results || [];
        });
    }
    RelatedSearchComponent.prototype.ngOnInit = function () {
    };
    return RelatedSearchComponent;
}());
RelatedSearchComponent = __decorate([
    Component({
        selector: 'app-related-search',
        templateUrl: './related-search.component.html',
        styleUrls: ['./related-search.component.css']
    }),
    __metadata("design:paramtypes", [KnowledgeapiService, Router, ActivatedRoute,
        Store, ChangeDetectorRef])
], RelatedSearchComponent);
export { RelatedSearchComponent };
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/related-search/related-search.component.js.map