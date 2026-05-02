import { renderTopBar } from '../components/header.js';
import { renderBottomNav } from '../components/navbar.js';

export function renderVehicleDetail() {
  return `
    ${renderTopBar('Vehicle Details')}

    <div class="content-wrapper">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <!-- Left Column: Media -->
        <div class="space-y-4">
          <div class="aspect-video bg-surface-container rounded-3xl flex items-center justify-center relative overflow-hidden group">
            <span class="material-symbols-outlined text-outline-variant group-hover:scale-105 transition-transform duration-500" style="font-size:120px">directions_car</span>
            <div class="absolute bottom-6 right-6 flex gap-2">
              <button class="w-10 h-10 rounded-full bg-white/90 shadow-level-1 flex items-center justify-center hover:bg-white transition-colors">
                <span class="material-symbols-outlined">zoom_in</span>
              </button>
            </div>
          </div>
          
          <div class="grid grid-cols-4 gap-4">
            ${Array.from({length: 4}).map(() => `
              <div class="aspect-square bg-surface-container-low rounded-xl flex items-center justify-center cursor-pointer border-2 border-transparent hover:border-primary transition-colors">
                <span class="material-symbols-outlined text-outline-variant" style="font-size:24px">image</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Right Column: Details & Booking -->
        <div class="space-y-8">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="badge-available">Available</span>
              <span class="text-label-lg text-google-blue font-medium">★ 4.9 (128 reviews)</span>
            </div>
            <h1 class="text-display-small font-bold">Toyota RAV4 2024</h1>
            <p class="text-headline-small text-primary font-semibold mt-1">$85.00 <span class="text-body-lg text-on-surface-variant font-normal">/ day</span></p>
          </div>

          <!-- Specs Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            <div class="card !p-4 flex flex-col items-center gap-1 text-center bg-surface-container-low border border-outline-variant">
              <span class="material-symbols-outlined text-primary">settings</span>
              <span class="text-label-sm uppercase text-on-surface-variant">Transmission</span>
              <span class="text-body-md font-medium">Automatic</span>
            </div>
            <div class="card !p-4 flex flex-col items-center gap-1 text-center bg-surface-container-low border border-outline-variant">
              <span class="material-symbols-outlined text-primary">local_gas_station</span>
              <span class="text-label-sm uppercase text-on-surface-variant">Fuel Type</span>
              <span class="text-body-md font-medium">Hybrid</span>
            </div>
            <div class="card !p-4 flex flex-col items-center gap-1 text-center bg-surface-container-low border border-outline-variant">
              <span class="material-symbols-outlined text-primary">airline_seat_recline_normal</span>
              <span class="text-label-sm uppercase text-on-surface-variant">Seats</span>
              <span class="text-body-md font-medium">5 Adults</span>
            </div>
            <div class="card !p-4 flex flex-col items-center gap-1 text-center bg-surface-container-low border border-outline-variant">
              <span class="material-symbols-outlined text-primary">ac_unit</span>
              <span class="text-label-sm uppercase text-on-surface-variant">Climate</span>
              <span class="text-body-md font-medium">Dual Zone</span>
            </div>
          </div>

          <div class="space-y-4">
            <h2 class="text-title-lg font-medium">Description</h2>
            <p class="text-body-lg text-on-surface-variant leading-relaxed">
              The 2024 Toyota RAV4 offers a perfect blend of efficiency, comfort, and versatile space. Featuring an advanced hybrid powertrain and all-wheel drive, it's the ideal companion for both city commutes and weekend escapes.
            </p>
          </div>

          <div class="space-y-4 pt-6 border-t border-outline-variant">
            <h2 class="text-title-lg font-medium">Host</h2>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden">
                <span class="material-symbols-outlined" style="font-size:32px">person</span>
              </div>
              <div>
                <p class="text-title-medium font-medium">SuperFleet Rentals</p>
                <p class="text-body-small text-on-surface-variant">Joined 2022 • Verified Partner</p>
              </div>
              <button class="btn-text ml-auto">Contact</button>
            </div>
          </div>

          <!-- Desktop Sticky CTA (Placeholder, using a simple button for now) -->
          <button class="btn-primary w-full !py-4 !text-title-medium !rounded-2xl shadow-level-2 hover:shadow-level-3" data-navigate="confirm-booking">
            Reserve This Vehicle
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Sticky Footer (Hidden on Desktop) -->
    <div class="fixed bottom-0 left-0 w-full bg-surface border-t border-outline-variant p-4 flex items-center justify-between md:hidden z-50">
      <div>
        <p class="text-label-sm text-on-surface-variant">Total Price</p>
        <p class="text-title-lg font-bold">$85.00 <span class="text-body-small font-normal">/ day</span></p>
      </div>
      <button class="btn-primary !px-8" data-navigate="confirm-booking">Reserve</button>
    </div>

    ${renderBottomNav('search')}
  `;
}
