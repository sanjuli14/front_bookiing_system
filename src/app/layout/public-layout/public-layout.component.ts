import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      <!-- Public Navbar -->
      <header class="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-20 items-center">
            
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center cursor-pointer" routerLink="/">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-indigo-500 flex items-center justify-center mr-3 shadow-glow-primary">
                <i class="fa-solid fa-hotel text-white text-lg"></i>
              </div>
              <div>
                <h1 class="text-xl font-bold tracking-tight text-slate-800">Grand Residenz</h1>
                <p class="text-[10px] text-primary-600 uppercase tracking-widest font-semibold mt-0.5">Luxury Hotel Chain</p>
              </div>
            </div>
            
            <!-- Navigation Links -->
            <nav class="hidden md:flex space-x-8">
              <a routerLink="/" [routerLinkActiveOptions]="{exact: true}" routerLinkActive="text-primary-600 font-semibold" class="text-sm text-slate-600 hover:text-primary-600 transition-colors">Inicio</a>
              <a routerLink="/about" routerLinkActive="text-primary-600 font-semibold" class="text-sm text-slate-600 hover:text-primary-600 transition-colors">Quiénes Somos</a>
              <a routerLink="/contact" routerLinkActive="text-primary-600 font-semibold" class="text-sm text-slate-600 hover:text-primary-600 transition-colors">Contactanos</a>
            </nav>
            
            <!-- System Access Action -->
            <div class="flex items-center">
              <a routerLink="/admin/dashboard" class="btn btn-primary text-sm shadow-glow shrink-0 group">
                Sistema de Reservas <i class="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-grow">
        <router-outlet></router-outlet>
      </main>
      
      <!-- Minimal Public Footer -->
      <footer class="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-center text-sm">
        <p>&copy; 2026 Grand Residenz Group. Todos los derechos reservados.</p>
        <div class="mt-4 flex justify-center space-x-4">
          <a href="#" class="hover:text-white transition-colors"><i class="fa-brands fa-twitter"></i></a>
          <a href="#" class="hover:text-white transition-colors"><i class="fa-brands fa-facebook"></i></a>
          <a href="#" class="hover:text-white transition-colors"><i class="fa-brands fa-instagram"></i></a>
        </div>
      </footer>
    </div>
  `
})
export class PublicLayoutComponent { }
