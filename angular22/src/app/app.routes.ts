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
    path: 'teams',
    loadComponent: () =>
      import('./views/teams/teams').then((module) => module.Teams),
  },
  {
    path: 'teams/:id',
    loadComponent: () =>
      import('./views/team/team').then((module) => module.Team),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
