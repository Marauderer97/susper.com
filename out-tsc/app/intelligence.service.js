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
import { URLSearchParams, Http, Jsonp } from "@angular/http";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
var IntelligenceService = (function () {
    function IntelligenceService(http, jsonp, store) {
        this.http = http;
        this.jsonp = jsonp;
        this.store = store;
        this.server = 'http://api.susi.ai';
        this.searchURL = 'http://' + this.server + '/susi/chat.json';
    }
    IntelligenceService.prototype.getintelligentresponse = function (searchquery) {
        var params = new URLSearchParams();
        params.set('q', searchquery);
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp
            .get('http://api.asksusi.com/susi/chat.json', { search: params }).map(function (res) {
            return res.json();
        });
    };
    IntelligenceService.prototype.handleError = function (error) {
        // In some advance version we can include a remote logging of errors
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // Right now we are logging to console itself
        return Observable.throw(errMsg);
    };
    return IntelligenceService;
}());
IntelligenceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, Jsonp, Store])
], IntelligenceService);
export { IntelligenceService };
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/intelligence.service.js.map