````
<div class="col-span-2 mob:col-span-1">
  <div class="insured-table bg-[#F4F4F8] rounded-xl p-6 flex-1 mob:p-3 mt-4">
    <div class="grid grid-cols-4 gap-4 text-sm mob:text-xs font-bold">
      <div class="col-span-1">Plan</div>
      <div class="col-span-1 text-center">Content (HKD)</div>
      <div class="col-span-1 text-center">Personal Liability (HKD)</div>
      <div class="col-span-1 text-center">Annual Premium (HKD)</div>
    </div>

    <mat-radio-group formControlName="selectedPlan" class="w-full block">
      @for (plan of plans; track plan.name) {
        <div class="grid grid-cols-4 gap-4 items-center mt-3 text-sm mob:text-xs">
          <!-- Plan + radio -->
          <div class="flex items-center gap-2">
            <mat-radio-button
              [value]="plan.name"
              [disabled]="!plan.premium || plan.premium === 0">
              {{ plan.name }}
            </mat-radio-button>
          </div>

          <!-- Content -->
          <div class="text-center">
            {{ plan.contents ? (plan.contents | currency:'HKD':'symbol':'1.0-2') : 'N/A' }}
          </div>

          <!-- Liability -->
          <div class="text-center">
            {{ plan.liability ? (plan.liability | currency:'HKD':'symbol':'1.0-2') : 'N/A' }}
          </div>

          <!-- Premium -->
          <div class="text-center">
            {{ plan.premium ? (plan.premium | currency:'HKD':'symbol':'1.0-2') : 'N/A' }}
          </div>
        </div>
      }
    </mat-radio-group>
  </div>
</div>

````
