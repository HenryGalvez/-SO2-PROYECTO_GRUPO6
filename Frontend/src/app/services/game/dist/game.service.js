"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GameService = void 0;
var core_1 = require("@angular/core");
var baseURL_1 = require("../shared/baseURL");
var GameService = /** @class */ (function () {
    function GameService(http) {
        this.http = http;
        this.URL = baseURL_1.baseURL + 'game/';
    }
    GameService.prototype.insertGame = function (data) {
        return this.http.post(this.URL + 'savegame', data);
    };
    GameService.prototype.getInfoGame = function (data) {
        return this.http.post(this.URL + 'infogame', data);
    };
    GameService.prototype.getMyGames = function (data) {
        return this.http.post(this.URL + 'getmigames', data);
    };
    GameService.prototype.checkGame = function (data) {
        return this.http.post(this.URL + 'checkgame', data);
    };
    GameService.prototype.buyGame = function (data) {
        return this.http.post(this.URL + 'download', data);
    };
    GameService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], GameService);
    return GameService;
}());
exports.GameService = GameService;
