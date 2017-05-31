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
import { Http, URLSearchParams, Jsonp, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
export var AutocompleteService = (function () {
    function AutocompleteService(http, jsonp, store) {
        this.http = http;
        this.jsonp = jsonp;
        this.store = store;
        this.server = 'http://lookup.dbpedia.org';
        this.searchURL = this.server + '/api/search/PrefixSearch?';
        this.homepage = 'http://susper.com';
        this.logo = '../images/susper.svg';
    }
    AutocompleteService.prototype.getsearchresults = function (searchquery) {
        var params = new URLSearchParams();
        params.set('QueryString', searchquery);
        // params.set('QueryClass', 'MaxHits=5');
        var headers = new Headers({ 'Accept': 'application/json' });
        var options = new RequestOptions({ headers: headers, search: params });
        return this.http
            .get(this.searchURL, options).map(function (res) {
            return res.json();
        }).catch(this.handleError);
    };
    AutocompleteService.prototype.handleError = function (error) {
        // In some advance version we can include a remote logging of errors
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // Right now we are logging to console itself
        return Observable.throw(errMsg);
    };
    AutocompleteService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, Jsonp, Store])
    ], AutocompleteService);
    return AutocompleteService;
}());
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/autocomplete.service.js.map