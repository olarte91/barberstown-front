import { Routes } from "@angular/router";

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/dashboard')
    .then(m => m.Dashboard),
    children: [
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component')
          .then(m => m.AboutComponent),
      }
    ]
  }
];
