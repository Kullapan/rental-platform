export function renderWelcome() {
  return `
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-[#0058bd] via-[#2771df] to-[#4285F4] text-white">
      <!-- Hero Section -->
      <div class="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <div class="w-20 h-20 rounded-3xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-8 shadow-level-2">
          <span class="material-symbols-outlined text-white" style="font-size:40px">directions_car</span>
        </div>

        <h1 class="text-display-lg font-bold tracking-tight mb-4" style="font-size:42px;line-height:48px">
          Rental<span class="font-light">Hub</span>
        </h1>

        <p class="text-body-lg text-white/80 max-w-xs leading-relaxed">
          Premium mobility, seamlessly connected.
        </p>

        <!-- Feature Pills -->
        <div class="flex flex-wrap gap-2 justify-center mt-10">
          <div class="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-label-md">
            <span class="material-symbols-outlined" style="font-size:18px">verified</span>
            Verified Fleet
          </div>
          <div class="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-label-md">
            <span class="material-symbols-outlined" style="font-size:18px">speed</span>
            Instant Booking
          </div>
          <div class="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-label-md">
            <span class="material-symbols-outlined" style="font-size:18px">shield</span>
            Insured Trips
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="px-6 pb-12 space-y-3">
        <button class="w-full py-4 rounded-full bg-white text-[#0058bd] text-label-lg font-semibold shadow-level-2 hover:shadow-level-3 transition-all duration-200 cursor-pointer" data-navigate="signin">
          Get Started
        </button>
        <button class="w-full py-4 rounded-full border border-white/30 text-white text-label-lg font-medium hover:bg-white/10 transition-all duration-200 cursor-pointer" data-navigate="signin">
          I already have an account
        </button>

        <p class="text-center text-label-md text-white/50 mt-4">
          By continuing, you agree to our Terms of Service
        </p>
      </div>
    </div>
  `;
}
