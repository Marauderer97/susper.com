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
import { ThemeService } from '../theme.service';
var ThemeComponent = (function () {
    function ThemeComponent(themeService) {
        this.themeService = themeService;
    }
    ThemeComponent.prototype.ngOnInit = function () {
    };
    ThemeComponent.prototype.darkTheme = function () {
        this.themeService.backgroundColor = '#FFFFFF';
        this.themeService.titleColor = '#050404';
        this.themeService.linkColor = '#7E716E';
        this.themeService.descriptionColor = '#494443';
    };
    ThemeComponent.prototype.defaultTheme = function () {
        this.themeService.backgroundColor = '#FFFFFF';
        this.themeService.titleColor = '#1a0dab';
        this.themeService.linkColor = '#006621';
        this.themeService.descriptionColor = '#545454';
    };
    ThemeComponent.prototype.basicTheme = function () {
        this.themeService.backgroundColor = '#FFFFFF';
        this.themeService.titleColor = '#1a0dab';
        this.themeService.linkColor = '#494443';
        this.themeService.descriptionColor = '#7E716E';
    };
    ThemeComponent.prototype.contrastTheme = function () {
        this.themeService.backgroundColor = '#FFFFFF';
        this.themeService.titleColor = '#1a0dab';
        this.themeService.linkColor = '#006621';
        this.themeService.descriptionColor = '#800000';
    };
    ThemeComponent.prototype.terminalTheme = function () {
        this.themeService.backgroundColor = '#000000';
        this.themeService.titleColor = '#00ff00';
        this.themeService.linkColor = '#FFFFFF  ';
        this.themeService.descriptionColor = '#F1C40F';
    };
    return ThemeComponent;
}());
ThemeComponent = __decorate([
    Component({
        selector: 'app-theme',
        templateUrl: './theme.component.html',
        styleUrls: ['./theme.component.css']
    }),
    __metadata("design:paramtypes", [ThemeService])
], ThemeComponent);
export { ThemeComponent };
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/theme/theme.component.js.map