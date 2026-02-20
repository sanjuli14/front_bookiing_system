import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <!-- Mobile Menu Button (Visible only on small screens) -->
    <button class="md:hidden text-slate-500 hover:text-primary-600 transition-colors">
      <i class="fa-solid fa-bars text-xl"></i>
    </button>
    
    <!-- Search Bar -->
    <div class="hidden md:flex flex-1 max-w-lg items-center ml-4">
      <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <i class="fa-solid fa-magnifying-glass text-slate-400"></i>
        </div>
        <input type="text" 
               class="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition-all shadow-inner" 
               placeholder="Search booking code, clients, hotels...">
        
        <!-- Search Shortcut Hint -->
        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span class="text-xs text-slate-400 font-semibold border border-slate-200 rounded px-1.5 py-0.5 bg-white shadow-sm">⌘K</span>
        </div>
      </div>
    </div>
    
    <!-- Right Context Actions -->
    <div class="flex items-center space-x-4">
      <!-- Fast Actions -->
      <button class="p-2 text-slate-400 hover:text-primary-600 rounded-full hover:bg-primary-50 transition-all focus:outline-none relative">
        <i class="fa-regular fa-bell"></i>
        <span class="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
      </button>
      
      <!-- Profile Dropdown Trigger -->
      <div class="flex items-center space-x-3 pl-4 border-l border-slate-200 cursor-pointer group">
        <div class="flex flex-col text-right hidden lg:block">
          <span class="text-sm font-semibold text-slate-700 group-hover:text-primary-600 transition-colors">Admin User</span>
          <span class="text-[10px] text-slate-500 uppercase font-semibold">Manager</span>
        </div>
        <div class="h-9 w-9 rounded-full bg-gradient-to-tr from-primary-500 to-indigo-500 p-0.5 shadow-sm">
          <div class="h-full w-full rounded-full bg-white flex items-center justify-center">
            <span class="text-primary-600 text-xs font-bold">AD</span>
          </div>
        </div>
        <i class="fa-solid fa-chevron-down text-xs text-slate-400 group-hover:text-primary-600 transition-colors"></i>
      </div>
    </div>
  `
})
export class HeaderComponent { }
