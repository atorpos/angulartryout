## Issue:

### pull issues

````
this.fastQuotationForm.get('areaRange')?.valueChanges.subscribe(val => {
      this.fastQuotationForm.get('rangeSelection')?.setValue(this.fastpagecal.getSizeRange(val, this.constructionclass[0])[0]);
    });
````


### FIrst page

````
onErrorDialog(errDetails: string): void {
    this.messageDialogService.openMessageDialog({
      status: Status.Error,
      title: $localize`Alert`,
      message: $localize`{{errDetails}} data cannot retrieve.`,
      actionButtonList: [
        {
          actionType: ActionType.Confirm,
          text: $localize`Close`
        }
      ]
    })
    return
  }
````

### second page info

````
{
    "surname": "chan",
    "givenName": "tai man",
    "gender": "Male",
    "dateOfBirth": "1999-09-08T16:00:00.000Z",
    "idType": "HKID",
    "idNo": "K960670A",
    "maritalStatus": "Single",
    "countryCode": "852",
    "mobileNo": "98765432",
    "email": "example@gmail.com",
    "correspondenceAddress": "Address",
    "addressType": "Address",
    "addressForm": {
        "searchYourAddress": "BLK A, FOCAL INDUSTRIAL CENTRE, 21 MAN LOK STREET, Kowloon City District, KOWLOON",
        "flatType": "Flat",
        "flat": "23",
        "floor": "1",
        "blockType": "Block",
        "block": "BLK A",
        "building": "",
        "estate": "FOCAL INDUSTRIAL CENTRE",
        "estatePhase": "",
        "street": "MAN LOK STREET",
        "village": "",
        "dd": null,
        "lot": null,
        "streetNo": "21",
        "district": "Kowloon City District",
        "subDistrict": null,
        "displayDistrict": "Kowloon City District",
        "area": "Kowloon"
    },
    "postOfficeBoxForm": {
        "postOffice": "",
        "poBoxNo": ""
    },
    "lineLength": null,
    "maxNumberOfLines": null,
    "unstructuredAddress": null
}
````

### fast quoatation

````
{
    "startDate": "2025-06-03T08:10:58.385Z",
    "endDate": "2026-06-02T08:10:58.471Z",
    "areaRange": null,
    "rangeSelection": "2",
    "selectedPlan": "Gold Plan",
    "selectClass": "Saleable area",
    "annualPremium": 1530,
    "contentLimit": 750000,
    "libilityLimit": 8000000,
    "selectRange": "561-800"
}
````


#### try this
````
const selectedPlan = this.planeDetailsResult.map(detailPlan => detailPlan.plans)[this.fastQuotationForm.get('rangeSelection')?.value];
const goldPremium = selectedPlan['Gold Plan'].premium;
````


#### get another value

````
{
    "Gold Plan": {
        "premium": 2280
    },
    "Platinum Plan": {
        "premium": 2600
    }
}
````

```
this.planeDetailsResult.map(detailPlan => detailPlan.plans)[this.fastQuotationForm.get('rangeSelection')?.value]
```
#### get values

````
{
    "surname": "Chan",
    "givenName": "Tai Man",
    "gender": "Male",
    "dateOfBirth": "1999-09-08T16:00:00.000Z",
    "idType": "HKID",
    "idNo": "K960670A",
    "maritalStatus": "Single",
    "countryCode": "852",
    "mobileNo": "98776543",
    "email": "example@gmail.com",
    "correspondenceAddress": "Address",
    "addressType": "Address",
    "addressForm": {
        "searchYourAddress": "BLK A, FOCAL INDUSTRIAL CENTRE, 21 MAN LOK STREET, Kowloon City District, KOWLOON",
        "flatType": "Flat",
        "flat": "13",
        "floor": "43",
        "blockType": "Block",
        "block": "BLK A",
        "building": "",
        "estate": "FOCAL INDUSTRIAL CENTRE",
        "estatePhase": "",
        "street": "MAN LOK STREET",
        "village": "",
        "dd": null,
        "lot": null,
        "streetNo": "21",
        "district": "Kowloon City District",
        "subDistrict": null,
        "displayDistrict": "Kowloon City District",
        "area": "Kowloon"
    },
    "postOfficeBoxForm": {
        "postOffice": "",
        "poBoxNo": ""
    },
    "lineLength": null,
    "maxNumberOfLines": null,
    "unstructuredAddress": null
}
````
```
this.insuredInformationForm.controls['address'].setValue(this.proposerInformationForm.controls['AddressForm']);
```


#### result

````
this.newBusinessService.getUnstructuredAddress(getUnstructuredAddressRequest).subscribe({
  next: (result) => {
    this.personalProtectorForm.controls['proposerInformationForm'].get("lineLength")?.setValue(lineLength);
    this.personalProtectorForm.controls['proposerInformationForm'].get("maxNumberOfLines")?.setValue(maxNumberOfLines);
    this.personalProtectorForm.controls['proposerInformationForm'].get("unstructuredAddress")?.setValue(result.addressLines);

    this.personalProtectorForm.controls['insuredInformationForm'].controls['surname'].setValue(
      this.personalProtectorForm.controls['proposerInformationForm'].controls['surname'].value
    );
    this.personalProtectorForm.controls['insuredInformationForm'].controls['givenName'].setValue(
      this.personalProtectorForm.controls['proposerInformationForm'].controls['givenName'].value
    );
    this.personalProtectorForm.controls['insuredInformationForm'].controls['gender'].setValue(
      this.personalProtectorForm.controls['proposerInformationForm'].controls['gender'].value
    );
    this.personalProtectorForm.controls['insuredInformationForm'].controls['dateOfBirth'].setValue(
      this.personalProtectorForm.controls['proposerInformationForm'].controls['dateOfBirth'].value
    );
    this.personalProtectorForm.controls['insuredInformationForm'].controls['idType'].setValue(
      this.personalProtectorForm.controls['proposerInformationForm'].controls['idType'].value
    );
    this.personalProtectorForm.controls['insuredInformationForm'].controls['idNo'].setValue(
      this.personalProtectorForm.controls['proposerInformationForm'].controls['idNo'].value
    );

    this.insuredInformation.setIsView();
    stepper.next();
  },
  error: () => {
    this.messageDialogService.openMessageDialog({
      status: Status.Error,
      title: $localize`Error`,
      message: $localize`Fail to get unstructured address, please try again.`,
      actionButtonList: [
        {
          actionType: Status.Error,
          text: $localize`Close`
        }
      ]
    });
  }
});
````
#### subscribe to updated

