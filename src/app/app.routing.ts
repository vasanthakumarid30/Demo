import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import {RegisterComponent} from './register/register.component';
import {ForgotComponent} from './forgot/forgot.component';
import { ChatbotListComponent } from './chatbot-list/chatbot-list.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: FullComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            },
            {
                path: 'material',
                loadChildren: () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
            },
            {
                path: 'home',
                loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule)
            },
            {
                path: 'chatbot-dashboard',
                loadChildren: () => import('./chatbot-dashboard/chatbot-dashboard.module').then(m => m.ChatbotDashboardModule)
            },

        ]
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'chatbot',
        component: ChatbotListComponent,
    },
    /*{
      path: 'register',
      component: RegisterComponent,
    },
    {
      path: 'forgot',
      component: ForgotComponent,
    }*/
];
