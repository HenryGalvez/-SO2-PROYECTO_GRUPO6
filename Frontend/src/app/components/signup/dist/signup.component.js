"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignupComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.formG = new forms_1.FormGroup({
            email: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.email
            ]),
            password: new forms_1.FormControl(null, forms_1.Validators.required),
            name: new forms_1.FormControl(null, forms_1.Validators.required),
            username: new forms_1.FormControl(null, forms_1.Validators.required)
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token')) {
            this.router.navigate(['/tasks']);
        }
    };
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        this.authService.signUp(this.formG.value)
            .subscribe(function (res) {
            //console.log(res)
            _this.toastr.success(res.message);
            localStorage.setItem('token', res.token);
            _this.router.navigate(['/tasks']);
        }, function (err) {
            console.log(err);
            _this.toastr.error(err.error.message);
        });
    };
    Object.defineProperty(SignupComponent.prototype, "email", {
        get: function () {
            return this.formG.get('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "password", {
        get: function () {
            return this.formG.get('password');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "name", {
        get: function () {
            return this.formG.get('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "username", {
        get: function () {
            return this.formG.get('username');
        },
        enumerable: false,
        configurable: true
    });
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        })
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
