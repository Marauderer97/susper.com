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
import { Observable } from 'rxjs';
import { Http, URLSearchParams, Jsonp, Headers, RequestOptions } from '@angular/http';
import { Store } from "@ngrx/store";
var AutocorrectService = (function () {
    function AutocorrectService(http, jsonp, store) {
        this.http = http;
        this.jsonp = jsonp;
        this.store = store;
        this.server = 'https://montanaflynn-spellcheck.p.mashape.com';
        this.searchURL = this.server + '/check/';
        this.homepage = 'http://susper.com';
        this.logo = '../images/susper.svg';
    }
    AutocorrectService.prototype.getsearchresults = function (searchquery) {
        var params = new URLSearchParams();
        params.set('text', searchquery);
        var headers = new Headers();
        headers.set('Accept', 'application/json');
        headers.set('X-Mashape-Key', 'MNy1dDOsyMmshBCz70BwQ51vfeuzp19LReMjsnKtccAQkuB9WM');
        var options = new RequestOptions({ headers: headers, search: params });
        return this.http
            .get(this.searchURL, options).map(function (res) {
            return res.json();
        }).catch(this.handleError);
    };
    AutocorrectService.prototype.handleError = function (error) {
        // In some advance version we can include a remote logging of errors
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // Right now we are logging to console itself
        return Observable.throw(errMsg);
    };
    return AutocorrectService;
}());
AutocorrectService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, Jsonp, Store])
], AutocorrectService);
export { AutocorrectService };
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/autocorrect.service.js.map