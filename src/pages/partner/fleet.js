import { renderTopBar } from '../../components/header.js';
import { renderPartnerNav } from '../../components/navbar.js';

export function renderPartnerFleet() {
  const cars = [
    { name: 'Toyota RAV4', status: 'Available', plate: 'K-9921', color: 'White' },
    { name: 'Tesla Model 3', status: 'Booked', plate: 'E-4412', color: 'Midnight Silver' },
    { name: 'BMW 5 Series', status: 'Maintenance', plate: 'L-1108', color: 'Black Sapphire' },
    { name: 'Honda Civic', status: 'Available', plate: 'M-5523', color: 'Rallye Red' },
  ];

  return `
    ${renderTopBar('Fleet Management', false)}

    <div class="content-wrapper">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h1 class="text-headline-small md:text-headline-medium font-bold">Fleet Management</h1>
          <p class="text-body-md text-on-surface-variant">Monitor and manage your vehicle inventory.</p>
        </div>
        
        <div class="flex items-center gap-3">
          <div class="relative flex-1 md:w-64">
            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" style="font-size:20px">search</span>
            <input class="input-outlined !pl-10 !py-2 !text-body-md !rounded-xl" placeholder="Search fleet..." />
          </div>
          <button class="btn-primary !px-4 !py-2 !rounded-xl flex items-center gap-2 whitespace-nowrap" data-navigate="partner-add-vehicle">
            <span class="material-symbols-outlined" style="font-size:20px">add</span>
            <span class="hidden sm:inline">Add Vehicle</span>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        ${cars.map(car => `
          <div class="card !p-0 overflow-hidden flex flex-col sm:flex-row h-full">
            <div class="w-full sm:w-40 bg-surface-container flex items-center justify-center py-8 sm:py-0">
              <span class="material-symbols-outlined text-outline-variant" style="font-size:48px">directions_car</span>
            </div>
            <div class="p-5 flex-1 flex flex-col">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-title-medium font-bold">${car.name}</h3>
                <span class="badge-${car.status.toLowerCase()}">${car.status}</span>
              </div>
              <div class="space-y-1 mb-6">
                <p class="text-body-small text-on-surface-variant">Plate: <span class="text-on-surface font-medium">${car.plate}</span></p>
                <p class="text-body-small text-on-surface-variant">Color: <span class="text-on-surface font-medium">${car.color}</span></p>
              </div>
              <div class="flex gap-2 mt-auto">
                <button class="btn-secondary !flex-1 !py-1.5 !text-body-small !rounded-lg">Manage</button>
                <button class="btn-text !p-2 !rounded-lg">
                  <span class="material-symbols-outlined" style="font-size:20px">more_vert</span>
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <button class="fab md:hidden" data-navigate="partner-add-vehicle">
        <span class="material-symbols-outlined">add</span>
      </button>
    </div>

    ${renderPartnerNav('fleet')}
  `;
}
