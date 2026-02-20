import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <!-- Brand Area -->
    <div class="h-20 flex items-center px-6 border-b border-white/5">
      <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-600 to-indigo-400 flex items-center justify-center mr-3 shadow-glow">
        <i class="fa-solid fa-hotel text-white text-sm"></i>
      </div>
      <div>
        <h1 class="text-sm font-bold tracking-wider text-white">RESERVA<span class="text-primary-400">SYS</span></h1>
        <p class="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mt-0.5">Hotel Bookings</p>
      </div>
    </div>

    <!-- Navigation Area -->
    <nav class="flex-1 overflow-y-auto py-6 px-3 space-y-1 custom-scrollbar">
      
      <div class="px-3 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
        CORE SYSTEM
      </div>
      
      <a routerLink="/admin/dashboard" routerLinkActive="bg-white/10 text-white shadow-sm" [routerLinkActiveOptions]="{exact: true}"
         class="flex items-center px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors group">
        <i class="fa-solid fa-chart-pie w-5 mr-3 text-slate-400 group-hover:text-primary-400 transition-colors"></i>
        Dashboard
      </a>

      <a routerLink="/admin/reservations" routerLinkActive="bg-white/10 text-white shadow-sm"
         class="flex items-center px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors group">
        <i class="fa-solid fa-calendar-check w-5 mr-3 text-slate-400 group-hover:text-primary-400 transition-colors"></i>
        Reservations
      </a>
      
      <a routerLink="/admin/reservations/create" routerLinkActive="bg-white/10 text-white shadow-sm"
         class="flex items-center px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors group">
        <i class="fa-solid fa-plus w-5 mr-3 text-slate-400 group-hover:text-primary-400 transition-colors"></i>
        New Booking
      </a>

      <a routerLink="/admin/reservations/diagnosis" routerLinkActive="bg-white/10 text-white shadow-sm"
         class="flex items-center px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors group">
        <i class="fa-solid fa-stethoscope w-5 mr-3 text-slate-400 group-hover:text-primary-400 transition-colors"></i>
        Finances Diagnosis
      </a>

      <div class="px-3 mt-8 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
        ADMINISTRATION
      </div>
      
      <a href="javascript:void(0)" class="flex items-center px-3 py-2.5 rounded-lg text-sm text-slate-400 opacity-50 cursor-not-allowed">
        <i class="fa-solid fa-file-invoice-dollar w-5 mr-3"></i>
        Invoices
      </a>
      
      <a href="javascript:void(0)" class="flex items-center px-3 py-2.5 rounded-lg text-sm text-slate-400 opacity-50 cursor-not-allowed">
        <i class="fa-solid fa-users w-5 mr-3"></i>
        Customers
      </a>
    </nav>
    
    <!-- User Footer Area -->
    <div class="mt-auto p-4 border-t border-white/5">
      <div class="flex items-center bg-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
        <div class="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center border-2 border-slate-600 shrink-0">
          <span class="text-sm font-semibold text-white">AD</span>
        </div>
        <div class="ml-3 truncate">
          <p class="text-sm font-medium text-white">Admin User</p>
          <p class="text-xs text-slate-400">admin&#64;reservasys.com</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .custom-scrollbar::-webkit-scrollbar { width: 4px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #475569; }
  `]
})
export class SidebarComponent { }
