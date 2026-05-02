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
}

window.addEventListener('hashchange', navigate);
window.addEventListener('DOMContentLoaded', navigate);
