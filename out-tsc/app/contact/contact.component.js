var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
var ContactComponent = (function () {
    function ContactComponent() {
        this.contactMessage = '';
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.close = function () {
        this.modal.close();
    };
    ContactComponent.prototype.open = function () {
        this.modal.open();
    };
    // check whether messsage contains morthan 100 words
    ContactComponent.prototype.checkValidity = function () {
        if (this.tpnoInput && this.tpnoInput.toString().length >= 10 && this.tpnoInput > 0) {
            this.submitButton.nativeElement.disabled = false;
        }
        else {
            this.submitButton.nativeElement.disabled = true;
        }
        if (this.contactMessage && this.contactMessage.length >= 100) {
            this.submitButton.nativeElement.disabled = false;
        }
        else {
            this.submitButton.nativeElement.disabled = true;
        }
    }; // End checkWordCount()
    return ContactComponent;
}());
__decorate([
    ViewChild('submitButton'),
    __metadata("design:type", Object)
], ContactComponent.prototype, "submitButton", void 0);
__decorate([
    ViewChild('emailInput'),
    __metadata("design:type", Object)
], ContactComponent.prototype, "emailInput", void 0);
__decorate([
    ViewChild('myModal'),
    __metadata("design:type", ModalComponent)
], ContactComponent.prototype, "modal", void 0);
ContactComponent = __decorate([
    Component({
        selector: 'app-contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.css']
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);
export { ContactComponent };
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/contact/contact.component.js.map