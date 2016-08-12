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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, core_2;
    var Logger, UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            Logger = (function () {
                function Logger() {
                    this.logs = [];
                }
                Logger.prototype.log = function (message) {
                    this.logs.push(message);
                    console.log(message);
                };
                Logger = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Logger);
                return Logger;
            }());
            exports_1("Logger", Logger);
            UserService = (function () {
                function UserService(_logger) {
                    this._logger = _logger;
                } // Внедряем зависимость и сохраняем в приватном поле
                UserService.prototype.getCurrent = function () {
                    this._logger.log('Получение пользователя...');
                    return { username: 'Admin', email: 'admin@example.com' };
                };
                UserService = __decorate([
                    core_1.Injectable(),
                    __param(0, core_2.Optional()), 
                    __metadata('design:paramtypes', [Logger])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=userSvc.js.map