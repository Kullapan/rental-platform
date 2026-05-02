import { renderTopBar } from '../../components/header.js';
import { renderPartnerNav } from '../../components/navbar.js';

export function renderPartnerDashboard() {
  return `
    ${renderTopBar('Partner Dashboard', false)}

    <div class="content-wrapper space-y-8">
      <!-- KPI Overview -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card flex items-center gap-4">
          <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <span class="material-symbols-outlined">garage</span>
          </div>
          <div>
            <p class="text-label-md text-on-surface-variant uppercase tracking-wider">Total Fleet</p>
            <h3 class="text-headline-small font-bold">24 Vehicles</h3>
          </div>
        </div>

        <div class="card flex items-center gap-4">
          <div class="w-12 h-12 rounded-xl bg-google-green/10 flex items-center justify-center text-google-green">
            <span class="material-symbols-outlined">event_available</span>
          </div>
          <div>
            <p class="text-label-md text-on-surface-variant uppercase tracking-wider">Active Bookings</p>
            <h3 class="text-headline-small font-bold">18 Today</h3>
          </div>
        </div>

        <div class="card flex items-center gap-4 md:col-span-2 lg:col-span-1">
          <div class="w-12 h-12 rounded-xl bg-google-blue/10 flex items-center justify-center text-google-blue">
            <span class="material-symbols-outlined">payments</span>
          </div>
          <div>
            <p class="text-label-md text-on-surface-variant uppercase tracking-wider">Revenue (May)</p>
            <h3 class="text-headline-small font-bold">$12,450.00</h3>
          </div>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Revenue Chart Placeholder -->
        <div class="card lg:col-span-2">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-title-lg font-medium">Revenue Trends</h2>
            <select class="bg-transparent text-label-lg text-on-surface-variant border-none focus:ring-0 cursor-pointer">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div class="h-64 bg-surface-container-low rounded-xl flex items-end justify-between p-4 gap-2">
            ${Array.from({length: 7}).map((_, i) => `
              <div class="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors rounded-t-lg relative group cursor-pointer" style="height: ${[40, 65, 45, 80, 55, 90, 75][i]}%">
                <div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface-container-high px-2 py-1 rounded text-label-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-level-1">
                  $${(Math.random() * 2000 + 1000).toFixed(0)}
                </div>
              </div>
            `).join('')}
          </div>
          <div class="flex justify-between mt-4 px-2 text-label-sm text-on-surface-variant">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>

        <!-- Quick Actions & Integrations -->
        <div class="space-y-6">
          <div class="card">
            <h2 class="text-title-medium font-medium mb-4">Google Integrations</h2>
            <div class="space-y-3">
              <button class="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container transition-colors border border-outline-variant text-left">
                <img src="https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png" class="w-6 h-6" />
                <div>
                  <p class="text-label-lg font-medium">Export to Sheets</p>
                  <p class="text-body-small text-on-surface-variant">Sync fleet data automatically</p>
                </div>
              </button>
              <button class="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container transition-colors border border-outline-variant text-left">
                <img src="https://www.gstatic.com/images/branding/product/1x/calendar_2020q4_48dp.png" class="w-6 h-6" />
                <div>
                  <p class="text-label-lg font-medium">Google Calendar</p>
                  <p class="text-body-small text-on-surface-variant">Manage booking schedule</p>
                </div>
              </button>
            </div>
          </div>

          <div class="card">
            <h2 class="text-title-medium font-medium mb-4">Quick Actions</h2>
            <div class="grid grid-cols-2 gap-3">
              <button class="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-primary/5 border border-outline-variant transition-all" data-navigate="partner-add-vehicle">
                <span class="material-symbols-outlined text-primary">add_circle</span>
                <span class="text-label-md">Add Vehicle</span>
              </button>
              <button class="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-primary/5 border border-outline-variant transition-all" data-navigate="partner-bookings">
                <span class="material-symbols-outlined text-primary">pending_actions</span>
                <span class="text-label-md">Requests</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    ${renderPartnerNav('dashboard')}
  `;
}
