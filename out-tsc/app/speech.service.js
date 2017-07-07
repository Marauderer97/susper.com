var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Rx';
var SpeechService = (function () {
    function SpeechService(zone) {
        this.zone = zone;
    }
    SpeechService.prototype.record = function (lang) {
        var _this = this;
        return Observable.create(function (observe) {
            var webkitSpeechRecognition = window.webkitSpeechRecognition;
            var recognition = new webkitSpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.onresult = function (take) { return _this.zone.run(function () {
                return observe.next(take.results.item(take.results.length - 1).item(0).transcript);
            }); };
            recognition.onerror = function (err) { return observe.error(err); };
            recognition.onend = function () { return observe.complete(); };
            recognition.lang = lang;
            recognition.start();
        });
    };
    return SpeechService;
}());
SpeechService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [NgZone])
], SpeechService);
export { SpeechService };
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/speech.service.js.map