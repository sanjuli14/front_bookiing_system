import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';

export const routes: Routes = [
  // Public Website Routes
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/public/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'about',
        loadComponent: () => import('./features/public/about/about.component').then(m => m.AboutComponent)
      },
      {
        path: 'contact',
        loadComponent: () => import('./features/public/contact/contact.component').then(m => m.ContactComponent)
      }
    ]
  },
  
  // Internal Reservation System Routes (Nested under /admin)
  {
    path: 'admin',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'reservations',
        loadComponent: () => import('./features/reservations/reservation-list/reservation-list.component').then(m => m.ReservationListComponent)
      },
      {
        path: 'reservations/create',
        loadComponent: () => import('./features/reservations/reservation-form/reservation-form.component').then(m => m.ReservationFormComponent)
      },
      {
        path: 'reservations/diagnosis',
        loadComponent: () => import('./features/reservations/financial-diagnosis/financial-diagnosis.component').then(m => m.FinancialDiagnosisComponent)
      },
      {
        path: 'reservations/:id/edit',
        loadComponent: () => import('./features/reservations/reservation-form/reservation-form.component').then(m => m.ReservationFormComponent)
      }
    ]
  },

  // Fallback Route
  {
    path: '**',
    redirectTo: ''
  }
];
