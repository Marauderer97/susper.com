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
var InfoboxComponent = (function () {
    function InfoboxComponent(knowledgeservice, route, activatedroute, store, ref) {
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
        this.response$ = store.select(fromRoot.getKnowledge);
        this.response$.subscribe(function (res) {
            if (res.results) {
                if (res.results[0]) {
                    if (res.results[0].label.toLowerCase().includes(_this.keyword.toLowerCase())) {
                        _this.results = res.results;
                    }
                    else {
                        _this.results = [];
                    }
                }
            }
            else {
                _this.results = [];
            }
        });
    }
    InfoboxComponent.prototype.ngOnInit = function () {
    };
    return InfoboxComponent;
}());
InfoboxComponent = __decorate([
    Component({
        selector: 'app-infobox',
        templateUrl: './infobox.component.html',
        styleUrls: ['./infobox.component.css']
    }),
    __metadata("design:paramtypes", [KnowledgeapiService, Router, ActivatedRoute,
        Store, ChangeDetectorRef])
], InfoboxComponent);
export { InfoboxComponent };
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/infobox/infobox.component.js.map