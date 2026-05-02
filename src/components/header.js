export function renderTopBar(title, showBack = true) {
  return `
    <header class="top-bar md:pl-72">
      ${showBack ? `
        <button class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container transition-colors" onclick="history.back()">
          <span class="material-symbols-outlined">arrow_back</span>
        </button>
      ` : `
        <div class="w-10 h-10 flex items-center justify-center">
          <span class="material-symbols-outlined text-primary" style="font-size:28px">directions_car</span>
        </div>
      `}
      <h1 class="text-title-lg flex-1">${title}</h1>
      <button class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container transition-colors">
        <span class="material-symbols-outlined">notifications</span>
      </button>
    </header>
  `;
}
