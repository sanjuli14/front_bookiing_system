import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="w-full bg-white py-24 px-6 sm:px-12 animate-fade-in">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-slate-900 sm:text-4xl">Quiénes Somos</h2>
        <div class="mt-4 w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        <p class="mt-8 text-lg text-slate-500 text-left leading-relax">
          Fundada en 1998, <strong>Grand Residenz</strong> comenzó con una idea simple: la experiencia de hospitalidad debe ser tan memorable como el destino mismo. Hoy operamos más de 45 propiedades de gran lujo alrededor del globo.
        </p>
        <p class="mt-4 text-lg text-slate-500 text-left leading-relax">
          Nuestra filosofía se centra en la atención absoluta al detalle, combinando una arquitectura vanguardista, un servicio personalizado intuitivo y un compromiso irrompible con la sostenibilidad ambiental de los destinos que tocamos.
        </p>
        
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div class="text-4xl font-extrabold text-primary-600">45+</div>
            <div class="text-sm font-medium text-slate-500 mt-2 uppercase tracking-wide">Propiedades</div>
          </div>
          <div>
            <div class="text-4xl font-extrabold text-primary-600">12</div>
            <div class="text-sm font-medium text-slate-500 mt-2 uppercase tracking-wide">Países</div>
          </div>
          <div>
            <div class="text-4xl font-extrabold text-primary-600">3M+</div>
            <div class="text-sm font-medium text-slate-500 mt-2 uppercase tracking-wide">Huéspedes Anuales</div>
          </div>
          <div>
            <div class="text-4xl font-extrabold text-primary-600">25</div>
            <div class="text-sm font-medium text-slate-500 mt-2 uppercase tracking-wide">Años de Excelencia</div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent { }
