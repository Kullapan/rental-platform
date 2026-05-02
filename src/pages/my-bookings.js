import { renderTopBar } from '../components/header.js';
import { renderBottomNav } from '../components/navbar.js';

export function renderMyBookings() {
  return `
    <div class="top-bar !px-5 md:pl-72">
      <div class="flex items-center gap-2">
        <span class="material-symbols-outlined text-primary" style="font-size:28px">directions_car</span>
        <span class="text-title-lg font-semibold">RentalHub</span>
      </div>
      <div class="flex-1"></div>
      <button class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container transition-colors">
        <span class="material-symbols-outlined">notifications</span>
      </button>
    </div>

    <div class="content-wrapper space-y-6">
      <h1 class="text-headline-lg">My Bookings</h1>

      <!-- Current Rental -->
      <div>
        <h2 class="text-title-lg font-medium mb-3 flex items-center gap-2">
          <span class="material-symbols-outlined text-google-green" style="font-size:20px">radio_button_checked</span>
          Current Rental
        </h2>

        <div class="card !p-0 overflow-hidden border-2 border-google-green/20">
          <div class="h-40 bg-gradient-to-br from-[#0f3460] to-[#1a1a2e] flex items-center justify-center relative">
            <span class="material-symbols-outlined text-[#4a5568]" style="font-size:80px">electric_car</span>
            <span class="absolute top-3 right-3 badge-confirmed">
              <span class="material-symbols-outlined" style="font-size:14px">radio_button_checked</span>
              Active
            </span>
          </div>
          <div class="p-4 space-y-3">
            <div class="flex items-start justify-between">
              <div>
                <h3 class="text-title-lg font-medium">Tesla Model 3</h3>
                <div class="flex gap-2 mt-1">
                  <span class="spec-chip !text-[11px]"><span class="material-symbols-outlined" style="font-size:12px">ev_station</span> Electric</span>
                  <span class="spec-chip !text-[11px]"><span class="material-symbols-outlined" style="font-size:12px">settings</span> Auto</span>
                  <span class="spec-chip !text-[11px]"><span class="material-symbols-outlined" style="font-size:12px">airline_seat_recline_normal</span> 5</span>
                </div>
              </div>
            </div>

            <div class="text-label-md text-on-surface-variant">
              Booking ID: <span class="font-medium text-on-surface">BK-2023-1024</span>
            </div>

            <div class="flex gap-4 py-3 border-t border-outline-variant">
              <div class="flex-1">
                <p class="text-label-md text-on-surface-variant">Pick-up</p>
                <p class="text-body-lg font-medium">Oct 24</p>
                <p class="text-body-md text-on-surface-variant">10:00 AM</p>
                <p class="text-label-md text-on-surface-variant mt-1">SFO Airport, Terminal 2</p>
              </div>
              <div class="flex flex-col items-center justify-center px-2">
                <span class="material-symbols-outlined text-primary">arrow_forward</span>
                <span class="text-label-md text-on-surface-variant">4 days</span>
              </div>
              <div class="flex-1 text-right">
                <p class="text-label-md text-on-surface-variant">Drop-off</p>
                <p class="text-body-lg font-medium">Oct 28</p>
                <p class="text-body-md text-on-surface-variant">2:00 PM</p>
                <p class="text-label-md text-on-surface-variant mt-1">SFO Airport, Terminal 2</p>
              </div>
            </div>

            <div class="flex gap-2">
              <button class="btn-secondary flex-1 !py-2.5 !text-body-md">
                <span class="material-symbols-outlined" style="font-size:18px">support_agent</span>
                Support
              </button>
              <button class="btn-primary flex-1 !py-2.5 !text-body-md">
                <span class="material-symbols-outlined" style="font-size:18px">map</span>
                Directions
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Upcoming -->
      <div>
        <h2 class="text-title-lg font-medium mb-3 flex items-center gap-2">
          <span class="material-symbols-outlined text-google-blue" style="font-size:20px">event</span>
          Upcoming
        </h2>

        <div class="space-y-3">
          <div class="card !p-4 flex items-center gap-4 cursor-pointer" data-navigate="vehicle-detail">
            <div class="w-16 h-14 rounded-lg bg-surface-container flex items-center justify-center flex-shrink-0">
              <span class="material-symbols-outlined text-outline-variant" style="font-size:32px">directions_car</span>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-body-lg font-medium">BMW X5</h3>
              <p class="text-body-md text-on-surface-variant">Nov 15 - Nov 20</p>
              <p class="text-label-md text-on-surface-variant">Downtown Branch</p>
            </div>
            <span class="badge-pending">Upcoming</span>
          </div>

          <div class="card !p-4 flex items-center gap-4 cursor-pointer" data-navigate="vehicle-detail">
            <div class="w-16 h-14 rounded-lg bg-surface-container flex items-center justify-center flex-shrink-0">
              <span class="material-symbols-outlined text-outline-variant" style="font-size:32px">directions_car</span>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-body-lg font-medium">Porsche 911</h3>
              <p class="text-body-md text-on-surface-variant">Dec 01 - Dec 03</p>
              <p class="text-label-md text-on-surface-variant">LAX Airport</p>
            </div>
            <span class="badge-pending">Upcoming</span>
          </div>
        </div>
      </div>
    </div>

    ${renderBottomNav('bookings')}
  `;
}
