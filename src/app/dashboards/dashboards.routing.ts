import {Routes} from '@angular/router';
import {Dashboard2Component} from './dashboard2/dashboard2.component';
import {HcpUserComponent} from './hcp-user-list/hcp-user-list.component';

export const DashboardsRoutes: Routes = [
  {
    path: '',
    component: Dashboard2Component,
    data: {
      title: 'Dashboard',
      urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Dashboard' }],
    },
  },
  {
    path: 'home',
    component: Dashboard2Component,
    data: {
      title: 'Dashboard',
      urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Dashboard' }],
    },
    children: [
      {
        path: 'hcpapprovals',
        component: HcpUserComponent,
        data: {
          title: 'Dashboard 2',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Dashboard 2' }],
        },
      }
    ]
  },
  {
    path: 'dashboard',
    component: Dashboard2Component,
    data: {
      title: 'Dashboard',
      urls: [{ title: 'home', url: '/dashboard' }, { title: 'Dashboard' }],
    },
  },
    {
       path: 'hcpapprovals',
      component: HcpUserComponent,
      data: {
        title: 'HCP Un-Approvals List',
        urls: [{ title: 'home', url: '/hcpapprovals' }, { title: 'HCP Approvals' }],
      },
    }
];
