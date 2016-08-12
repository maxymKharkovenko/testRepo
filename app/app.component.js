"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var login_1 = require('./directives/login/login');
var customHeader_1 = require('./directives/customHeader/customHeader');
var customTable_1 = require('./directives/customTable/customTable');
var todo_1 = require('./directives/todo/todo');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour s Heroes';
        this.data = {
            users: [{ pass: 11, name: 'Mr. Nice' },
                { pass: 20, name: 'Tornado' }]
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '/app/pages/main.html',
            directives: [login_1.LoginComponent, customHeader_1.HeaderComponent, customTable_1.TableComponent, todo_1.TodoComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map