import { renderTopBar } from '../../components/header.js';
import { renderPartnerNav } from '../../components/navbar.js';

export function renderAddVehicle() {
  return `
    ${renderTopBar('Add Vehicle')}

    <div class="content-wrapper space-y-6">
      <div>
        <p class="text-body-lg text-on-surface-variant">
          Register a new asset to your active fleet inventory.
        </p>
      </div>

      <!-- Vehicle Identification -->
      <div class="card space-y-4">
        <h3 class="text-title-lg font-medium flex items-center gap-2">
          <span class="material-symbols-outlined text-primary">directions_car</span>
          Vehicle Identification
        </h3>

        <div class="grid grid-cols-2 gap-3">
          <div class="col-span-2">
            <label class="input-label" for="v-brand">Brand / Make</label>
            <input id="v-brand" class="input-outlined" placeholder="e.g. Tesla" />
          </div>
          <div>
            <label class="input-label" for="v-model">Model</label>
            <input id="v-model" class="input-outlined" placeholder="e.g. Model 3" />
          </div>
          <div>
            <label class="input-label" for="v-year">Year</label>
            <input id="v-year" class="input-outlined" placeholder="e.g. 2024" />
          </div>
          <div>
            <label class="input-label" for="v-plate">License Plate</label>
            <input id="v-plate" class="input-outlined" placeholder="ABC-1234" />
          </div>
          <div>
            <label class="input-label" for="v-color">Color</label>
            <input id="v-color" class="input-outlined" placeholder="e.g. White" />
          </div>
          <div>
            <label class="input-label" for="v-trans">Transmission</label>
            <select id="v-trans" class="input-outlined">
              <option>Automatic</option>
              <option>Manual</option>
            </select>
          </div>
          <div>
            <label class="input-label" for="v-fuel">Fuel Type</label>
            <select id="v-fuel" class="input-outlined">
              <option>Gas</option>
              <option>Electric</option>
              <option>Hybrid</option>
              <option>Diesel</option>
            </select>
          </div>
          <div>
            <label class="input-label" for="v-seats">Seats</label>
            <input id="v-seats" class="input-outlined" type="number" placeholder="5" />
          </div>
          <div>
            <label class="input-label" for="v-vin">VIN Number</label>
            <input id="v-vin" class="input-outlined" placeholder="Vehicle ID" />
          </div>
        </div>
      </div>

      <!-- Legal & Documents -->
      <div class="card space-y-4">
        <h3 class="text-title-lg font-medium flex items-center gap-2">
          <span class="material-symbols-outlined text-primary">folder_managed</span>
          Legal & Insurance Documents
        </h3>
        <p class="text-body-md text-on-surface-variant">Upload required compliance files.</p>

        <!-- Uploaded file -->
        <div class="flex items-center gap-3 p-3 rounded-xl bg-google-green/5 border border-google-green/20">
          <span class="material-symbols-outlined text-google-green">description</span>
          <div class="flex-1 min-w-0">
            <p class="text-body-md font-medium truncate">Vehicle_Registration_2024.pdf</p>
            <p class="text-label-md text-on-surface-variant">Uploaded successfully • 2.4 MB</p>
          </div>
          <span class="material-symbols-outlined text-google-green" style="font-size:20px">check_circle</span>
        </div>

        <!-- Upload area -->
        <div class="upload-area border-2 border-dashed border-outline-variant rounded-xl p-6 text-center hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
          <span class="material-symbols-outlined text-on-surface-variant mb-1" style="font-size:32px">cloud_upload</span>
          <p class="text-body-md font-medium">Click to upload Insurance Policy</p>
          <p class="text-label-md text-on-surface-variant mt-1">or drag and drop PDF, JPG, or PNG (Max 10MB)</p>
        </div>
      </div>

      <!-- Pricing -->
      <div class="card space-y-4">
        <h3 class="text-title-lg font-medium flex items-center gap-2">
          <span class="material-symbols-outlined text-primary">payments</span>
          Pricing
        </h3>

        <div>
          <label class="input-label" for="v-price">Daily Rate (USD)</label>
          <div class="relative">
            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">$</span>
            <input id="v-price" class="input-outlined !pl-8" type="number" placeholder="55" />
          </div>
          <p class="text-label-md text-on-surface-variant mt-1.5">
            <span class="material-symbols-outlined align-text-bottom text-tertiary" style="font-size:14px">lightbulb</span>
            Recommended rate for this segment: $45 - $65
          </p>
        </div>
      </div>

      <!-- Cover Image -->
      <div class="card space-y-4">
        <h3 class="text-title-lg font-medium flex items-center gap-2">
          <span class="material-symbols-outlined text-primary">add_a_photo</span>
          Cover Image
        </h3>

        <div class="upload-area border-2 border-dashed border-outline-variant rounded-xl p-8 text-center hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
          <span class="material-symbols-outlined text-on-surface-variant mb-2" style="font-size:48px">add_photo_alternate</span>
          <p class="text-body-lg font-medium">Upload vehicle photos</p>
          <p class="text-body-md text-on-surface-variant">JPG, PNG up to 10MB each</p>
        </div>
      </div>

      <!-- Submit -->
      <div class="flex gap-3">
        <button class="btn-secondary flex-1">Save as Draft</button>
        <button class="btn-primary flex-1" data-navigate="partner-fleet">
          <span class="material-symbols-outlined" style="font-size:20px">publish</span>
          Publish Vehicle
        </button>
      </div>
    </div>

    ${renderPartnerNav('fleet')}
  `;
}