````
this.newBusinessService.getUnstructuredAddress(getUnstructuredAddressRequest).subscribe(
                (result) => {
                  this.personalProtectorForm.controls['proposerInformationForm'].get("lineLength")?.setValue(lineLength);
                  this.personalProtectorForm.controls['proposerInformationForm'].get("maxNumberOfLines")?.setValue(maxNumberOfLines);
                  this.personalProtectorForm.controls['proposerInformationForm'].get("unstructuredAddress")?.setValue(result.addressLines);

                  this.personalProtectorForm.controls['insuredInformationForm'].controls['surname'].setValue(this.personalProtectorForm.controls['proposerInformationForm'].controls['surname'].value);
                  this.personalProtectorForm.controls['insuredInformationForm'].controls['givenName'].setValue(this.personalProtectorForm.controls['proposerInformationForm'].controls['givenName'].value);
                  this.personalProtectorForm.controls['insuredInformationForm'].controls['gender'].setValue(this.personalProtectorForm.controls['proposerInformationForm'].controls['gender'].value);
                  this.personalProtectorForm.controls['insuredInformationForm'].controls['dateOfBirth'].setValue(this.personalProtectorForm.controls['proposerInformationForm'].controls['dateOfBirth'].value);
                  this.personalProtectorForm.controls['insuredInformationForm'].controls['idType'].setValue(this.personalProtectorForm.controls['proposerInformationForm'].controls['idType'].value);
                  this.personalProtectorForm.controls['insuredInformationForm'].controls['idNo'].setValue(this.personalProtectorForm.controls['proposerInformationForm'].controls['idNo'].value);
                  this.insuredInformation.setIsView();
                  stepper.next();

                },
                (error) => {
                  this.messageDialogService.openMessageDialog({
                    status: Status.Error,
                    title: $localize`Error`,
                    message: $localize`Fail to get unstructured address, please try again.`,
                    actionButtonList: [
                      {
                        actionType: Status.Error,
                        text: $localize`Close`
                      }
                    ]
                  })
                }
              )
````


#### html code

````
<div class="col-span-2 mob:col-span-1">
    <div class="col-span-5 tablet:col-span-7 rounded-lg bg-[#F4F4F8] py-3 px-4" style="margin-bottom: 10px;">
        <h5 class="mb-3 font-normal text-primary-purple">Quotation</h5>
        <div class="mob:w-full" style="margin: 10px 0px"> <div class="flex gap-x-2 mb-2"> <p class="text-[#8181AE]">Premium</p> <p class="text-[#E11F27] line-through">HKD 523.1</p> </div> <h4 class="text-3xl mob:text-xl text-primary-purple font-bold">HKD <span class="whitespace-nowrap">4,256.30</span></h4> </div>
        <div class="relative w-4 h-4 self-center
                before:block before:w-full before:h-[3px] before:rounded-3xl before:bg-black before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2
                after:block after:w-[3px] after:h-full after:rounded-3xl after:bg-black after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2
                " style="margin: 10px, 0px;"></div>
        <div class="mob:w-full" style="margin: 10px 0px"> <div class="flex gap-x-2 mb-2"> <p class="text-[#8181AE]">IA levy</p> </div> <h4 class="text-3xl mob:text-xl text-primary-purple font-bold">HKD <span class="whitespace-nowrap">0.30</span></h4> </div>
        <div class="relative w-[18px] h-[10px] self-center
                before:block before:w-full before:h-[3px] before:rounded-3xl before:bg-black before:absolute before:top-0 before:left-0
                after:block after:w-full after:h-[3px] after:rounded-3xl after:bg-black after:absolute after:bottom-0 after:left-0
                "></div>
        <div class="mob:w-full" style="margin: 10px 0px"> <div class="flex gap-x-2 mb-2"> <p class="text-[#8181AE]">Total</p> </div> <h4 class="text-3xl mob:text-xl text-primary-purple font-bold">HKD <span class="whitespace-nowrap">456.60</span></h4> </div>
    </div>
    <div class="col-span-5 tablet:col-span-7 rounded-lg bg-[#F4F4F8] py-3 px-4" style="margin-bottom: 10px;">
        <h5 class="mb-3 font-normal text-primary-purple">Commission</h5>
        <div class="flex-1 flex items-end"> <div class="show-toggle flex w-full"> <h4 class="text-3xl mob:text-xl text-primary-purple font-bold"> HKD <span class="hided-txt">****</span> <span class="showed-txt hidden">3,450.60</span> </h4> <div class="ml-auto cursor-pointer"> <div class="show-btn flex gap-x-2 items-center"> 
            <img src="/msig-easyi-portal/_astro/show.C6jLeKKj.svg" alt="i"> 
            <p class="text-[#8181AE]">Show</p> 
        </div> 
        <div class="hide-btn flex gap-x-2 items-center hidden"> 
            <img src="/msig-easyi-portal/_astro/hide.BKrE7LCG.svg" alt="i"> 
            <p class="text-[#8181AE]">Hide</p> 
        </div> 
    </div> </div>  </div>
    </div>
