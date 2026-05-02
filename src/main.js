import './style.css';
import { renderWelcome } from './pages/welcome.js';
import { renderSignIn } from './pages/signin.js';
import { renderVerification } from './pages/verification.js';
import { renderSearch } from './pages/search.js';
import { renderVehicles } from './pages/vehicles.js';
import { renderVehicleDetail } from './pages/vehicle-detail.js';
import { renderConfirmBooking } from './pages/confirm-booking.js';
import { renderMyBookings } from './pages/my-bookings.js';
import { renderPartnerDashboard } from './pages/partner/dashboard.js';
import { renderPartnerFleet } from './pages/partner/fleet.js';
import { renderAddVehicle } from './pages/partner/add-vehicle.js';
import { renderPartnerBookings } from './pages/partner/bookings.js';

const routes = {
  '': renderWelcome,
  'welcome': renderWelcome,
  'signin': renderSignIn,
  'verification': renderVerification,
  'search': renderSearch,
  'vehicles': renderVehicles,
  'vehicle-detail': renderVehicleDetail,
  'confirm-booking': renderConfirmBooking,
  'my-bookings': renderMyBookings,
  'partner-dashboard': renderPartnerDashboard,
  'partner-fleet': renderPartnerFleet,
  'partner-add-vehicle': renderAddVehicle,
  'partner-bookings': renderPartnerBookings,
};

function getRoute() {
  const hash = window.location.hash.slice(1) || '';
  return hash.split('?')[0];
}

function navigate() {
  const route = getRoute();
  const content = document.getElementById('app-content');
  const renderer = routes[route] || renderWelcome;

  // Fade transition
  content.style.opacity = '0';
  content.style.transform = 'translateY(8px)';

  setTimeout(() => {
    content.innerHTML = renderer();
    content.style.opacity = '1';
    content.style.transform = 'translateY(0)';

    // Scroll to top
    window.scrollTo(0, 0);

    // Re-bind event listeners
    bindEvents();
  }, 150);
}

function bindEvents() {
  // Navigation links
  document.querySelectorAll('[data-navigate]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = el.getAttribute('data-navigate');
    });
  });

  // File upload areas
  document.querySelectorAll('.upload-area').forEach(area => {
    area.addEventListener('click', () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*,.pdf';
      input.click();
    });
    area.addEventListener('dragover', (e) => {
      e.preventDefault();
      area.classList.add('border-primary', 'bg-primary/5');
    });
    area.addEventListener('dragleave', () => {
      area.classList.remove('border-primary', 'bg-primary/5');
    });
  });

  // ─── Reservation Popup Logic ───
  bindReservePopup();
}

function bindReservePopup() {
  const overlay = document.getElementById('reserve-popup-overlay');
  if (!overlay) return;

  const DAILY_RATE = 85;
  const startDateInput = document.getElementById('reserve-start-date');
  const startTimeInput = document.getElementById('reserve-start-time');
  const endDateInput = document.getElementById('reserve-end-date');
  const endTimeInput = document.getElementById('reserve-end-time');
  const durationEl = document.getElementById('reserve-duration');
  const totalEl = document.getElementById('reserve-total');
  const errorEl = document.getElementById('reserve-popup-error');

  // Helper: open / close popup
  function openPopup() {
    overlay.classList.remove('hidden');
    requestAnimationFrame(() => overlay.classList.add('visible'));
    document.body.style.overflow = 'hidden';
  }
  function closePopup() {
    overlay.classList.remove('visible');
    overlay.addEventListener('transitionend', function handler() {
      overlay.classList.add('hidden');
      overlay.removeEventListener('transitionend', handler);
    });
    document.body.style.overflow = '';
  }

  // Open triggers (desktop + mobile)
  document.getElementById('btn-open-reserve-popup')?.addEventListener('click', openPopup);
  document.getElementById('btn-open-reserve-popup-mobile')?.addEventListener('click', openPopup);

  // Close triggers
  document.getElementById('reserve-popup-close')?.addEventListener('click', closePopup);
  document.getElementById('reserve-popup-cancel')?.addEventListener('click', closePopup);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closePopup();
  });

  // Auto-calculate total when dates change
  function recalculate() {
    errorEl.classList.add('hidden');

    if (!startDateInput.value || !endDateInput.value) {
      durationEl.textContent = '—';
      totalEl.textContent = '$0.00';
      return;
    }

    const start = new Date(startDateInput.value);
    const end = new Date(endDateInput.value);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      durationEl.textContent = '—';
      totalEl.textContent = '$0.00';
      return;
    }

    const diffMs = end - start;
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) {
      durationEl.textContent = 'Invalid';
      totalEl.textContent = '$0.00';
      errorEl.textContent = 'End date must be after start date.';
      errorEl.classList.remove('hidden');
      return;
    }

    const total = diffDays * DAILY_RATE;
    durationEl.textContent = `${diffDays} day${diffDays > 1 ? 's' : ''}`;
    totalEl.textContent = `$${total.toFixed(2)}`;
  }

  // Bind all four inputs
  startDateInput?.addEventListener('change', recalculate);
  startTimeInput?.addEventListener('change', recalculate);
  endDateInput?.addEventListener('change', recalculate);
  endTimeInput?.addEventListener('change', recalculate);

  // Confirm & Continue → save to Google Sheets, then navigate to confirm-booking
  document.getElementById('reserve-popup-confirm')?.addEventListener('click', async (e) => {
    if (!startDateInput.value || !endDateInput.value) {
      errorEl.textContent = 'Please select valid start and end dates.';
      errorEl.classList.remove('hidden');
      return;
    }

    const start = new Date(startDateInput.value);
    const end = new Date(endDateInput.value);
    const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    if (isNaN(start.getTime()) || isNaN(end.getTime()) || diffDays <= 0) {
      errorEl.textContent = 'Please select valid start and end dates.';
      errorEl.classList.remove('hidden');
      return;
    }

    const confirmBtn = e.currentTarget;
    const originalText = confirmBtn.innerHTML;
    confirmBtn.innerHTML = '<span class="material-symbols-outlined animate-spin" style="font-size:20px">sync</span> Saving...';
    confirmBtn.disabled = true;

    try {
      // Dynamically extract vehicle name
      const vehicleNameEl = document.querySelector('.reserve-popup-vehicle-card h3');
      const vehicleName = vehicleNameEl ? vehicleNameEl.textContent.trim() : 'Unknown Vehicle';
      
      // Dynamic array structure - easy to append new fields in the future without changing backend
      const valuesToSave = [
        vehicleName,
        startDateInput.value,
        startTimeInput.value,
        endDateInput.value,
        endTimeInput.value,
        durationEl.textContent,
        totalEl.textContent
      ];

      // Automatically use the local emulator if running on localhost, otherwise use production
      const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const functionUrl = isLocalhost
        ? 'http://127.0.0.1:5001/rental-platform-3d52f/us-central1/saveBooking'
        : 'https://us-central1-rental-platform-3d52f.cloudfunctions.net/saveBooking';

      const response = await fetch(functionUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ values: valuesToSave })
      });

      if (!response.ok) {
        throw new Error('Failed to save booking data to Google Sheets');
      }

      closePopup();
      window.location.hash = 'confirm-booking';

    } catch (err) {
      console.error(err);
      errorEl.textContent = 'Error saving booking. Please try again.';
      errorEl.classList.remove('hidden');
    } finally {
      confirmBtn.innerHTML = originalText;
      confirmBtn.disabled = false;
    }
  });
}

window.addEventListener('hashchange', navigate);
window.addEventListener('DOMContentLoaded', navigate);
