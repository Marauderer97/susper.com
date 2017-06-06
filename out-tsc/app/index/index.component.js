var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
export var IndexComponent = (function () {
    function IndexComponent(route, router) {
        this.route = route;
        this.router = router;
        this.searchdata = {
            query: '',
            verify: false,
            nav: 'filetype,protocol,hosts,authors,collections,namespace,topics,date',
            start: 0,
            indexof: 'off',
            meanCount: '5',
            resource: 'global',
            prefermaskfilter: '',
            maximumRecords: 10,
            timezoneOffset: 0
        };
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.searchdata.timezoneOffset = new Date().getTimezoneOffset();
    };
    IndexComponent.prototype.submit = function () {
        this.router.navigate(['/search'], { queryParams: this.searchdata });
    };
    IndexComponent = __decorate([
        Component({
            selector: 'app-index',
            templateUrl: './index.component.html',
            styleUrls: ['./index.component.css']
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, Router])
    ], IndexComponent);
    return IndexComponent;
}());
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/index/index.component.js.map