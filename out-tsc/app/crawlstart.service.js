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
import { Http, Jsonp, RequestOptions, URLSearchParams } from "@angular/http";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
var CrawlstartService = (function () {
    function CrawlstartService(http, jsonp, store) {
        this.http = http;
        this.jsonp = jsonp;
        this.store = store;
        this.server = 'yacy.searchlab.eu';
        this.searchURL = 'http://' + this.server + '/solr/select?callback=?';
    }
    CrawlstartService.prototype.getcrawldefaults = function () {
        return this.jsonp.get('http://yacygrid.com:8300/yacy/grid/crawler/defaultValues.json?CALLBACK=JSONP_CALLBACK').map(function (res) {
            res.json();
        });
    };
    CrawlstartService.prototype.handleError = function (error) {
        // In some advance version we can include a remote logging of errors
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // Right now we are logging to console itself
        return Observable.throw(errMsg);
    };
    CrawlstartService.prototype.startCrawlJob = function (crawlvalues) {
        var params = new URLSearchParams();
        for (var key in crawlvalues) {
            if (crawlvalues.hasOwnProperty(key)) {
                params.set(key, crawlvalues[key]);
            }
        }
        params.set('callback', 'JSONP_CALLBACK');
        var options = new RequestOptions({ search: params });
        return this.jsonp
            .get('http://yacy.searchlab.eu/Crawler_p.json', options).map(function (res) {
            res.json();
        });
    };
    return CrawlstartService;
}());
CrawlstartService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, Jsonp, Store])
], CrawlstartService);
export { CrawlstartService };
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/crawlstart.service.js.map