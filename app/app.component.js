System.register(['angular2/core', './directives/mainHeader', './app.module', './directives/todo', './directives/users', './services/userSvc'], function(exports_1, context_1) {
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
    var core_1, mainHeader_1, app_module_1, todo_1, users_1, userSvc_1, userSvc_2;
    var USERS, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mainHeader_1_1) {
                mainHeader_1 = mainHeader_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            },
            function (users_1_1) {
                users_1 = users_1_1;
            },
            function (userSvc_1_1) {
                userSvc_1 = userSvc_1_1;
                userSvc_2 = userSvc_1_1;
            }],
        execute: function() {
            USERS = [
                { pass: 11, name: 'Mr. Nice' },
                { pass: 20, name: 'Tornado' }
            ];
            AppComponent = (function () {
                /*
                 constructor(userService: UserService) {
                 this.user = userService.getCurrent();
                 }*/
                function AppComponent() {
                    this.newTodo = "";
                    this.todos = [];
                    this.data = {
                        users: USERS
                    };
                    this.userSvc = userSvc_1.UserService;
                }
                AppComponent.prototype.testService = function () {
                    console.log(this.userSvc);
                };
                AppComponent.prototype.addTodo = function (event) {
                    var todoObj = {
                        newTodo: this.newTodo,
                        complete: false
                    };
                    this.todos.push(todoObj);
                    this.newTodo = '';
                    event.preventDefault();
                };
                AppComponent.prototype.deleteTodo = function (index) {
                    this.todos.splice(index, 1);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        providers: [userSvc_1.UserService, userSvc_2.Logger],
                        templateUrl: '/app/pages/main.html',
                        directives: [app_module_1.TestComponent, todo_1.TodoComponent, users_1.UsersComponent, mainHeader_1.HeaderComponent],
                        declarations: [
                            todo_1.TodoComponent,
                        ],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map