</div>

<form [formGroup]="proposerInformationForm" (submit)="onSubmit()">


    <div class="bg-white rounded-xl p-6 mob:p-3">
        <p class="text-[#555555] text-sm" i18n>
            Please complete in English
        </p>
        <p class="text-[#555555] text-sm mb-8" i18n>
            *Required
        </p>

        <h4 i18n="@@travelSuranceProposerDetails"
            class="inline-block text-3xl font-bold relative pb-4 after:absolute after:top-full after:left-0 after:w-1/2 after:w-[33px] after:h-[6px] after:bg-red mob:text-lg">
            Proposer details</h4>

        <div class="grid grid-cols-2 mob:grid-cols-1 gap-x-8 gap-y-4 w-11/12 tablet:w-full my-8">
            <!-- Surname -->
            <mat-form-field class="w-full" class="new-business-form-field">
                <div class="relative inline-block w-full mb-3">
                    <label class="text-[14px] required" i18n="@@travelSuranceSurname">Surname</label>
                </div>
                <input class="block w-full text-lg mob:text-sm text-primary-purple bg-transparent pb-2 mob:pb-1"
                    matInput formControlName="surname" placeholder="Chan" required />
                @if (this.proposerInformationForm.controls['surname'].hasError('required') &&
                this.proposerInformationForm.controls['surname'].touched) {
                <mat-icon matSuffix>
                    <img src="assets/images/icons/lightbulb_red.svg" />
                </mat-icon>
                }
                @if (this.proposerInformationForm.controls['surname'].hasError('required')) {
                <mat-error class="text-[#E11F27]" i18n="@@travelSuranceProposerSurnameRequiredError">Please enter the
                    surname of the proposer.</mat-error>
                }
            </mat-form-field>

            <!-- Given name -->
            <mat-form-field class="w-full" class="new-business-form-field">
                <div class="flex relative inline-block w-full mb-3">
                    <label class="text-[14px] required" i18n="@@travelSuranceGivenName">Given name</label>
                    <!-- <img class=" cursor-pointer opacity-50 hover:opacity-100"
                        i18n-matTooltip="@@travelSuranceGivenNameTooltip"
                        matTooltip='Please enter "." if the proposer does not have a given name.'
                        matTooltipClass="w-max text-sm text-black left-1/2 z-10 bg-white rounded-lg px-2 py-1 shadow-lg translate-y-2 -translate-x-1/2 text-center"
                        matTooltipPosition="above" src="assets/images/icons/tooltips.svg" /> -->
                </div>
                <input class="block w-full text-lg mob:text-sm text-primary-purple bg-transparent pb-2 mob:pb-1"
                    matInput formControlName="givenName" placeholder="Tai Man" required />
                @if (this.proposerInformationForm.controls['givenName'].hasError('required') &&
                this.proposerInformationForm.controls['givenName'].touched) {
                <mat-icon matSuffix>
                    <img src="assets/images/icons/lightbulb_red.svg" />
                </mat-icon>
                }
                @if (this.proposerInformationForm.controls['givenName'].hasError('required')) {
                <mat-error class="text-[#E11F27]" i18n="@@travelSuranceProposerGivenNameRequiredError">Please enter the
                    given name of the proposer.</mat-error>
                }
            </mat-form-field>

            <!-- Gender -->
            <div>
                <div class="relative inline-block w-full">
                    <label class="text-[14px] mb-2" i18n="@@travelSuranceGender">Gender</label>
                </div>
                <mat-radio-group class="flex items-center gap-6 mob:flex-wrap" formControlName="gender">
                    <mat-radio-button [value]="genderEnum.male" disableRipple>
                        <div class="cursor-pointer mob:text-sm" i18n="@@travelSuranceGenderMale">Male</div>
                    </mat-radio-button>
                    <mat-radio-button [value]="genderEnum.female" disableRipple>
                        <div class="cursor-pointer mob:text-sm" i18n="@@travelSuranceGenderFemale">Female</div>
                    </mat-radio-button>
                </mat-radio-group>
            </div>

            <!-- Date of birth-->
            <!-- <mat-form-field class="mob:ml-0">
                <div class="relative inline-block w-full">
                    <label class="mb-3 mob:mb-0 text-[14px]" i18n>Date of birth*</label>
                </div>
                <input matInput [matDatepicker]="dateOfBirthDatepicker" formControlName="dateOfBirth" placeholder="DD-MM-YYYY"
                    [max]="maxDate"
                    class="flex-1 text-lg mob:text-sm bg-transparent pb-2 flatpicker-input"
                    [ngClass]="this.proposerInformationForm.controls['dateOfBirth'].hasError('notBetween')? 'text-red': 'text-primary-purple'"
                    (click)="dateOfBirthDatepicker.open()" required />
                @if ( (this.proposerInformationForm.controls['dateOfBirth'].hasError('required') || this.proposerInformationForm.controls['dateOfBirth'].hasError('notBetween') ) && this.proposerInformationForm.controls['dateOfBirth'].touched) {
                    <mat-icon matSuffix class="error-icon">
                        <img src="/assets/images/icons/lightbulb_red.svg" />
                    </mat-icon>
                }
                <mat-datepicker-toggle matIconSuffix [for]="dateOfBirthDatepicker" class="mat-mdc-icon-button">
                    
                    <mat-icon matDatepickerToggleIcon class="flex">
                        @if ( (this.proposerInformationForm.controls['dateOfBirth'].hasError('required') || this.proposerInformationForm.controls['dateOfBirth'].hasError('notBetween') ) && this.proposerInformationForm.controls['dateOfBirth'].touched) {
                            <img src="assets/images/icons/field_calendar_red.svg" />
                        }
                        @else {
                            <img src="assets/images/icons/field_calendar.svg" />
                        }
                        
                    </mat-icon>

                </mat-datepicker-toggle>

                <mat-datepicker msig-datepicker #dateOfBirthDatepicker />
                @if (this.proposerInformationForm.controls['dateOfBirth'].hasError('notBetween')){
                    <mat-error class="text-[#E11F27]">The proposer must be aged between 18 and 70. Please select or enter again.</mat-error>
                }
                @if (this.proposerInformationForm.controls['dateOfBirth'].hasError('required')) {
                    <mat-error class="text-[#E11F27]">Please enter the Date of birth.</mat-error>
                }
            </mat-form-field> -->

            <!-- ID Type-->
            <div>
                <div class="relative inline-block w-full">
                    <label class="text-[14px] mb-2 required" i18n="@@travelSuranceIdType">ID type</label>
                </div>
                <mat-radio-group class="flex items-center gap-6 mob:flex-wrap" formControlName="idType">
                    <mat-radio-button [value]="idTypeEnum.hkid" disableRipple>
                        <div class="cursor-pointer mob:text-sm" i18n="@@travelSuranceIdTypeHkid">HKID</div>
                    </mat-radio-button>
                    <mat-radio-button [value]="idTypeEnum.passport" disableRipple>
                        <div class="cursor-pointer mob:text-sm" i18n="@@travelSuranceIdTypePassport">Passport</div>
                    </mat-radio-button>
                </mat-radio-group>
            </div>

            <!-- ID number -->
            <mat-form-field class="w-full" class="new-business-form-field">
                <div class="relative inline-block w-full mb-2">
                    <label class="text-[14px] required" i18n="@@travelSuranceIdNumber">ID number</label>
                </div>
                <input class="block w-full text-lg mob:text-sm text-primary-purple bg-transparent pb-2 mob:pb-1"
                    matInput formControlName="idNo" [placeholder]="identityNumberPlaceholder" required />
                @if (this.proposerInformationForm.controls['idNo'].hasError('required') &&
                this.proposerInformationForm.controls['idNo'].touched) {
                <mat-icon matSuffix>
                    <img src="assets/images/icons/lightbulb_red.svg" />
                </mat-icon>
                }
                @if (this.proposerInformationForm.controls['idNo'].hasError('notMatch')) {
                <mat-error class="text-[#E11F27]"><span i18n="@@travelSuranceIdNumberInvalidErrorPrefix">Please enter a
                        valid </span>
                    @if (this.proposerInformationForm.controls['idType'] != null){
                    @if (this.proposerInformationForm.controls['idType'].value === idTypeEnum.hkid){
                    <span i18n="@@travelSuranceIdTypeHkid">HKID</span>
                    }@else if (this.proposerInformationForm.controls['idType'].value === idTypeEnum.passport){
                    <span i18n="@@travelSuranceIdTypePassport">Passport</span>
                    }
                    }
                    <span i18n="@@travelSuranceProposerIdNumberInvalidErrorSuffix"> number of the
                        proposer.</span></mat-error>
                }
                @if (this.proposerInformationForm.controls['idNo'].hasError('required')) {
                <mat-error class="text-[#E11F27]" i18n="@@travelSuranceIdNumberRequiredError">Please enter the ID
                    number.</mat-error>
                }
            </mat-form-field>

            <!-- Marital Status-->
            <div>
                <div class="relative inline-block w-full">
                    <label class="text-[14px] mb-3" i18n="@@travelSuranceMaritalStatus">Marital status</label>
                </div>
                <mat-radio-group class="flex items-center gap-6 mob:flex-wrap mb-5" formControlName="maritalStatus">
                    <mat-radio-button [value]="maritalStatusEnum.single" disableRipple>
                        <div class="cursor-pointer mob:text-sm" i18n="@@travelSuranceMaritalStatusSingle">Single</div>
                    </mat-radio-button>
                    <mat-radio-button [value]="maritalStatusEnum.married" disableRipple>
                        <div class="cursor-pointer mob:text-sm" i18n="@@travelSuranceMaritalStatusMarried">Married</div>
                    </mat-radio-button>
                </mat-radio-group>
            </div>

            <div class="mob:hidden"></div>

            <!-- Mobile Number-->
            <div class="w-full">
                <div class="relative inline-block w-full">
                    <label class="mb-3 mob:mb-1 text-[14px]" i18n="@@travelSuranceMobileNumber">Mobile number</label>
                </div>
                <div class="grid grid-cols-5 gap-x-3 items-end new-business-form-field">
                    <mat-form-field class="flex items-center gap-x-3 w-full col-span-1 remove-label-spacing">
                        <mat-select matInput formControlName="countryCode" class="text-primary-purple">
                            @for (countryCode of countryCodeList; track countryCode) {
                            <mat-option [value]="countryCode">{{countryCode}}</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <mat-form-field class="flex items-center gap-x-3 w-full col-span-4 remove-label-spacing">
                        <input type="text" matInput formControlName="mobileNo" [placeholder]="mobileNumberPlaceholder"
                            class="block w-full text-lg mob:text-sm text-primary-purple bg-transparent pb-2 mob:pb-1"
                            aria-invalid="true" (keypress)="numberOnly($event)" [maxLength]="mobileNumberMaxLength">
                        @if (this.proposerInformationForm.controls['mobileNo'].hasError('invalidLength') &&
                        this.proposerInformationForm.controls['mobileNo'].touched) {
                        <mat-icon matSuffix>
                            <img src="assets/images/icons/lightbulb_red.svg" />
                        </mat-icon>
                        }
                        @if (this.proposerInformationForm.controls['mobileNo'].hasError('invalidLength') &&
                        this.proposerInformationForm.controls['mobileNo'].touched) {
                        <mat-error class="text-[#E11F27]" i18n="@@travelSuranceMobileNumberInvalidError">Invalid mobile
                            number. Please enter again.</mat-error>
                        }
                    </mat-form-field>
                </div>
            </div>

            <!-- Email -->
            <mat-form-field class="w-full" class="new-business-form-field">
                <div class="relative inline-block w-full mb-3">
                    <label class="text-[14px]" i18n="@@travelSuranceEmail">Email</label>
                </div>
                <input class="block w-full text-lg mob:text-sm text-primary-purple bg-transparent pb-2 mob:pb-1"
                    matInput formControlName="email" placeholder="example@mail.com" />
                @if (this.proposerInformationForm.controls['email'].hasError('notMatch') &&
                this.proposerInformationForm.controls['email'].touched) {
                <mat-icon matSuffix>
                    <img src="assets/images/icons/lightbulb_red.svg" />
                </mat-icon>
                }
                @if (this.proposerInformationForm.controls['email'].hasError('notMatch')) {
                <mat-error class="text-[#E11F27]" i18n="@@travelSuranceEmailInvalidError">Invalid email. Please enter
                    again.</mat-error>
                }
            </mat-form-field>
            <!--select address type-->
            <!-- Address Type-->
            <div>
                <div class="relative inline-block w-full">
                    <label class="text-[14px] mb-2 required" i18n="@@homeInsuranceAddressType">Correspondence address</label>
                </div>
                <mat-radio-group class="flex items-center gap-6 mob:flex-wrap" formControlName="addressType">
                    <mat-radio-button [value]="coAddressEnum.address" disableRipple>
                        <div class="cursor-pointer mob:text-sm" i18n="@@homeInsuranceAddress">Address</div>
                    </mat-radio-button>
                    <mat-radio-button [value]="coAddressEnum.postofficebox" disableRipple>
                        <div class="cursor-pointer mob:text-sm" i18n="@@homeInsuranceIdPOBox">Post Office Box</div>
                    </mat-radio-button>
                </mat-radio-group>
            </div>

            <div class="col-span-2 mob:col-span-1">
                <div class="bg-[#F4F4F8] rounded-xl p-6">
                    <div class="grid grid-cols-2 mob:grid-cols-1 gap-4 tablet:w-full">
                    @if(this.proposerInformationForm.controls['addressType'] === null){
                        Hello, no field.
                    }@else if(this.proposerInformationForm.controls['addressType'].value === 'Address') {
                        <h6 class="text-sm text-[#555555] font-normal mb-8" i18n="">Please fill in at leasr on of the information: Street/Village/Estate/Lot</h6>
                        <div class="grid grid-cols-2 mob:grid-cols-1 gap-4 tablet:w-full">
        
                            <mat-form-field class="col-span-2 mob:col-span-1">
                                <div class="relative inline-block w-full">
                                    <label class="mb-3 mob:mb-1 text-[14px]" i18n>Search your address</label>
                                </div>
                                <input class="block w-full text-lg mob:text-sm text-primary-purple bg-transparent pb-2 mob:pb-1"
                                    matInput formControlName="searchYourAddress" placeholder="Enter a location" [matAutocomplete]="addressLookupAutocomplete">
                                <mat-autocomplete #addressLookupAutocomplete="matAutocomplete"
                                    (optionSelected)="onSearchYourAddressSelected($event.option.value)">
                                    @for (searchAddressAutocompleteOption of searchAddressAutocompleteOptionList | async; track searchAddressAutocompleteOption) {
                                        <mat-option [value]="searchAddressAutocompleteOption">{{searchAddressAutocompleteOption.display}}</mat-option>
                                    }
                                </mat-autocomplete>
                            </mat-form-field>
        
                            <div class="col-span-1 -mt-2">
                                <div class="relative inline-block w-full">
                                    <label class="mb-3 mob:mb-1 text-[14px]" i18n>Flat/Room/Shop/Unit/Suite/Others</label>
                                </div>
                                <div class="grid grid-cols-3 gap-x-3 items-end">
                                    <mat-select formControlName="flatType" matInput class="text-primary-purple col-span-1 border-b-2 border-[#B0ACC4] pb-1 mob:pb-1">
                                        @for (flatType of flatTypeList; track flatType) {
                                            <mat-option [value]="flatType.value">{{flatType.display}}</mat-option>
                                        }
                                    </mat-select>
                                    <input class="border-b-2 border-[#B0ACC4] col-span-2 block w-full text-lg mob:text-sm text-primary-purple bg-transparent pb-2 mob:pb-1"
                                        matInput formControlName="flat" />
                                </div>
                            </div>
        
                            <mat-form-field class="col-span-1 -mt-2">
                                <div class="relative inline-block w-full">
                                    <label class="mb-3 mob:mb-1 text-[14px]" i18n>Floor</label>
                                </div>
                                <input class="block w-full text-lg mob:text-sm text-primary-purple bg-transparent pb-2 mob:pb-1"
                                    matInput formControlName="floor" />
                            </mat-form-field>
        
                            <div class="col-span-1 -mt-2">
                                <div class="relative inline-block w-full">
                                    <label class="mb-3 mob:mb-1 text-[14px]" i18n>Block/Tower/House/Others</label>
                                </div>
                                
                                <div class="grid grid-cols-3 gap-x-3 items-end">
                                    <mat-select formControlName="blockType" matInput class="text-primary-purple col-span-1 border-b-2 border-[#B0ACC4] pb-1 mob:pb-1">
                                        @for (blockType of blockTypeList; track blockType) {
                                            <mat-option [value]="blockType.value">{{blockType.display}}</mat-option>
                                        }
                                    </mat-select>
                                    <input class="border-b-2 border-[#B0ACC4] col-span-2 w-full text-lg mob:text-sm text-primary-purple bg-transparent pb-2 mob:pb-1"
                                        matInput formControlName="block" />
                                </div>
                            </div>
        
                            <mat-form-field class="col-span-1 -mt-2">
                                <div class="relative inline-block w-full">
                                    <label class="mb-3 mob:mb-1 text-[14px]" i18n>Building</label>
                                </div>
                                <input class="block w-full text-lg mob:text-sm text-primary-purple bg-transparent pb-2 mob:pb-1"
                                    matInput formControlName="building">
                            </mat-form-field>
        
                            <mat-form-field class="col-span-1 -mt-2">
                                <div class="relative inline-block w-full">
                                    <label class="mb-3 mob:mb-1 text-[14px]" i18n>Estate</label>
                                </div>
                                <input class="block w-full text-lg mob:text-sm text-primary-purple bg-transparent pb-2 mob:pb-1"
                                    matInput formControlName="estate">
                            </mat-form-field>                    
        
                            <mat-form-field class="col-span-1 -mt-2">
                                <div class="relative inline-block w-full">
                                    <label class="mb-3 mob:mb-1 text-[14px]" i18n>Estate phase</label>
                                </div>
                                <input class="block w-full text-lg mob:text-sm text-primary-purple bg-transparent pb-2 mob:pb-1"
                                    matInput formControlName="estatePhase">
                            </mat-form-field>
        
                            <mat-form-field class="col-span-1 -mt-2">
                                <div class="relative inline-block w-full">
                                    <label class="mb-3 mob:mb-1 text-[14px]" i18n>Street</label>
                                </div>
                                <input class="block w-full text-lg mob:text-sm text-primary-purple bg-transparent pb-2 mob:pb-1"
                                    matInput formControlName="street">
                            </mat-form-field>
        
        
                            <mat-form-field class="col-span-1 -mt-2">
                                <div class="relative inline-block w-full flex">
                                    <label class="mb-3 mob:mb-1 text-[14px]" i18n>Village</label>
                                    @if (!showDDLot) {
                                        <div class="font-light underline text-[#555555] texty-sm cursor-pointer ml-auto" (click)="onAddDDLotClick()">
                                            + DD/Lot
                                        </div>
                                    }
                                </div>
                                <input class="block w-full text-lg mob:text-sm text-primary-purple bg-transparent pb-2 mob:pb-1"
                                    matInput formControlName="village">
                            </mat-form-field>
        
                            @if (showDDLot) {
                                <mat-form-field class="col-span-1 -mt-2">
                                    <div class="relative inline-block w-full">
                                        <label class="mb-3 mob:mb-1 text-[14px]" i18n>DD</label>
                                    </div>
                                    <input class="block w-full text-lg mob:text-sm text-primary-purple bg-transparent pb-2 mob:pb-1"
                                        matInput formControlName="dd">
                                </mat-form-field>
    
                                <mat-form-field class="col-span-1 -mt-2">
                                    <div class="relative inline-block w-full">
                                        <label class="mb-3 mob:mb-1 text-[14px]" i18n>Lot</label>
                                    </div>
                                    <input class="block w-full text-lg mob:text-sm text-primary-purple bg-transparent pb-2 mob:pb-1"
                                        matInput formControlName="lot">
                                </mat-form-field>
                            }
        
                            <mat-form-field class="col-span-1 -mt-2">
                                <div class="relative inline-block w-full">
                                    <label class="mb-3 mob:mb-1 text-[14px]" i18n>Street no./Building no.</label>
                                </div>
                                <input class="block w-full text-lg mob:text-sm text-primary-purple bg-transparent pb-2 mob:pb-1"
                                    matInput formControlName="street">
                            </mat-form-field>
        
                            <div class="mod:hidden"></div>
        
                            <mat-form-field class="-mt-2">
                                <div class="relative inline-block w-full text-[14px]">
                                    District*
                                </div>
                                <mat-select class="block w-full text-lg mob:text-sm text-primary-purple bg-transparent pb-2 mob:pb-1"
                                    matInput formControlName="displayDistrict" required>
                                    <mat-option value="">--</mat-option>
                                    @for (district of districtList; track district) {
                                        <mat-optgroup [label]="district.district">
                                            @for (subDistrict of district.subDistrict; track subDistrict) {
                                                <mat-option [value]="subDistrict.value" (onSelectionChange)="onDistrictChange($event)">{{subDistrict.display}}</mat-option>
                                            }
                                        </mat-optgroup>
                                    }
                                </mat-select>
                                @if (this.proposerInformationForm.controls['addressForm'].get('displayDistrict')?.hasError('required')){
                                    <mat-error class="text-[#E11F27]">Please select the District.</mat-error>
                                }
                            </mat-form-field>
        
                            <mat-form-field class="-mt-2">
                                <div class="relative inline-block w-full text-[14px]">
                                    Area*
                                </div>
                                <mat-select class="block w-full text-lg mob:text-sm text-primary-purple bg-transparent pb-2 mob:pb-1"
                                    matInput formControlName="area" required>
                                    @for (area of areaList; track area) {
                                        <mat-option [value]="area.value">{{area.display}}</mat-option>
                                    } 
                                </mat-select>
                                @if (this.proposerInformationForm.controls['addressForm'].get('area')?.hasError('required')){
                                    <mat-error class="text-[#E11F27]">Please select the Area.</mat-error>
                                }
                            </mat-form-field>
        
                        </div>
                        }@else {
                            <mat-form-field class="w-full" class="new-business-form-field">
                                <div class="relative inline-block w-full">
                                    <label class="text-[14px] required" i18n="@@travelSuranceEmail">P.O box number</label>
                                </div>
                                <input class="block w-full text-lg mob:text-sm text-primary-purple bg-transparent pb-2 mob:pb-1"
                                    matInput formControlName="poBoxNo" placeholder="" />
                            </mat-form-field>

                            <mat-form-field class="w-full" class="new-business-form-field">
                                <div class="relative inline-block w-full">
                                    <label class="text-[14px] required" i18n="@@travelSuranceEmail">Post Office</label>
                                </div>
                                <input class="block w-full text-lg mob:text-sm text-primary-purple bg-transparent pb-2 mob:pb-1"
                                    matInput formControlName="pOffice" placeholder="" />
                            </mat-form-field>


                        }
                    </div>
                    
                </div>
            </div>


            <a href="https://www.msig.com.hk/sites/msig_hk/files/TravelSurance_7.0%20brochure_Oct%202022_Final.pdf"
                target="_blank" class="group flex items-center gap-x-2 mt-4">
                <img src="assets/images/icons/external.svg" alt="i" />
                <p class="text-sm underline font-light group-hover:text-primary-purple"
                    i18n="@@travelSuranceViewMoreProductDetails">View more product details</p>
            </a>
            
        </div>
    </div>
</form>
````

````
import { AsyncPipe, CommonModule } from '@angular/common';
import { AfterViewChecked, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MsigDatepickerDirective } from '../../../../shared/directives/msig-datepicker.directive';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import * as appConstants from '../../../../shared/app-constants';
import { COUNTRY_CODE_LIST } from '../../../shared/constants/country-code-list.constants';
import { GenderEnum } from '../../../../shared/models/gender.enum';
import { MaritalStatusEnum } from '../../../../shared/models/marital-status.enum';
import { IdTypeEnum } from '../../../../shared/models/id-type.enum';
import { CoAddressEnum } from '../../../../shared/models/correspondence-address.enum';
import { MessageDialogService } from '../../../../shared/services/message-dialog.service';
import { ActionType, Status } from '../../../../shared/components/message-dialog/shared/message-dialog-enum.model';
import { getMobileNumberLength } from '../../../../shared/utilities/get-mobile-number-max-length';
import { getMobileNumberPlaceholder } from '../../../../shared/utilities/get-mobile-number-placeholder';
import { getIdentityPlaceholder } from '../../../../shared/utilities/get-identity-placeholder';
import * as _moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { debounceTime, switchMap, filter, Observable, of } from 'rxjs';
import { result, tap, values } from 'lodash';
import { homeInsuranceAddressSearch } from '../../shared/services/home-insurance-address-search';
import { AddressSuggestionResponse, SuggestedAddressItem } from '../../shared/models/home-insurance-address.model';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AddressLookupAutocompleteOption } from '../../../shared/models/address-lookup-autocomplete-option.model';
import { SelectionOption } from '../../../../shared/models/selection-option.model';
import { District } from '../../../shared/models/data/district.model';
import { MatOptionSelectionChange } from '@angular/material/core';
import { AddressLookupMapper } from '../../../shared/mappers/address-lookup.mapper';
import { AddressLookupEnum } from '../../../shared/enum/address-lookup.enum';
import { NewBusinessService } from '../../../shared/services/new-business.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HomeInsuranceFastQuotationComponent } from '../home-insurance-fast-quotation/home-insurance-fast-quotation.component';


