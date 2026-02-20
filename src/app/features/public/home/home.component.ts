import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="w-full">
      <!-- Hero Section -->
      <section class="relative bg-slate-900 pb-32 pt-40 px-6 sm:px-12 object-cover overflow-hidden" style="min-height: 80vh;">
        <!-- Abstract gradient background instead of image for the mockup -->
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-primary-900 z-0"></div>
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent z-0"></div>
        
        <div class="relative z-10 max-w-4xl mx-auto text-center h-full flex flex-col justify-center mt-12">
          <h1 class="text-4xl sm:text-6xl font-extrabold text-white tracking-tight animate-fade-in-up">
            Descubre el significado del <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-300">verdadero lujo</span>.
          </h1>
          <p class="mt-6 text-xl text-slate-300 max-w-2xl mx-auto animate-fade-in-up" style="animation-delay: 0.1s">
            Ubicaciones exclusivas, servicio inigualable y experiencias diseñadas para exceder tus expectativas en cada estadía.
          </p>
          <div class="mt-10 animate-fade-in-up" style="animation-delay: 0.2s">
            <button class="btn bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg shadow-xl shadow-black/20 font-bold rounded-full">Explore Nuestros Hoteles</button>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-24 bg-slate-50 relative -mt-24 z-20 px-6">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="card p-8 bg-white text-center shadow-xl shadow-slate-200/50 transform hover:-translate-y-2 transition-transform">
              <div class="w-16 h-16 mx-auto bg-primary-50 text-primary-600 rounded-full flex items-center justify-center text-2xl mb-6">
                <i class="fa-solid fa-umbrella-beach"></i>
              </div>
              <h3 class="text-xl font-bold text-slate-800">Locaciones Premium</h3>
              <p class="text-slate-500 mt-4">Nuestros hoteles están situados en los destinos más exóticos y exclusivos alrededor del planeta.</p>
            </div>
            
            <div class="card p-8 bg-white text-center shadow-xl shadow-slate-200/50 transform hover:-translate-y-2 transition-transform">
              <div class="w-16 h-16 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-2xl mb-6">
                <i class="fa-solid fa-spa"></i>
              </div>
              <h3 class="text-xl font-bold text-slate-800">Servicios SPA</h3>
              <p class="text-slate-500 mt-4">Relájate y rejuvenece con nuestros galardonados centros de bienestar integral.</p>
            </div>
            
            <div class="card p-8 bg-white text-center shadow-xl shadow-slate-200/50 transform hover:-translate-y-2 transition-transform">
              <div class="w-16 h-16 mx-auto bg-green-50 text-green-600 rounded-full flex items-center justify-center text-2xl mb-6">
                <i class="fa-solid fa-utensils"></i>
              </div>
              <h3 class="text-xl font-bold text-slate-800">Gastronomía</h3>
              <p class="text-slate-500 mt-4">Disfruta de menús elaborados por chefs Michelin en nuestros múltiples restaurantes temáticos.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class HomeComponent { }
