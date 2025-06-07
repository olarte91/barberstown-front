import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { BarberosPageComponent } from './pages/barberos/barberos-page.component.component';
import { ClientesPageComponent } from './pages/clientes-page/clientes-page.component';
import { CitasPageComponent } from './pages/citas-page/citas-page.component';
import { VentasPageComponent } from './pages/ventas-page/ventas-page.component';
import { AgregarFormComponent } from './components/agregar-form/agregar-form.component';
import { LoginComponent } from './pages/login/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'barberos',
    component: BarberosPageComponent
  },
  {
    path: 'clientes',
    component: ClientesPageComponent
  },
  {
    path: 'citas',
    component: CitasPageComponent
  },
  {
    path: 'ventas',
    component: VentasPageComponent
  },
  {
    path: 'agregar-form',
    component: AgregarFormComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