@Component({
  selector: 'app-home-insurance-proposer-information',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatTooltipModule,
    MsigDatepickerDirective,
    MatAutocompleteModule,
    MatRadioModule,
    MatSelectModule,
    AsyncPipe
  ],
  templateUrl: './home-insurance-proposer-information.component.html',
  styleUrl: './home-insurance-proposer-information.component.scss',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ],
})
export class HomeInsuranceProposerInformationComponent implements OnInit {

  @Input() homeSuranceForm!: FormGroup;
  proposerInformationForm: FormGroup = new FormGroup({});

  // maxDate = new Date();

  showDDLot = false;

  countryCodeList = COUNTRY_CODE_LIST;
  genderEnum = GenderEnum;
  maritalStatusEnum = MaritalStatusEnum;
  idTypeEnum = IdTypeEnum;
  coAddressEnum = CoAddressEnum;
  districtList: District[] = [];
  areaList: SelectionOption[] = [];

  searchControl = new FormControl('');
  addressSearchResults: AddressSuggestionResponse[] = [];
  addSearchResultNew: SuggestedAddressItem[] = [];

  
  flatTypeList: SelectionOption[] = [];
  blockTypeList: SelectionOption[] = [];

  searchAddressAutocompleteOptionList: Observable<AddressLookupAutocompleteOption[]> | undefined;

