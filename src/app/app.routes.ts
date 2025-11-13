import { Routes } from '@angular/router';
import { authGuard } from './features/auth/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes')
    .then(m => m.AUTH_ROUTES)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.routes')
    .then(m => m.DASHBOARD_ROUTES),
    canActivate: [authGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.routes')
    .then(m => m.HOME_ROUTES)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
