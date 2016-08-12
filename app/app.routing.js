System.register(['./directives/todo', '@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var todo_1, router_1;
    var appRoutes, appRoutingProviders, routing;
    return {
        setters:[
            function (todo_1_1) {
                todo_1 = todo_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: 'todo', component: todo_1.TodoComponent },
                {
                    path: 'heroes',
                    component: todo_1.TodoComponent,
                    data: {
                        title: 'Heroes List'
                    }
                },
                { path: 'hero/:id', component: todo_1.TodoComponent },
                { path: '**', component: todo_1.TodoComponent }
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.routing.js.map