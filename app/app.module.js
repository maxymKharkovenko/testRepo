System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var User, TestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            User = (function () {
                function User() {
                }
                return User;
            }());
            exports_1("User", User);
            TestComponent = (function () {
                function TestComponent() {
                    this.title = 'Login';
                    this.user = {
                        pass: 11,
                        name: 'MAXEM'
                    };
                }
                TestComponent.prototype.login = function () {
                    alert("password: " + this.user.pass + "\n" + "login name: " + this.user.name);
                };
                TestComponent = __decorate([
                    core_1.Component({
                        selector: 'login-component',
                        template: "\n    <h1>{{title}}</h1>\n   \n    <div style=\"padding-bottom: 100px\">\n      <label>Name user: </label>\n      <input [(ngModel)]=\"user.name\" placeholder=\"name\">\n      \n      \n      \n       <label>Password: </label>\n       <input [(ngModel)]=\"user.pass\" placeholder=\"pass\">\n      \n       <button (click)=\"login()\">Login</button>\n    </div>\n   \n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TestComponent);
                return TestComponent;
            }());
            exports_1("TestComponent", TestComponent);
        }
    }
});
//# sourceMappingURL=app.module.js.map