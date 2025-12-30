import { Component } from '@angular/core';
import {MenuItem} from '../../models/menu-item';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'sidebar',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  menuItems: MenuItem[] = [
    {label: 'Barberos', icon: 'pi pi-user', route: '/dashboard/register'},
    {label: 'Dashboard', icon: 'pi pi-home', route: '/dashboard'},
    {label: 'About', icon: 'pi pi-info-circle', route: '/dashboard/about'}
  ];
}
