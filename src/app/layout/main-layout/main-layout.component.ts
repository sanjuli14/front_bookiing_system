import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  template: `
    <div class="min-h-screen bg-slate-50 flex overflow-hidden">
      
      <!-- Sidebar Navigation -->
      <app-sidebar class="hidden md:flex flex-col w-64 bg-dark-bg text-white shadow-xl z-20"></app-sidebar>
      
      <div class="flex-1 flex flex-col h-screen overflow-hidden">
        
        <!-- Top Header -->
        <app-header class="h-16 bg-white shrink-0 border-b border-slate-200 z-10 
                           glass flex items-center px-6 justify-between"></app-header>
        
        <!-- Main Content Area -->
        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 p-6 relative">
          <!-- Background Decoration -->
          <div class="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-primary-50 to-transparent -z-10 rounded-b-3xl"></div>
          
          <router-outlet></router-outlet>
        </main>
        
      </div>
    </div>
  `
})
export class MainLayoutComponent { }
