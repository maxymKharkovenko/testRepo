"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var login_1 = require('./directives/login/login');
var customTable_1 = require('./directives/customTable/customTable');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'home',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }, {
        path: 'contact',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_1.LoginComponent
    },
    {
        path: 'about',
        component: customTable_1.TableComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map