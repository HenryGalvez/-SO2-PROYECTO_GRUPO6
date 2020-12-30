"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.GameComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var GameComponent = /** @class */ (function () {
    function GameComponent(toastr, gameService, dialogRef, data) {
        this.toastr = toastr;
        this.gameService = gameService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.game = { title: "Cyberpunk 2077", img: "https://sm.ign.com/ign_es/release/c/cyberpunk-/cyberpunk-2077-xbox-one_tnvw.jpg", price: "59.99", downloads: "5,000,000", description: "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. Assume the role of V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you. Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City. Take the riskiest job of your life and go after a prototype implant that is the key to immortality.", stat: "5.0" };
        this.game = this.data;
    }
    GameComponent.prototype.ngOnInit = function () {
    };
    GameComponent.prototype.getInfoGame = function (data) {
        var _this = this;
        this.gameService.getInfoGame(data).subscribe(function (res) {
            _this.game = res.data;
        }, function (err) {
            _this.toastr.error(err.error.message);
        });
    };
    GameComponent.prototype.getBuyGame = function () {
        var _this = this;
        this.gameService.buyGame({ game: this.game }).subscribe(function (res) {
            _this.toastr.success(res.message);
            _this.dialogRef.close();
        }, function (err) {
            console.log(err);
            _this.toastr.error(err.error.message);
        });
    };
    GameComponent = __decorate([
        core_1.Component({
            selector: 'app-game',
            templateUrl: './game.component.html',
            styleUrls: ['./game.component.css']
        }),
        __param(3, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;
