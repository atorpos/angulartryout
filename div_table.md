````
<div class="col-span-2 mob:col-span-1">
                <div class="insured-table bg-[#F4F4F8] rounded-xl p-6 flex-1 mob:p-3 mt-4">
                    <div class="grid grid-cols-4 gap-4 mob:gap-4">
                        <h6 class="text-sm mob:text-xs col-span-4 mob:col-span-3">Plan</h6>
                        <h6 class="insured-table-title text-sm mob:text-xs col-span-1 mob:col-span-2 text-center">Content (HKD)</h6>
                        <h6 class="text-sm mob:text-xs col-span-4 mob:col-span-3">Personal liability (HKD)</h6>
                        <h6 class="text-sm mob:text-xs col-span-4 mob:col-span-3">Annual premium (HKD)</h6>


                        <mat-radio-group formControlName="selectedPlan">
                            @for (plan of plans; track plan.name) {
                            <div class="grid grid-cols-5 gap-x-4 col-span-5 form-input">
                                <div class="col-span-3 mob:col-span-2">
                                    <mat-radio-button [value]="plan.name"
                                        [disabled]="!plan.premium || plan.premium === 0">{{
                                        plan.name }}</mat-radio-button>
                                    <div>{{ plan.contents? (plan.contents | currency:'HKD':'symbol':'1.0-2'): 'N/A' }}
                                    </div>
                                    <div>{{ plan.liability? (plan.liability | currency:'HKD':'symbol':'1.0-2'): 'N/A' }}
                                    </div>
                                    <div>{{ plan.premium? (plan.premium | currency:'HKD':'symbol':'1.0-2'): 'N/A' }}
                                    </div>
                                </div>
                            </div>
                            }
                        </mat-radio-group>
                    </div>
                </div>
            </div>

````
