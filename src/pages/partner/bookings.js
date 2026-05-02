import { renderPartnerNav } from '../../components/navbar.js';

export function renderPartnerBookings() {
  const bookings = [
    {
      customer: 'Marcus Johnson',
      contact: '+1 (555) 019-2834',
      contactIcon: 'phone_iphone',
      vehicle: 'Tesla Model 3 LR',
      dates: 'Oct 24 – Oct 28',
      amount: '$380',
      status: 'pending',
      statusLabel: 'Pending Confirmation',
    },
    {
      customer: 'Sarah Richards',
      contact: 'sarah.r@corporate.com',
      contactIcon: 'mail',
      vehicle: 'BMW 3 Series',
      dates: 'Oct 26 – Oct 30',
      amount: '$432',
      status: 'confirmed',
      statusLabel: 'Confirmed',
    },
    {
      customer: 'Elena Gomez',
      contact: '+1 (555) 882-1045',
      contactIcon: 'phone_iphone',
      vehicle: 'Mercedes GLC 300',
      dates: 'Nov 01 – Nov 05',
      amount: '$560',
      status: 'pending',
      statusLabel: 'Pending Confirmation',
    },
  ];

  return `
    <div class="top-bar !px-5 md:pl-72">
      <div class="flex items-center gap-2">
        <span class="material-symbols-outlined text-primary" style="font-size:28px">directions_car</span>
        <span class="text-title-lg font-semibold">RentalHub</span>
      </div>
      <div class="flex-1"></div>
      <button class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container transition-colors">
        <span class="material-symbols-outlined">filter_list</span>
      </button>
    </div>

    <div class="content-wrapper space-y-5">
      <div>
        <h1 class="text-headline-lg">Manage Bookings</h1>
        <p class="text-body-lg text-on-surface-variant">Review, confirm, and process vehicle handoffs.</p>
      </div>

      <!-- Tabs -->
      <div class="flex gap-1 p-1 rounded-xl bg-surface-container-low">
        <button class="flex-1 py-2.5 rounded-lg bg-surface-container-lowest shadow-level-1 text-label-lg font-medium text-primary text-center">All (${bookings.length})</button>
        <button class="flex-1 py-2.5 rounded-lg text-label-lg text-on-surface-variant text-center hover:bg-surface-container transition-colors">Pending</button>
        <button class="flex-1 py-2.5 rounded-lg text-label-lg text-on-surface-variant text-center hover:bg-surface-container transition-colors">Confirmed</button>
      </div>

      <!-- Booking Cards -->
      <div class="space-y-4">
        ${bookings.map(b => `
          <div class="card space-y-4">
            <!-- Customer Info -->
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span class="text-label-lg font-semibold text-primary">${b.customer.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div>
                  <h3 class="text-body-lg font-medium">${b.customer}</h3>
                  <p class="text-body-md text-on-surface-variant flex items-center gap-1">
                    <span class="material-symbols-outlined" style="font-size:14px">${b.contactIcon}</span>
                    ${b.contact}
                  </p>
                </div>
              </div>
              <span class="badge-${b.status === 'pending' ? 'pending' : 'confirmed'} !text-[11px]">${b.statusLabel}</span>
            </div>

            <!-- Vehicle & Trip -->
            <div class="p-3 rounded-xl bg-surface-container-low space-y-2">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-on-surface-variant" style="font-size:18px">directions_car</span>
                  <span class="text-body-md font-medium">${b.vehicle}</span>
                </div>
                <span class="text-label-lg font-semibold text-primary">${b.amount}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-on-surface-variant" style="font-size:18px">date_range</span>
                <span class="text-body-md text-on-surface-variant">${b.dates}</span>
              </div>
            </div>

            <!-- Actions -->
            ${b.status === 'pending' ? `
              <div class="flex gap-2">
                <button class="btn-secondary flex-1 !py-2.5 !text-body-md !text-error !border-error/30 hover:!bg-error/5">
                  <span class="material-symbols-outlined" style="font-size:18px">close</span>
                  Decline
                </button>
                <button class="btn-primary flex-1 !py-2.5 !text-body-md !bg-google-green hover:!bg-google-green/90">
                  <span class="material-symbols-outlined" style="font-size:18px">check</span>
                  Confirm
                </button>
              </div>
            ` : `
              <div class="flex gap-2">
                <button class="btn-secondary flex-1 !py-2.5 !text-body-md">
                  <span class="material-symbols-outlined" style="font-size:18px">chat</span>
                  Message
                </button>
                <button class="btn-primary flex-1 !py-2.5 !text-body-md">
                  <span class="material-symbols-outlined" style="font-size:18px">key</span>
                  Handoff
                </button>
              </div>
            `}
          </div>
        `).join('')}
      </div>
    </div>

    ${renderPartnerNav('bookings')}
  `;
}
