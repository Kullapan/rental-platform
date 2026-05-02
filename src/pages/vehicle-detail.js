import { renderTopBar } from '../components/header.js';
import { renderBottomNav } from '../components/navbar.js';

export function renderVehicleDetail() {
  // Default dates: today and 3 days from now
  const today = new Date();
  const defaultEnd = new Date(today);
  defaultEnd.setDate(defaultEnd.getDate() + 3);
  const toLocalDate = (d) => d.toISOString().split('T')[0];

  return `
    ${renderTopBar('Vehicle Details')}

    <div class="content-wrapper">
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-8 lg:gap-10 lg:items-start">
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

        <!-- Right Column: Details & Booking (sticky, fits viewport) -->
        <div class="lg:sticky lg:top-[60px] lg:max-h-[calc(100vh-76px)] lg:overflow-y-auto lg:scrollbar-hide space-y-5">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="badge-available">Available</span>
              <span class="text-label-lg text-google-blue font-medium">★ 4.9 (128 reviews)</span>
            </div>
            <h1 class="text-headline-lg font-bold">Toyota RAV4 2024</h1>
            <p class="text-title-lg text-primary font-semibold mt-1">$85.00 <span class="text-body-md text-on-surface-variant font-normal">/ day</span></p>
          </div>

          <!-- Specs Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div class="card !p-3 flex flex-col items-center gap-0.5 text-center bg-surface-container-low border border-outline-variant">
              <span class="material-symbols-outlined text-primary" style="font-size:20px">settings</span>
              <span class="text-label-sm uppercase text-on-surface-variant">Transmission</span>
              <span class="text-body-md font-medium">Automatic</span>
            </div>
            <div class="card !p-3 flex flex-col items-center gap-0.5 text-center bg-surface-container-low border border-outline-variant">
              <span class="material-symbols-outlined text-primary" style="font-size:20px">local_gas_station</span>
              <span class="text-label-sm uppercase text-on-surface-variant">Fuel Type</span>
              <span class="text-body-md font-medium">Hybrid</span>
            </div>
            <div class="card !p-3 flex flex-col items-center gap-0.5 text-center bg-surface-container-low border border-outline-variant">
              <span class="material-symbols-outlined text-primary" style="font-size:20px">airline_seat_recline_normal</span>
              <span class="text-label-sm uppercase text-on-surface-variant">Seats</span>
              <span class="text-body-md font-medium">5 Adults</span>
            </div>
            <div class="card !p-3 flex flex-col items-center gap-0.5 text-center bg-surface-container-low border border-outline-variant">
              <span class="material-symbols-outlined text-primary" style="font-size:20px">ac_unit</span>
              <span class="text-label-sm uppercase text-on-surface-variant">Climate</span>
              <span class="text-body-md font-medium">Dual Zone</span>
            </div>
          </div>

          <div class="space-y-2">
            <h2 class="text-title-medium font-medium">Description</h2>
            <p class="text-body-md text-on-surface-variant leading-relaxed">
              The 2024 Toyota RAV4 offers a perfect blend of efficiency, comfort, and versatile space. Featuring an advanced hybrid powertrain and all-wheel drive, it's ideal for both city commutes and weekend escapes.
            </p>
          </div>

          <div class="space-y-3 pt-4 border-t border-outline-variant">
            <h2 class="text-title-medium font-medium">Host</h2>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden">
                <span class="material-symbols-outlined" style="font-size:26px">person</span>
              </div>
              <div>
                <p class="text-body-lg font-medium">SuperFleet Rentals</p>
                <p class="text-body-small text-on-surface-variant">Joined 2022 • Verified Partner</p>
              </div>
              <button class="btn-text ml-auto">Contact</button>
            </div>
          </div>

          <!-- Desktop Sticky CTA — opens popup instead of navigating -->
          <button id="btn-open-reserve-popup" class="btn-primary w-full !py-4 !text-title-medium !rounded-2xl shadow-level-2 hover:shadow-level-3">
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
      <button id="btn-open-reserve-popup-mobile" class="btn-primary !px-8">Reserve</button>
    </div>

    <!-- ==================== RESERVATION POPUP ==================== -->
    <div id="reserve-popup-overlay" class="reserve-popup-overlay hidden">
      <div class="reserve-popup-container">
        <!-- Close Button -->
        <button id="reserve-popup-close" class="reserve-popup-close" aria-label="Close">
          <span class="material-symbols-outlined">close</span>
        </button>

        <!-- Header -->
        <div class="reserve-popup-header">
          <div class="reserve-popup-icon-ring">
            <span class="material-symbols-outlined" style="font-size:28px">directions_car</span>
          </div>
          <h2 class="text-title-lg font-semibold mt-3">Confirm Reservation</h2>
          <p class="text-body-md text-on-surface-variant">Review your booking details before proceeding</p>
        </div>

        <!-- Vehicle Summary -->
        <div class="reserve-popup-vehicle-card">
          <div class="flex items-center gap-4">
            <div class="w-16 h-14 rounded-xl bg-gradient-to-br from-google-blue/20 to-primary/10 flex items-center justify-center flex-shrink-0">
              <span class="material-symbols-outlined text-primary" style="font-size:32px">directions_car</span>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-title-medium font-medium truncate">Toyota RAV4 2024</h3>
              <p class="text-body-md text-on-surface-variant">Automatic • Hybrid • 5 Seats</p>
            </div>
            <div class="text-right flex-shrink-0">
              <p class="text-title-medium font-bold text-primary">$85.00</p>
              <p class="text-label-md text-on-surface-variant">/ day</p>
            </div>
          </div>
        </div>

        <!-- Date & Time Inputs (24H format) -->
        <div class="reserve-popup-dates">
          <div class="reserve-popup-date-field">
            <label class="input-label flex items-center gap-1.5">
              <span class="material-symbols-outlined text-google-green" style="font-size:18px">play_circle</span>
              Start Date
            </label>
            <div class="flex gap-2">
              <input type="date" id="reserve-start-date" class="input-outlined flex-1" value="${toLocalDate(today)}" />
              <input type="time" id="reserve-start-time" class="input-outlined w-28" value="10:00" step="60" lang="en-GB" />
            </div>
          </div>
          <div class="reserve-popup-date-field">
            <label class="input-label flex items-center gap-1.5">
              <span class="material-symbols-outlined text-google-red" style="font-size:18px">stop_circle</span>
              End Date
            </label>
            <div class="flex gap-2">
              <input type="date" id="reserve-end-date" class="input-outlined flex-1" value="${toLocalDate(defaultEnd)}" />
              <input type="time" id="reserve-end-time" class="input-outlined w-28" value="10:00" step="60" lang="en-GB" />
            </div>
          </div>
        </div>

        <!-- Calculation Summary -->
        <div class="reserve-popup-summary">
          <div class="flex justify-between text-body-lg">
            <span class="text-on-surface-variant">Daily Rate</span>
            <span class="font-medium">$85.00</span>
          </div>
          <div class="flex justify-between text-body-lg">
            <span class="text-on-surface-variant">Duration</span>
            <span id="reserve-duration" class="font-medium">3 days</span>
          </div>
          <div class="reserve-popup-divider"></div>
          <div class="flex justify-between items-center">
            <span class="text-title-medium font-semibold">Total Amount</span>
            <span id="reserve-total" class="text-headline-md font-bold text-primary">$255.00</span>
          </div>
        </div>

        <!-- Error message area -->
        <p id="reserve-popup-error" class="text-body-md text-error text-center hidden"></p>

        <!-- Action Buttons -->
        <div class="reserve-popup-actions">
          <button id="reserve-popup-cancel" class="btn-secondary flex-1">Cancel</button>
          <button id="reserve-popup-confirm" class="btn-primary flex-1 !py-3.5">
            <span class="material-symbols-outlined" style="font-size:20px">check_circle</span>
            Confirm & Continue
          </button>
        </div>
      </div>
    </div>

    ${renderBottomNav('search')}
  `;
}
