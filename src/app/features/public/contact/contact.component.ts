import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="w-full bg-slate-50 py-24 px-6 sm:px-12 animate-fade-in">
      <div class="max-w-7xl mx-auto">
        
        <div class="text-center md:text-left mb-16">
          <h2 class="text-3xl font-extrabold text-slate-900 sm:text-4xl">Ponte en Contacto</h2>
          <p class="mt-4 text-lg text-slate-500 max-w-2xl">
            Permítenos ayudarte a planear tu próxima estancia o a responder cualquier inquietud corporativa.
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div class="card p-8 bg-white shadow-xl shadow-slate-200/50">
            <h3 class="text-xl font-bold text-slate-800 mb-6">Envíanos un Mensaje</h3>
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Nombre Completo</label>
                  <input type="text" class="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="John Doe">
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" class="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="john@example.com">
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Asunto</label>
                <select class="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white">
                  <option>Reservaciones</option>
                  <option>Atención al Cliente</option>
                  <option>Relaciones Corporativas</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Mensaje</label>
                <textarea rows="4" class="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="¿Cómo podemos ayudarte?"></textarea>
              </div>
              <button type="button" class="btn btn-primary w-full shadow-glow">Enviar Mensaje</button>
            </form>
          </div>
          
          <div class="space-y-8">
            <div class="flex items-start">
              <div class="flex-shrink-0 h-12 w-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center text-xl">
                <i class="fa-solid fa-map-location-dot"></i>
              </div>
              <div class="ml-6">
                <h4 class="text-lg font-bold text-slate-800">Oficinas Centrales</h4>
                <p class="mt-2 text-slate-500 leading-relaxed">
                  1250 Avenue of the Americas,<br>
                  New York, NY 10020<br>
                  Estados Unidos
                </p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0 h-12 w-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-xl">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div class="ml-6">
                <h4 class="text-lg font-bold text-slate-800">Teléfono Global</h4>
                <p class="mt-2 text-slate-500 leading-relaxed">
                  +1 (800) 555-0199<br>
                  <span class="text-sm">Lunes - Viernes, 9am - 6pm EST</span>
                </p>
              </div>
            </div>
            
             <div class="flex items-start">
              <div class="flex-shrink-0 h-12 w-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-xl">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div class="ml-6">
                <h4 class="text-lg font-bold text-slate-800">Correos Electrónicos</h4>
                <p class="mt-2 text-slate-500 leading-relaxed">
                  reservas&#64;grandresidenz.com<br>
                  corporativo&#64;grandresidenz.com
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  `
})
export class ContactComponent { }
