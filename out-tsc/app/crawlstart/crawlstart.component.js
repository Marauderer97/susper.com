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
import { CrawlstartService } from "../crawlstart.service";
import { Router } from "@angular/router";
var CrawlstartComponent = (function () {
    function CrawlstartComponent(crawlstartservice, router) {
        this.crawlstartservice = crawlstartservice;
        this.router = router;
        this.crawlvalues = {
            "crawlingMode": "url",
            "crawlingURL": "",
            "sitemapURL": "",
            "crawlingFile": "",
            "crawlingDepth": 3,
            "crawlingDepthExtension": "",
            "range": "domain",
            "mustmatch": ".*",
            "mustnotmatch": "",
            "ipMustmatch": ".*",
            "ipMustnotmatch": "",
            "indexmustmatch": ".*",
            "indexmustnotmatch": "",
            "deleteold": "off",
            "deleteIfOlderNumber": 0,
            "deleteIfOlderUnit": "day",
            "recrawl": "nodoubles",
            "reloadIfOlderNumber": 0,
            "reloadIfOlderUnit": "day",
            "crawlingDomMaxCheck": "off",
            "crawlingDomMaxPages": 1000,
            "crawlingQ": "off",
            "directDocByURL": "off",
            "storeHTCache": "off",
            "cachePolicy": "if fresh",
            "indexText": "on",
            "countryMustMatchSwitch": "0",
            "countryMustMatchList": "AD,AL,AT,BA,BE,BG,BY,CH,CY,CZ,DE,DK,EE,ES,FI,FO,FR,GG,GI,GR,HR,HU,IE,IM,IS,IT,JE,LI,LT,LU,LV,MC,MD,MK,MT,NL,NO,PL,PT,RO,RU,SE,SI,SJ,SK,SM,TR,UA,UK,VA,YU",
            "indexMedia": "off",
            "collection": "user",
            "agentName": ""
        };
        /*this.crawlstartservice.getcrawldefaults().subscribe(res => {
          this.crawlvalues = res;
        });*/
    }
    ;
    CrawlstartComponent.prototype.startCrawlJob = function () {
        var _this = this;
        this.crawlstartservice.startCrawlJob(this.crawlvalues).subscribe(function (res) {
            alert('Started Crawl Job');
            _this.router.navigate(['/']);
        }, function (err) {
            if (err === 'Unauthorized') {
                alert("Authentication Error");
            }
        });
    };
    ;
    CrawlstartComponent.prototype.ngOnInit = function () {
    };
    return CrawlstartComponent;
}());
CrawlstartComponent = __decorate([
    Component({
        selector: 'app-crawlstart',
        templateUrl: './crawlstart.component.html',
        styleUrls: ['./crawlstart.component.css']
    }),
    __metadata("design:paramtypes", [CrawlstartService, Router])
], CrawlstartComponent);
export { CrawlstartComponent };
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/crawlstart/crawlstart.component.js.map