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
    var core_1, core_2, core_3, core_4, core_5;
    var ListItem, UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
                core_4 = core_1_1;
                core_5 = core_1_1;
            }],
        execute: function() {
            ListItem = (function () {
                function ListItem() {
                }
                ListItem = __decorate([
                    core_5.Directive({ selector: 'li' }), 
                    __metadata('design:paramtypes', [])
                ], ListItem);
                return ListItem;
            }());
            exports_1("ListItem", ListItem);
            UsersComponent = (function () {
                function UsersComponent(el) {
                    this.isShowCollection = false;
                    el.nativeElement.querySelector('input').focus();
                }
                UsersComponent.prototype.showAllUsers = function () {
                    this.isShowCollection = !this.isShowCollection;
                };
                __decorate([
                    core_3.ContentChildren(ListItem), 
                    __metadata('design:type', core_4.QueryList)
                ], UsersComponent.prototype, "items", void 0);
                UsersComponent = __decorate([
                    core_1.Component({
                        selector: 'users',
                        inputs: ['collection'],
                        templateUrl: '/app/directives/templates/users.tmpl.html',
                    }), 
                    __metadata('design:paramtypes', [core_2.ElementRef])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.js.map