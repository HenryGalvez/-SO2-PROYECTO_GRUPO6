"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateGamesComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var table_1 = require("@angular/material/table");
var CreateGamesComponent = /** @class */ (function () {
    function CreateGamesComponent(gameService, storeService, toastr) {
        this.gameService = gameService;
        this.storeService = storeService;
        this.toastr = toastr;
        this.formG = new forms_1.FormGroup({
            title: new forms_1.FormControl(null, forms_1.Validators.required),
            price: new forms_1.FormControl(null, forms_1.Validators.required),
            description: new forms_1.FormControl(null, forms_1.Validators.required),
            img: new forms_1.FormControl(null, forms_1.Validators.required)
        });
        this.games = [];
        this.dataSource = new table_1.MatTableDataSource(this.games);
        this.displayedColumns = ['id', 'name', 'price'];
    }
    CreateGamesComponent.prototype.ngOnInit = function () {
        this.getAllGames();
    };
    CreateGamesComponent.prototype.getAllGames = function () {
        var _this = this;
        this.storeService.getStoreGames().subscribe(function (res) {
            _this.games = res.data;
            _this.dataSource.data = _this.games;
        }, function (err) {
            _this.toastr.error("Error");
        });
    };
    CreateGamesComponent.prototype.createGame = function () {
        var _this = this;
        if (this.formG.invalid) {
            this.toastr.error("Invalid form");
            return;
        }
        var send = {
            title: this.formG.value.title,
            price: this.formG.value.price,
            img: this.formG.value.img,
            description: this.formG.value.description,
            downloads: 0
        };
        this.gameService.insertGame(send).subscribe(function (res) {
            _this.toastr.success(res.message);
            _this.formG.reset();
            _this.getAllGames();
        }, function (err) {
            _this.toastr.error("Error");
        });
    };
    Object.defineProperty(CreateGamesComponent.prototype, "description", {
        get: function () {
            return this.formG.get('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateGamesComponent.prototype, "title", {
        get: function () {
            return this.formG.get('title');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateGamesComponent.prototype, "price", {
        get: function () {
            return this.formG.get('price');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateGamesComponent.prototype, "img", {
        get: function () {
            return this.formG.get('img');
        },
        enumerable: false,
        configurable: true
    });
    CreateGamesComponent = __decorate([
        core_1.Component({
            selector: 'app-create-games',
            templateUrl: './create-games.component.html',
            styleUrls: ['./create-games.component.css']
        })
    ], CreateGamesComponent);
    return CreateGamesComponent;
}());
exports.CreateGamesComponent = CreateGamesComponent;
