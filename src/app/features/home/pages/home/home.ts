// home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit {

  services = [
    {
      name: 'Corte Clásico',
      icon: 'pi pi-user',
      description: 'Corte tradicional con estilo y precisión',
      price: '$25.000',
      duration: '30 min'
    },
    {
      name: 'Barba & Corte',
      icon: 'pi pi-star',
      description: 'Combo completo para lucir impecable',
      price: '$40.000',
      duration: '45 min'
    },
    {
      name: 'Diseño Especial',
      icon: 'pi pi-bolt',
      description: 'Diseños personalizados y modernos',
      price: '$35.000',
      duration: '40 min'
    }
  ];

  stats = [
    { icon: 'pi pi-users', value: '2,500+', label: 'Clientes Satisfechos' },
    { icon: 'pi pi-calendar', value: '5,000+', label: 'Citas Completadas' },
    { icon: 'pi pi-clock', value: '5+', label: 'Años de Experiencia' },
    { icon: 'pi pi-star-fill', value: '4.9', label: 'Calificación Promedio' }
  ];

  features = [
    {
      icon: 'pi pi-check-circle',
      title: 'Profesionales Certificados',
      description: 'Nuestro equipo cuenta con años de experiencia y certificaciones'
    },
    {
      icon: 'pi pi-calendar-plus',
      title: 'Reservas Online',
      description: 'Sistema de agendamiento fácil y rápido disponible 24/7'
    },
    {
      icon: 'pi pi-shield',
      title: 'Productos Premium',
      description: 'Utilizamos solo productos de las mejores marcas del mercado'
    },
    {
      icon: 'pi pi-mobile',
      title: 'Recordatorios Automáticos',
      description: 'Recibe notificaciones de tus citas próximas'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  navigateToBooking(): void {
    this.router.navigate(['/auth/login']);
  }

  scrollToServices(): void {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
