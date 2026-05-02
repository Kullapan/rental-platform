import { renderTopBar } from '../components/header.js';

export function renderConfirmBooking() {
  return `
    ${renderTopBar('Confirm Booking')}

    <div class="content-wrapper space-y-5">
      <!-- Stepper -->
      <div class="flex items-center gap-1 px-2 py-4">
        <div class="stepper-dot completed">
          <span class="material-symbols-outlined" style="font-size:16px">check</span>
        </div>
        <div class="stepper-line completed"></div>
        <div class="stepper-dot completed">
          <span class="material-symbols-outlined" style="font-size:16px">check</span>
        </div>
        <div class="stepper-line completed"></div>
        <div class="stepper-dot active">3</div>
        <div class="stepper-line"></div>
        <div class="stepper-dot upcoming">4</div>
      </div>
      <div class="flex justify-between text-label-md text-on-surface-variant px-1 -mt-3">
        <span>Selection</span>
        <span>Details</span>
        <span class="text-primary font-medium">Payment</span>
        <span>Confirm</span>
      </div>

      <!-- Vehicle Summary -->
      <div class="card flex gap-4">
        <div class="w-24 h-20 rounded-lg bg-gradient-to-br from-[#0f3460] to-[#1a1a2e] flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-[#4a5568]" style="font-size:40px">electric_car</span>
        </div>
        <div class="flex-1">
          <h3 class="text-title-lg font-medium">Tesla Model 3</h3>
          <p class="text-body-md text-on-surface-variant">Premium Electric Sedan</p>
          <span class="badge-confirmed mt-2">
            <span class="material-symbols-outlined" style="font-size:14px">verified</span>
            Verified
          </span>
        </div>
      </div>

      <!-- Trip Details -->
      <div class="card space-y-4">
        <h3 class="text-title-lg font-medium">Trip Details</h3>

        <div class="flex gap-4">
          <div class="flex flex-col items-center">
            <div class="w-3 h-3 rounded-full bg-google-blue"></div>
            <div class="w-0.5 flex-1 bg-outline-variant my-1"></div>
            <div class="w-3 h-3 rounded-full border-2 border-google-blue"></div>
          </div>
          <div class="flex-1 space-y-4">
            <div>
              <p class="text-label-md text-on-surface-variant">Pick-up</p>
              <p class="text-body-lg font-medium">Oct 24, 2023 • 10:00 AM</p>
              <p class="text-body-md text-on-surface-variant">San Francisco Int. Airport (SFO)</p>
            </div>
            <div>
              <p class="text-label-md text-on-surface-variant">Drop-off</p>
              <p class="text-body-lg font-medium">Oct 27, 2023 • 10:00 AM</p>
              <p class="text-body-md text-on-surface-variant">San Francisco Int. Airport (SFO)</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Payment Method -->
      <div class="card space-y-4">
        <h3 class="text-title-lg font-medium flex items-center gap-2">
          <span class="material-symbols-outlined text-primary">payments</span>
          Payment Method
        </h3>

        <!-- Bank Transfer Option -->
        <div class="p-4 rounded-xl border-2 border-primary bg-primary/5">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
              <div class="w-2.5 h-2.5 rounded-full bg-primary"></div>
            </div>
            <span class="text-label-lg font-medium">Bank Transfer</span>
          </div>
          <p class="text-body-md text-on-surface-variant ml-8">
            Transfer the total amount to our corporate account and upload the receipt below to confirm your booking.
          </p>
        </div>

        <!-- Bank Details -->
        <div class="p-4 rounded-xl bg-surface-container-low space-y-2">
          <p class="text-label-md text-on-surface-variant">Corporate Account Details</p>
          <div class="flex justify-between">
            <span class="text-body-md text-on-surface-variant">Account Name</span>
            <span class="text-body-md font-medium">RentalHub Corp.</span>
          </div>
          <div class="flex justify-between">
            <span class="text-body-md text-on-surface-variant">Account Number</span>
            <span class="text-body-md font-medium">0123-4567-8901</span>
          </div>
          <div class="flex justify-between">
            <span class="text-body-md text-on-surface-variant">Bank</span>
            <span class="text-body-md font-medium">Bank of Innovation</span>
          </div>
        </div>

        <!-- Upload Slip -->
        <div>
          <label class="input-label">Upload Transfer Slip *</label>
          <div class="upload-area border-2 border-dashed border-outline-variant rounded-xl p-6 text-center hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
            <span class="material-symbols-outlined text-on-surface-variant mb-1" style="font-size:32px">cloud_upload</span>
            <p class="text-body-md font-medium">Click to upload or drag and drop</p>
            <p class="text-label-md text-on-surface-variant mt-1">Supported formats: JPEG, PNG, PDF. Max file size: 5MB.</p>
          </div>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="card space-y-3">
        <h3 class="text-title-lg font-medium">Order Summary</h3>

        <div class="space-y-2 text-body-lg">
          <div class="flex justify-between">
            <span class="text-on-surface-variant">Tesla Model 3 × 3 days</span>
            <span>$285.00</span>
          </div>
          <div class="flex justify-between">
            <span class="text-on-surface-variant">Insurance (Basic)</span>
            <span>$45.00</span>
          </div>
          <div class="flex justify-between">
            <span class="text-on-surface-variant">Service Fee</span>
            <span>$15.00</span>
          </div>
          <div class="flex justify-between text-google-green">
            <span>Promo Discount</span>
            <span>-$20.00</span>
          </div>
          <div class="flex justify-between pt-3 border-t border-outline-variant text-title-lg font-semibold">
            <span>Total</span>
            <span class="text-primary">$325.00</span>
          </div>
        </div>
      </div>

      <!-- Terms -->
      <div class="flex items-start gap-3 px-1">
        <input type="checkbox" class="w-5 h-5 mt-0.5 rounded border-outline-variant accent-google-blue" />
        <p class="text-body-md text-on-surface-variant">
          I agree to the <a href="#" class="text-primary hover:underline">Terms and Conditions</a> and
          <a href="#" class="text-primary hover:underline">Privacy Policy</a>
        </p>
      </div>

      <!-- Confirm Button -->
      <button class="btn-primary w-full !py-3.5 !text-title-lg" data-navigate="my-bookings">
        <span class="material-symbols-outlined" style="font-size:22px">lock</span>
        Confirm & Pay $325.00
      </button>
    </div>
  `;
}