  constructor(
    private messageDialogService: MessageDialogService,
    private http: HttpClient,
    private addressSearch: homeInsuranceAddressSearch,
    private newBusniessService: NewBusinessService
  ) {}

  ngOnInit(): void {
    this.proposerInformationForm = this.homeSuranceForm.get('proposerInformationForm') as FormGroup;

    this.proposerInformationForm.get('searchControl')?.valueChanges.subscribe(val => {
      debounceTime(300);
      if(val.length > 3) {
        this.addressSearch.getAddress(val).subscribe(
          response=>{
            const theresp:AddressSuggestionResponse = response;
            this.addSearchResultNew = theresp.SuggestedAddress;
            console.log(this.addSearchResultNew);
          },
          error => {
            console.error('Address API Error', error);
          } 
        )
      }
    });

    this.searchControl.valueChanges.pipe(
      filter((value:string | null) => !!value && value.length > 3),
      debounceTime(300),
      
      switchMap(value=> 
        this.http.get<any[]>(`https://www.als.gov.hk/lookup?n=10&q=${encodeURIComponent(value!)}`)
      )
    ).subscribe( 

      //use next and error and complete logic
      results => this.addressSearchResults = results,
      error => {
        this.addressSearchResults = [];
        //after result received
      }
    );
  }

