import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () => import('./views/home/home').then((module) => module.Home),
  },
  {
    path: 'basic-example',
    loadComponent: () => import('./views/basic-example/basic-example').then((module) => module.BasicExample),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
