import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'demopage',
    pathMatch: 'full',
  },
  {
    path: 'demopage',
    loadComponent: () => import('./demopage/demopage.page').then( m => m.DemopagePage)
  },
];
