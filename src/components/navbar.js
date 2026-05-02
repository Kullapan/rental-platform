export function renderBottomNav(active = 'home') {
  const items = [
    { id: 'home', icon: 'home', label: 'Home', route: 'search' },
    { id: 'search', icon: 'search', label: 'Search', route: 'vehicles' },
    { id: 'bookings', icon: 'directions_car', label: 'My Bookings', route: 'my-bookings' },
    { id: 'profile', icon: 'person', label: 'Profile', route: 'verification' },
  ];

  const desktopItems = items;

  return `
    <!-- Mobile Bottom Nav -->
    <nav class="bottom-nav">
      ${items.map(item => `
        <a class="bottom-nav-item ${active === item.id ? 'active' : ''}" data-navigate="${item.route}">
          <span class="nav-indicator">
            <span class="material-symbols-outlined" style="font-size:24px">${item.icon}</span>
          </span>
          <span class="text-label-md">${item.label}</span>
        </a>
      `).join('')}
    </nav>

    <!-- Desktop Sidebar -->
    <aside class="desktop-nav">
      <div class="flex items-center gap-2 mb-10 px-4">
        <span class="material-symbols-outlined text-primary" style="font-size:32px">directions_car</span>
        <span class="text-title-lg font-bold">RentalHub</span>
      </div>
      
      <div class="flex-1">
        ${desktopItems.map(item => `
          <a class="desktop-nav-item ${active === item.id ? 'active' : ''}" data-navigate="${item.route}">
            <span class="material-symbols-outlined">${item.icon}</span>
            <span>${item.label}</span>
          </a>
        `).join('')}
      </div>

      <div class="pt-6 border-t border-outline-variant">
        <a class="desktop-nav-item" data-navigate="partner-dashboard">
          <span class="material-symbols-outlined">business</span>
          <span>Partner Portal</span>
        </a>
      </div>
    </aside>
  `;
}

export function renderPartnerNav(active = 'dashboard') {
  const items = [
    { id: 'dashboard', icon: 'dashboard', label: 'Dashboard', route: 'partner-dashboard' },
    { id: 'fleet', icon: 'garage', label: 'Fleet', route: 'partner-fleet' },
    { id: 'bookings', icon: 'event_note', label: 'Bookings', route: 'partner-bookings' },
    { id: 'profile', icon: 'person', label: 'Profile', route: 'verification' },
  ];

  return `
    <!-- Mobile Bottom Nav -->
    <nav class="bottom-nav">
      ${items.map(item => `
        <a class="bottom-nav-item ${active === item.id ? 'active' : ''}" data-navigate="${item.route}">
          <span class="nav-indicator">
            <span class="material-symbols-outlined" style="font-size:24px">${item.icon}</span>
          </span>
          <span class="text-label-md">${item.label}</span>
        </a>
      `).join('')}
    </nav>

    <!-- Desktop Sidebar -->
    <aside class="desktop-nav">
      <div class="flex items-center gap-2 mb-10 px-4">
        <span class="material-symbols-outlined text-primary" style="font-size:32px">directions_car</span>
        <span class="text-title-lg font-bold">RentalHub</span>
      </div>
      
      <div class="flex-1">
        ${items.map(item => `
          <a class="desktop-nav-item ${active === item.id ? 'active' : ''}" data-navigate="${item.route}">
            <span class="material-symbols-outlined">${item.icon}</span>
            <span>${item.label}</span>
          </a>
        `).join('')}
      </div>

      <div class="pt-6 border-t border-outline-variant">
        <a class="desktop-nav-item" data-navigate="search">
          <span class="material-symbols-outlined">person_pin</span>
          <span>Customer View</span>
        </a>
      </div>
    </aside>
  `;
}
