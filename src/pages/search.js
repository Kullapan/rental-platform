import { renderTopBar } from '../components/header.js';
import { renderBottomNav } from '../components/navbar.js';

export function renderSearch() {
  return `
    ${renderTopBar('RentalHub', false)}

    <div class="content-wrapper space-y-8">
      <!-- Hero Search -->
      <div class="pt-2">
        <h1 class="text-headline-lg md:text-display-sm mb-1 font-bold">Find your perfect drive</h1>
        <p class="text-body-lg text-on-surface-variant">Explore top-rated vehicles for your next adventure.</p>
      </div>

      <!-- Search Bar -->
      <div class="relative max-w-2xl">
        <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
        <input class="input-outlined !pl-12 !rounded-full shadow-level-1 focus:shadow-level-2" placeholder="Search by location, brand, or model..." />
      </div>

      <!-- Quick Filters & Date Selection -->
      <div class="flex flex-col lg:flex-row gap-6">
        <div class="flex-1">
          <label class="input-label">Filter by Type</label>
          <div class="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button class="spec-chip whitespace-nowrap bg-primary text-white !border-primary">All</button>
            <button class="spec-chip whitespace-nowrap hover:bg-surface-container transition-colors">SUV</button>
            <button class="spec-chip whitespace-nowrap hover:bg-surface-container transition-colors">Sedan</button>
            <button class="spec-chip whitespace-nowrap hover:bg-surface-container transition-colors">Electric</button>
            <button class="spec-chip whitespace-nowrap hover:bg-surface-container transition-colors">Luxury</button>
          </div>
        </div>

        <div class="flex-1 flex gap-3">
          <div class="flex-1">
            <label class="input-label">Pick-up Date</label>
            <input type="date" class="input-outlined !py-2 text-body-md" />
          </div>
          <div class="flex-1">
            <label class="input-label">Drop-off Date</label>
            <input type="date" class="input-outlined !py-2 text-body-md" />
          </div>
        </div>
      </div>

      <!-- Active Promotions -->
      <div>
        <h2 class="text-title-lg font-medium mb-4">Active Promotions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="promo-card bg-gradient-to-r from-[#1a73e8] to-[#4285F4]" data-navigate="vehicles">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-title-lg font-semibold mb-1">Weekend Getaway</h3>
                <p class="text-body-md text-white/80">Save 20% on SUV rentals this weekend.</p>
              </div>
              <span class="text-headline-lg font-bold">20%</span>
            </div>
            <button class="mt-3 flex items-center gap-1 text-label-lg text-white/90 hover:text-white cursor-pointer">
              Claim Offer
              <span class="material-symbols-outlined" style="font-size:18px">arrow_forward</span>
            </button>
          </div>

          <div class="promo-card bg-gradient-to-r from-[#0d652d] to-[#34A853]" data-navigate="vehicles">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-title-lg font-semibold mb-1">Go Electric</h3>
                <p class="text-body-md text-white/80">Free charging included with all EV rentals.</p>
              </div>
              <span class="material-symbols-outlined" style="font-size:32px">ev_station</span>
            </div>
            <button class="mt-3 flex items-center gap-1 text-label-lg text-white/90 hover:text-white cursor-pointer">
              Explore EVs
              <span class="material-symbols-outlined" style="font-size:18px">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Recommended Cars -->
      <div>
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-title-lg font-medium">Recommended Cars</h2>
          <a class="btn-text !px-2 !py-1 text-body-md" data-navigate="vehicles">View All</a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="card !p-0 overflow-hidden cursor-pointer hover:shadow-level-2 transition-all" data-navigate="vehicle-detail">
            <div class="h-44 bg-gradient-to-br from-surface-container to-surface-container-high flex items-center justify-center relative">
              <span class="material-symbols-outlined text-outline-variant" style="font-size:80px">directions_car</span>
              <span class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-label-lg font-semibold text-primary">$85/day</span>
            </div>
            <div class="p-4">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="text-title-lg font-medium">Toyota RAV4</h3>
                  <p class="text-body-md text-on-surface-variant">Compact SUV</p>
                </div>
                <span class="badge-available">Available</span>
              </div>
              <div class="flex gap-2 mt-3">
                <span class="spec-chip"><span class="material-symbols-outlined" style="font-size:14px">settings</span> Auto</span>
                <span class="spec-chip"><span class="material-symbols-outlined" style="font-size:14px">local_gas_station</span> Hybrid</span>
                <span class="spec-chip"><span class="material-symbols-outlined" style="font-size:14px">airline_seat_recline_normal</span> 5</span>
              </div>
            </div>
          </div>

          <div class="card !p-0 overflow-hidden cursor-pointer hover:shadow-level-2 transition-all" data-navigate="vehicle-detail">
            <div class="h-44 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center relative">
              <span class="material-symbols-outlined text-[#4a5568]" style="font-size:80px">directions_car</span>
              <span class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-label-lg font-semibold text-primary">$120/day</span>
            </div>
            <div class="p-4">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="text-title-lg font-medium">BMW 5 Series</h3>
                  <p class="text-body-md text-on-surface-variant">Luxury Sedan</p>
                </div>
                <span class="badge-available">Available</span>
              </div>
              <div class="flex gap-2 mt-3">
                <span class="spec-chip"><span class="material-symbols-outlined" style="font-size:14px">settings</span> Auto</span>
                <span class="spec-chip"><span class="material-symbols-outlined" style="font-size:14px">local_gas_station</span> Gas</span>
                <span class="spec-chip"><span class="material-symbols-outlined" style="font-size:14px">airline_seat_recline_normal</span> 5</span>
              </div>
            </div>
          </div>

          <div class="card !p-0 overflow-hidden cursor-pointer hover:shadow-level-2 transition-all" data-navigate="vehicle-detail">
            <div class="h-44 bg-gradient-to-br from-[#0f3460] to-[#1a1a2e] flex items-center justify-center relative">
              <span class="material-symbols-outlined text-[#4a5568]" style="font-size:80px">electric_car</span>
              <span class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-label-lg font-semibold text-primary">$95/day</span>
            </div>
            <div class="p-4">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="text-title-lg font-medium">Tesla Model 3</h3>
                  <p class="text-body-md text-on-surface-variant">Standard Range EV</p>
                </div>
                <span class="badge-available">Available</span>
              </div>
              <div class="flex gap-2 mt-3">
                <span class="spec-chip"><span class="material-symbols-outlined" style="font-size:14px">settings</span> Auto</span>
                <span class="spec-chip"><span class="material-symbols-outlined" style="font-size:14px">ev_station</span> Electric</span>
                <span class="spec-chip"><span class="material-symbols-outlined" style="font-size:14px">airline_seat_recline_normal</span> 5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    ${renderBottomNav('home')}
  `;
}
