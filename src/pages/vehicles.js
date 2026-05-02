import { renderTopBar } from '../components/header.js';
import { renderBottomNav } from '../components/navbar.js';

export function renderVehicles() {
  const categories = ['All', 'SUV', 'Sedan', 'Luxury', 'Electric', 'Van'];
  
  return `
    ${renderTopBar('Available Vehicles')}

    <div class="content-wrapper">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 class="text-headline-small md:text-headline-medium font-bold">Available Vehicles</h1>
          <p class="text-body-md text-on-surface-variant">Showing 24 cars matching your criteria</p>
        </div>
        
        <div class="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          ${categories.map(cat => `
            <button class="spec-chip whitespace-nowrap ${cat === 'All' ? 'bg-primary text-white border-primary' : 'hover:bg-surface-container'}">
              ${cat}
            </button>
          `).join('')}
          <button class="spec-chip flex items-center gap-1 border-primary text-primary ml-2">
            <span class="material-symbols-outlined" style="font-size:18px">tune</span>
            Filters
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        ${Array.from({length: 8}).map((_, i) => `
          <div class="card !p-0 overflow-hidden cursor-pointer group" data-navigate="vehicle-detail">
            <div class="h-48 bg-surface-container flex items-center justify-center relative overflow-hidden">
              <span class="material-symbols-outlined text-outline-variant group-hover:scale-110 transition-transform duration-300" style="font-size:80px">
                ${i % 3 === 0 ? 'electric_car' : 'directions_car'}
              </span>
              <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-label-lg font-semibold text-primary shadow-level-1">
                $${[85, 120, 95, 150, 75, 110, 200, 90][i]}/day
              </div>
            </div>
            <div class="p-4">
              <div class="flex items-start justify-between mb-2">
                <div>
                  <h3 class="text-title-medium font-medium">
                    ${['Toyota RAV4', 'BMW 5 Series', 'Tesla Model 3', 'Audi Q7', 'Honda Civic', 'Mercedes C-Class', 'Porsche Taycan', 'Ford Explorer'][i]}
                  </h3>
                  <p class="text-body-small text-on-surface-variant">
                    ${['Compact SUV', 'Luxury Sedan', 'Electric Sedan', 'Full-size SUV', 'Compact Sedan', 'Luxury Sedan', 'Electric Sport', 'Full-size SUV'][i]}
                  </p>
                </div>
                <span class="badge-available">Available</span>
              </div>
              
              <div class="flex flex-wrap gap-2 mt-4">
                <span class="spec-chip !py-0.5 !px-2"><span class="material-symbols-outlined" style="font-size:14px">settings</span> Auto</span>
                <span class="spec-chip !py-0.5 !px-2"><span class="material-symbols-outlined" style="font-size:14px">local_gas_station</span> ${i % 3 === 0 ? 'Electric' : 'Hybrid'}</span>
                <span class="spec-chip !py-0.5 !px-2"><span class="material-symbols-outlined" style="font-size:14px">airline_seat_recline_normal</span> ${[5, 5, 5, 7, 5, 5, 4, 7][i]}</span>
              </div>
              
              <button class="btn-primary w-full mt-6 !py-2 !rounded-xl group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                View Details
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    ${renderBottomNav('search')}
  `;
}
