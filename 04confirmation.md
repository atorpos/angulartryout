#### COnfirmaton

````
<div class="grid grid-cols-6 gap-x-4 gap-y-6 xs:grid-cols-5 tablet:grid-cols-4 mob:grid-cols-2">
                <div class="col-span-2">
                    <h6 class="text-[#797979] text-sm mb-1" i18n>
                        Date
                    </h6>
                    <p class="text-lg">
                        {{ fastQuotationForm.controls['startDate'].value | date: 'dd-MM-yyyy' }} to {{
                        fastQuotationForm.controls['endDate'].value | date: 'dd-MM-yyyy' }}
                    </p>
                </div>
                <div class="col-span-2">
                    <h6 class="text-[#797979] text-sm mb-1" i18n="@@HomeInsurancePlanType">
                        Plan Type
                    </h6>
                    <p class="text-lg" i18n="@@HomeInsuranceSelectPlanResult">
                        {{ getPlanName(fastQuotationForm.controls['selectedPlan'].value) }}
                    </p>
                </div>
                <div class="col-span-2">
                    <h6 class="text-[#797979] text-sm mb-1" i18n>
                        Date
                    </h6>
                    <p class="text-lg">
                        {{ fastQuotationForm.controls['startDate'].value | date: 'dd-MM-yyyy' }} to {{
                        fastQuotationForm.controls['endDate'].value | date: 'dd-MM-yyyy' }}
                    </p>
                </div>
                <div class="col-span-2">
                    <h6 class="text-[#797979] text-sm mb-1" i18n>
                        Date
                    </h6>
                    <p class="text-lg">
                        {{ fastQuotationForm.controls['startDate'].value | date: 'dd-MM-yyyy' }} to {{
                        fastQuotationForm.controls['endDate'].value | date: 'dd-MM-yyyy' }}
                    </p>
                </div>
                <div class="col-span-2">
                    <h6 class="text-[#797979] text-sm mb-1" i18n>
                        Date
                    </h6>
                    <p class="text-lg">
                        {{ fastQuotationForm.controls['startDate'].value | date: 'dd-MM-yyyy' }} to {{
                        fastQuotationForm.controls['endDate'].value | date: 'dd-MM-yyyy' }}
                    </p>
                </div>
                <div class="col-span-2">
                    <h6 class="text-[#797979] text-sm mb-1" i18n>
                        Date
                    </h6>
                    <p class="text-lg">
                        {{ fastQuotationForm.controls['startDate'].value | date: 'dd-MM-yyyy' }} to {{
                        fastQuotationForm.controls['endDate'].value | date: 'dd-MM-yyyy' }}
                    </p>
                </div>
            </div>
````
