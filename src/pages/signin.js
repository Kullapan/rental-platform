export function renderSignIn() {
  return `
    <div class="min-h-screen flex flex-col">
      <!-- Top gradient banner -->
      <div class="bg-gradient-to-br from-[#0058bd] to-[#4285F4] px-6 pt-12 pb-16 text-white rounded-b-3xl">
        <div class="flex items-center gap-2 mb-8">
          <span class="material-symbols-outlined" style="font-size:28px">directions_car</span>
          <span class="text-title-lg font-semibold">RentalHub</span>
        </div>
        <h2 class="text-headline-md font-semibold mb-2">Drive your ambition.</h2>
        <p class="text-body-lg text-white/70">
          Access a premium fleet of vehicles tailored for your journey, whether for business or leisure.
        </p>
      </div>

      <!-- Sign In Form -->
      <div class="flex-1 px-6 -mt-8">
        <div class="card">
          <h1 class="text-headline-lg mb-1">Welcome back</h1>
          <p class="text-body-md text-on-surface-variant mb-6">
            Please enter your details to sign in to your account.
          </p>

          <form class="space-y-4" onsubmit="event.preventDefault()">
            <div>
              <label class="input-label" for="email">Email address</label>
              <input id="email" type="email" class="input-outlined" placeholder="you@example.com" />
            </div>

            <div>
              <label class="input-label" for="password">Password</label>
              <input id="password" type="password" class="input-outlined" placeholder="••••••••" />
            </div>

            <div class="flex items-center justify-between">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="w-4 h-4 rounded border-outline-variant accent-google-blue" />
                <span class="text-body-md">Remember me</span>
              </label>
              <a href="#" class="text-label-lg text-primary hover:underline">Forgot password?</a>
            </div>

            <button class="btn-primary w-full" data-navigate="search">
              <span class="material-symbols-outlined" style="font-size:20px">login</span>
              Sign In
            </button>

            <div class="relative my-6">
              <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-outline-variant"></div></div>
              <div class="relative flex justify-center"><span class="bg-surface-container-lowest px-3 text-label-md text-on-surface-variant">or continue with</span></div>
            </div>

            <button class="w-full flex items-center justify-center gap-3 py-3 rounded-full border border-outline-variant hover:bg-surface-container transition-colors cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
              <span class="text-label-lg text-on-surface">Google</span>
            </button>
          </form>

          <p class="text-center text-body-md text-on-surface-variant mt-6">
            Don't have an account?
            <a href="#signin" class="text-primary font-medium hover:underline">Sign up</a>
          </p>
        </div>
      </div>

      <!-- Partner CTA -->
      <div class="px-6 py-6">
        <div class="rounded-xl border border-outline-variant p-4 flex items-center gap-3 cursor-pointer hover:bg-surface-container-low transition-colors" data-navigate="partner-dashboard">
          <div class="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center">
            <span class="material-symbols-outlined text-on-tertiary-fixed-variant" style="font-size:20px">business</span>
          </div>
          <div class="flex-1">
            <p class="text-label-lg text-on-surface">Are you a fleet partner?</p>
            <p class="text-label-md text-on-surface-variant">Access your B2B dashboard</p>
          </div>
          <span class="material-symbols-outlined text-on-surface-variant">chevron_right</span>
        </div>
      </div>
    </div>
  `;
}
