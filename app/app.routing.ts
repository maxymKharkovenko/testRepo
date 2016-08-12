import {TodoComponent} from './directives/todo'

import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: 'todo', component: TodoComponent },
    {
        path: 'heroes',
        component: TodoComponent,
        data: {
            title: 'Heroes List'
        }
    },
    { path: 'hero/:id', component: TodoComponent },
    { path: '**', component: TodoComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);