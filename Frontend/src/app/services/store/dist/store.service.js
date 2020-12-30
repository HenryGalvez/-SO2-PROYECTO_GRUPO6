"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StoreService = void 0;
var core_1 = require("@angular/core");
var baseURL_1 = require("../shared/baseURL");
var StoreService = /** @class */ (function () {
    function StoreService(http) {
        this.http = http;
        this.URL = baseURL_1.baseURL + 'game/';
    }
    StoreService.prototype.getStoreGames = function () {
        return this.http.get(this.URL + 'getgames');
    };
    StoreService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], StoreService);
    return StoreService;
}());
exports.StoreService = StoreService;
