"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//components
var signin_component_1 = require("./components/signin/signin.component");
var signup_component_1 = require("./components/signup/signup.component");
var auth_guard_1 = require("./auth.guard");
var profile_component_1 = require("./components/profile/profile.component");
var store_component_1 = require("./components/store/store.component");
var mygames_component_1 = require("./components/mygames/mygames.component");
var create_games_component_1 = require("./components/create-games/create-games.component");
var routes = [
    {
        path: 'store',
        component: store_component_1.StoreComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'newgame',
        component: create_games_component_1.CreateGamesComponent,
        canActivate: [auth_guard_1.AuthGuard]
    }, {
        path: 'mygames',
        component: mygames_component_1.MygamesComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'signup',
        component: signup_component_1.SignupComponent
    },
    {
        path: 'signin',
        component: signin_component_1.SigninComponent
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: '**',
        redirectTo: '/store',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