  get isCompleted(): boolean {
    return(this.proposerInformationForm.valid);
  }

  onSubmit(onCompleted?:()=>void): void {
    this.proposerInformationForm.markAllAsTouched();
    if(!this.isCompleted) {
      this.messageDialogService.openMessageDialog({
        status: Status.Error,
        title: $localize`Alert`,
        message: $localize`Invalid data, please try again.`,
        actionButtonList: [
          {
            actionType: ActionType.Confirm,
            text: $localize`Close`
          }
        ]
      })
      return
    }
    onCompleted?.();
  }

  numberOnly(input: KeyboardEvent): boolean {
    if (!(input.key.match(/[0-9]/g))) {
      return false;
    }
    return true;
  }

  setInitialValue() {
    console.log("get into the session")
  }

  onSearchYourAddressSelected(address: AddressLookupAutocompleteOption) {
      this.proposerInformationForm.controls['addressForm'].get('searchYourAddress')?.setValue(address.display);
      if(address.block){
        this.proposerInformationForm.controls['addressForm'].get('blockType')?.setValue("Block");
      }
      this.proposerInformationForm.controls['addressForm'].get('block')?.setValue(address.block);
      this.proposerInformationForm.controls['addressForm'].get('building')?.setValue(address.building);
      this.proposerInformationForm.controls['addressForm'].get('estate')?.setValue(address.estate);
      this.proposerInformationForm.controls['addressForm'].get('estatePhase')?.setValue(address.estatePhase);
      this.proposerInformationForm.controls['addressForm'].get('street')?.setValue(address.street);
      this.proposerInformationForm.controls['addressForm'].get('streetNo')?.setValue(address.streetNo);
      this.proposerInformationForm.controls['addressForm'].get('village')?.setValue(address.village);
      this.proposerInformationForm.controls['addressForm'].get('district')?.setValue(address.district);
      this.proposerInformationForm.controls['addressForm'].get('displayDistrict')?.setValue(address.district);
      this.proposerInformationForm.controls['addressForm'].get('area')?.setValue(address.region);
      
    }

