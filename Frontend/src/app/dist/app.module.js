"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var signup_component_1 = require("./components/signup/signup.component");
var signin_component_1 = require("./components/signin/signin.component");
var http_1 = require("@angular/common/http");
var auth_guard_1 = require("./auth.guard");
var token_interceptor_service_1 = require("./services/token-interceptor.service");
var animations_1 = require("@angular/platform-browser/animations");
var input_1 = require("@angular/material/input");
var form_field_1 = require("@angular/material/form-field");
var ngx_toastr_1 = require("ngx-toastr");
var profile_component_1 = require("./components/profile/profile.component");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var datepicker_1 = require("@angular/material/datepicker");
var core_2 = require("@angular/material/core");
var dialog_1 = require("@angular/material/dialog");
var store_component_1 = require("./components/store/store.component");
var game_component_1 = require("./components/game/game.component");
var mygames_component_1 = require("./components/mygames/mygames.component");
var create_games_component_1 = require("./components/create-games/create-games.component");
var table_1 = require("@angular/material/table");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                signup_component_1.SignupComponent,
                signin_component_1.SigninComponent,
                profile_component_1.ProfileComponent,
                store_component_1.StoreComponent,
                game_component_1.GameComponent,
                mygames_component_1.MygamesComponent,
                create_games_component_1.CreateGamesComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                input_1.MatInputModule,
                form_field_1.MatFormFieldModule,
                forms_1.ReactiveFormsModule,
                ngx_toastr_1.ToastrModule.forRoot(),
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                datepicker_1.MatDatepickerModule,
                core_2.MatNativeDateModule,
                dialog_1.MatDialogModule,
                table_1.MatTableModule
            ],
            providers: [
                auth_guard_1.AuthGuard,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: token_interceptor_service_1.TokenInterceptorService,
                    multi: true
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
