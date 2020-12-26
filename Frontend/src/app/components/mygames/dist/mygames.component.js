"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MygamesComponent = void 0;
var core_1 = require("@angular/core");
var MygamesComponent = /** @class */ (function () {
    function MygamesComponent(gameService, toastr) {
        this.gameService = gameService;
        this.toastr = toastr;
        this.games = [
            { title: "Cyberpunk 2077", img: "https://sm.ign.com/ign_es/release/c/cyberpunk-/cyberpunk-2077-xbox-one_tnvw.jpg", price: "59.99" },
            { title: "GTA V", img: "https://static.wikia.nocookie.net/esgta/images/1/1b/Car%C3%A1tula_GTA_V.jpg/revision/latest?cb=20130402191528", price: "29.99" },
            { title: "Horizon Zero Dawn", img: "https://cdn2.unrealengine.com/egs-horizonzerodawncompleteedition-guerrilla-s2-1200x1600-371960884.jpg", price: "19.99" },
        ];
    }
    MygamesComponent.prototype.ngOnInit = function () {
    };
    MygamesComponent = __decorate([
        core_1.Component({
            selector: 'app-mygames',
            templateUrl: './mygames.component.html',
            styleUrls: ['./mygames.component.css']
        })
    ], MygamesComponent);
    return MygamesComponent;
}());
exports.MygamesComponent = MygamesComponent;