     onDistrictChange(event: MatOptionSelectionChange) {
    if(event.isUserInput){
      const district = event.source.group?.label;
      const subDistrict = event.source.value;
      if(district === event.source.value){
        this.proposerInformationForm.controls["addressForm"].get("district")?.setValue(district);
        this.proposerInformationForm.controls['addressForm'].get('subDistrict')?.setValue(subDistrict);
      } else {
        this.proposerInformationForm.controls["addressForm"].get("district")?.setValue(district);
        this.proposerInformationForm.controls['addressForm'].get('subDistrict')?.setValue('');
      }
    }

  }

  onSearchYourAddressChange(searchKey: string): void {
      if(searchKey) {
        const requestParams = AddressLookupMapper.transformToRequest(
          this.proposerInformationForm.controls['addressForm'].get('searchYourAddress')?.value,
          AddressLookupEnum.AddressLookupNo);
    
        this.newBusniessService.addressLookup(requestParams).subscribe({
          next: (result) => {
            this.searchAddressAutocompleteOptionList = of(AddressLookupMapper.transformToAutocompleteOptionList(result.SuggestedAddress));
          },
          error: (error) => {
            this.messageDialogService.openMessageDialog({
                status: Status.Error,
                title: $localize`Error`,
                message: $localize`Can't search your address, please try again`,
                actionButtonList: [
                  {
                    actionType: ActionType.Confirm,
                    text: $localize`Close`
                  }
                ]
              }).subscribe(
                (result) => {
                  if(result) {
                    this.onSearchYourAddressChange(searchKey);
                  }
                }
              )
          }
        })
      }
    }

    onCorrespondenceAddressChange(event: MatRadioChange): void {
    if (event.value == "address") {
      this.proposerInformationForm.controls['addressForm'].enable();
      this.proposerInformationForm.controls['postOfficeBoxForm'].disable()
    }else if (event.value == "postOfficeBox") {
      this.proposerInformationForm.controls['addressForm'].disable();
      this.proposerInformationForm.controls['postOfficeBoxForm'].enable()
    }
  }

    onAddDDLotClick(): void {
    this.showDDLot = true;
  }



  get mobileNumberMaxLength(){
    return getMobileNumberLength(this.proposerInformationForm.controls['countryCode'].value)
  }

  get mobileNumberPlaceholder() {
    return getMobileNumberPlaceholder(this.proposerInformationForm.controls['countryCode'].value)
  }

  get identityNumberPlaceholder() {
    return getIdentityPlaceholder(this.proposerInformationForm.controls['idType']?.value)
  }

}

````
#### error
```
ERROR TypeError: Cannot read properties of undefined (reading 'get')
    at HomeInsuranceProposerInformationComponent_Conditional_152_Template (home-insurance-proposer-information.component.html:423:33)
```
