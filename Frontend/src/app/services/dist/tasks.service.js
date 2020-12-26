"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TasksService = void 0;
var core_1 = require("@angular/core");
var baseURL_1 = require("./shared/baseURL");
var TasksService = /** @class */ (function () {
    function TasksService(http) {
        this.http = http;
        this.URL = baseURL_1.baseURL + 'task/';
    }
    TasksService.prototype.getTasks = function () {
        return this.http.get(this.URL + 'tasks');
    };
    TasksService.prototype.createTask = function (data) {
        return this.http.post(this.URL + 'insert-task', data);
    };
    TasksService.prototype.delteTask = function (data) {
        return this.http.post(this.URL + 'delete-task', data);
    };
    TasksService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TasksService);
    return TasksService;
}());
exports.TasksService = TasksService;
