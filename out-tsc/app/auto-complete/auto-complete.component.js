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
import { AutocompleteService } from "../autocomplete.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import * as fromRoot from '../reducers';
export var AutoCompleteComponent = (function () {
    function AutoCompleteComponent(autocompleteservice, route, activatedroute, store, ref) {
        var _this = this;
        this.autocompleteservice = autocompleteservice;
        this.route = route;
        this.activatedroute = activatedroute;
        this.store = store;
        this.ref = ref;
        this.resultsearch = '/search';
        this.query$ = store.select(fromRoot.getquery);
        this.query$.subscribe(function (query) {
            if (query) {
                _this.autocompleteservice.getsearchresults(query).subscribe(function (res) {
                    if (res.results) {
                        _this.results = res.results;
                    }
                    else {
                        _this.results = [];
                    }
                });
            }
        });
    }
    AutoCompleteComponent.prototype.ngOnInit = function () {
    };
    AutoCompleteComponent = __decorate([
        Component({
            selector: 'app-auto-complete',
            templateUrl: './auto-complete.component.html',
            styleUrls: ['./auto-complete.component.css']
        }), 
        __metadata('design:paramtypes', [AutocompleteService, Router, ActivatedRoute, Store, ChangeDetectorRef])
    ], AutoCompleteComponent);
    return AutoCompleteComponent;
}());
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/auto-complete/auto-complete.component.js.map