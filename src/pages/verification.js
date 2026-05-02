import { renderTopBar } from '../components/header.js';
import { renderBottomNav } from '../components/navbar.js';

export function renderVerification() {
  return `
    ${renderTopBar('Profile', false)}

    <div class="content-wrapper space-y-6">
      <!-- Profile Header -->
      <div class="flex items-center gap-4 py-4">
        <div class="w-16 h-16 rounded-full bg-gradient-to-br from-google-blue to-primary flex items-center justify-center text-white text-headline-lg">
          AM
        </div>
        <div>
          <h2 class="text-title-lg font-semibold">Alex Mitchell</h2>
          <p class="text-body-md text-on-surface-variant">alex.mitchell@example.com</p>
        </div>
      </div>

      <!-- Verification Status -->
      <div class="card space-y-4">
        <h3 class="text-title-lg font-medium flex items-center gap-2">
          <span class="material-symbols-outlined text-primary">verified_user</span>
          Verification Status
        </h3>

        <div class="flex items-center justify-between py-3 border-b border-outline-variant">
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-on-surface-variant">email</span>
            <span class="text-body-lg">Email Address</span>
          </div>
          <span class="badge-confirmed">
            <span class="material-symbols-outlined" style="font-size:14px">check_circle</span>
            Verified
          </span>
        </div>

        <div class="flex items-center justify-between py-3">
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-on-surface-variant">badge</span>
            <span class="text-body-lg">Identity Document</span>
          </div>
          <span class="badge-pending">
            <span class="material-symbols-outlined" style="font-size:14px">warning</span>
            Action Required
          </span>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="card !p-0 divide-y divide-outline-variant">
        <a class="flex items-center gap-4 px-card py-4 hover:bg-surface-container-low transition-colors cursor-pointer">
          <span class="material-symbols-outlined text-on-surface-variant">person</span>
          <span class="flex-1 text-body-lg">Personal Details</span>
          <span class="material-symbols-outlined text-on-surface-variant">chevron_right</span>
        </a>
        <a class="flex items-center gap-4 px-card py-4 hover:bg-surface-container-low transition-colors cursor-pointer">
          <span class="material-symbols-outlined text-on-surface-variant">folder_open</span>
          <span class="flex-1 text-body-lg">Documents & Verification</span>
          <span class="material-symbols-outlined text-on-surface-variant">chevron_right</span>
        </a>
        <a class="flex items-center gap-4 px-card py-4 hover:bg-surface-container-low transition-colors cursor-pointer">
          <span class="material-symbols-outlined text-on-surface-variant">payment</span>
          <span class="flex-1 text-body-lg">Payment Methods</span>
          <span class="material-symbols-outlined text-on-surface-variant">chevron_right</span>
        </a>
      </div>

      <!-- Document Upload Section -->
      <div class="card space-y-5">
        <h3 class="text-title-lg font-medium">Documents & Verification</h3>
        <p class="text-body-md text-on-surface-variant">
          Upload required documents to complete your profile and unlock full booking capabilities.
        </p>

        <!-- Alert -->
        <div class="flex gap-3 p-4 rounded-xl bg-tertiary-fixed/20 border border-tertiary-fixed-dim/30">
          <span class="material-symbols-outlined text-tertiary" style="font-size:20px">warning</span>
          <div>
            <p class="text-label-lg text-on-tertiary-fixed-variant font-medium">Identity Verification Required</p>
            <p class="text-body-md text-on-surface-variant mt-1">
              To rent vehicles on our platform, we need to verify your identity. Please upload a valid, unexpired government-issued ID.
            </p>
          </div>
        </div>

        <!-- Driver's License Upload -->
        <div>
          <h4 class="text-label-lg font-medium mb-1">Driver's License / ID Card</h4>
          <p class="text-body-md text-on-surface-variant mb-3">
            Upload a clear, legible photo of your valid driver's license or passport. Ensure all text and your photo are clearly visible without glare.
          </p>
          <div class="upload-area border-2 border-dashed border-outline-variant rounded-xl p-8 text-center hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
            <span class="material-symbols-outlined text-on-surface-variant mb-2" style="font-size:40px">cloud_upload</span>
            <p class="text-body-lg font-medium text-on-surface">Drag and drop files here</p>
            <p class="text-body-md text-on-surface-variant">or</p>
            <button class="btn-secondary mt-2 text-body-md !py-2 !px-4">Browse Files</button>
            <p class="text-label-md text-on-surface-variant mt-3">Supported formats: JPG, PNG, PDF (Max 10MB)</p>
          </div>
        </div>

        <!-- Business Registration -->
        <div>
          <h4 class="text-label-lg font-medium mb-1">Business Registration (B2B Partners Only)</h4>
          <p class="text-body-md text-on-surface-variant mb-3">
            If you are renting on behalf of a company, upload your business registration documents to access corporate rates and billing.
          </p>
          <div class="upload-area border-2 border-dashed border-outline-variant rounded-xl p-6 text-center hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
            <span class="material-symbols-outlined text-on-surface-variant mb-1" style="font-size:32px">upload_file</span>
            <p class="text-body-md font-medium text-on-surface">Upload Document</p>
            <p class="text-label-md text-on-surface-variant mt-1">PDF or JPG up to 10MB</p>
          </div>
        </div>
      </div>
    </div>

    ${renderBottomNav('profile')}
  `;
}
