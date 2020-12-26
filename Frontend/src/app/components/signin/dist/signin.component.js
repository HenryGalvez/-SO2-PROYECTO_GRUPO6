"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SigninComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.emailFC = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.email,
        ]);
        this.passwordFC = new forms_1.FormControl('', [
            forms_1.Validators.required,
        ]);
    }
    SigninComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token')) {
            this.router.navigate(['/tasks']);
        }
    };
    SigninComponent.prototype.signIn = function () {
        var _this = this;
        if (this.emailFC.value === "") {
            return;
        }
        if (this.passwordFC.value === "") {
            return;
        }
        this.authService.signIn({ email: this.emailFC.value, password: this.passwordFC.value })
            .subscribe(function (res) {
            _this.toastr.success(res.message);
            localStorage.setItem('token', res.token);
            _this.router.navigate(['/tasks']);
        }, function (err) {
            console.log(err);
            _this.toastr.error(err.error.message);
        });
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'app-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.css']
        })
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
