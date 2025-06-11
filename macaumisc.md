#### Macau Tryout

````
 <mat-form-field class="w-full md:block md:r-8">
                <div class="relative inline-block w-full mob:mt-0">
                    <label i18n="@@homeInsuranceEndDate" class="mb-2 mob:mb-1 required">End date</label>
                </div>
                <input class="flex-1 text-lg mob:text-sm text-primary-purple bg-transparent pb-2" matInput
                    [matDatepicker]="endDateDatepicker" formControlName="endDate" placeholder="DD-MM-YYYY"
                    [min]="minEndDate" (click)="endDateDatepicker.open()" (dateChange)="onEndDateChange()" required />
                <mat-datepicker-toggle matIconSuffix [for]="endDateDatepicker" class="mat-mdc-icon-button ">
                    <mat-icon matDatepickerToggleIcon>
                        @if (this.fastQuotationForm.controls['endDate'].hasError('required') &&
                        this.fastQuotationForm.controls['endDate'].touched) {
                        <img src="assets/images/icons/field_calendar_red.svg" />
                        }
                        @else {
                        <img src="assets/images/icons/field_calendar.svg" alt="i" />
                        }
                    </mat-icon>
                </mat-datepicker-toggle>
                <mat-datepicker msig-datepicker #endDateDatepicker />
                @if (this.fastQuotationForm.controls['endDate'].hasError('required') &&
                this.fastQuotationForm.controls['endDate'].touched) {
                <mat-error class="text-[#E11F27]" i18n="@@HomeInsuranceEndDateRequiredError">Please select or enter the
                    end date.</mat-error>
                }
            </mat-form-field>
````

````
onSubmit(): void {
    this.proposerInformationForm.markAllAsTouched();
    var text_message = 'Invalid data, please try again.';
    if (!this.isCompleted) {
      if(this.proposerInformationForm.controls['addressForm'].errors?.['atLeastOneAddressRequired']) {
        console.log('Successfully block');
        text_message = 'Please fill in at least one of the information: Street / Village / Estate / Lot';
      }
      this.messageDialogService.openMessageDialog({
        status: Status.Error,
        title: $localize`Alert`,
        message: text_message,
        actionButtonList: [
          {
            actionType: ActionType.Confirm,
            text: $localize`Close`
          }
        ]
      });
    }
  }

````

````
@if
                            (this.proposerInformationForm.controls['addressForm'].get('area')?.hasError('required')){
                            <mat-error class="text-[#E11F27]" i18n="@@HomeInsuranceSelectArea">Please select the Area.</mat-error>
                            }
````

````
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

function atLeastOneAddressFieldValidator(): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const street = group.get('street')?.value?.trim();
    const village = group.get('village')?.value?.trim();
    const estate = group.get('estate')?.value?.trim();
    const lot = group.get('lot')?.value?.trim();

    const atLeastOneFilled = [street, village, estate, lot].some(val => !!val);

    return atLeastOneFilled ? null : { atLeastOneAddressRequired: true };
  };
}
````

````
addressForm: new FormGroup({
        searchYourAddress: new FormControl(),
        flatType: new FormControl("Flat"),
        flat: new FormControl(),
        floor: new FormControl(),
        blockType: new FormControl("Block"),
        block: new FormControl(),
        building: new FormControl(),
        estate: new FormControl(),
        estatePhase: new FormControl(),
        street: new FormControl(),
        village: new FormControl(),
        dd: new FormControl(),
        lot: new FormControl(),
        streetNo: new FormControl(),


        district: new FormControl(),
        subDistrict: new FormControl(),
        displayDistrict: new FormControl(),

        area: new FormControl(),
      }),
````

``
Please fill in at least one of the information: Street / Village / Estate / Lot
``

````
{
  "externalRefNo": "",
  "agentNo": "19000008",
  "startDate": "2025-06-11",
  "endDate": "2026-06-10",
  "planName": "Plan B",
  "areaType": "Gross Floor Area",
  "exactSaleableArea": null,
  "saleableAreaRangeCode": "",
  "exactGrossFloorArea": 800,
  "grossFloorAreaRangeCode": "701-1000",
  "proposerInfo": {
    "surname": "chan",
    "givenName": "taiman",
    "gender": "Male",
    "maritalStatus": "Single",
    "identityType": "identityTypeId",
    "identityNo": "1234567",
    "identityCheckDigit": "8",
    "passportNumber": "",
    "dateOfBirth": "1999-09-09",
    "emailAddress": "",
    "mobileNumber": "",
    "correspondenceAddress": {
      "addressType": "address",
      "rawAddress": "",
      "flatType": "Flat",
      "floor": "11",
      "blockType": "Block",
      "dd": "",
      "lot": "",
      "estate": "THE BELCHER'S",
      "street": "",
      "village": "",
      "poBoxNumber": "",
      "poBoxName": "",
      "subDistrict": "",
      "district": "Coloane",
      "adjustedAddress1": "THE BELCHER'S, 11 ANDAR 11",
      "adjustedAddress2": "COLOANE, MACAU.",
      "adjustedAddress3": "",
      "adjustedAddress4": "",
      "adjustedAddress5": "",
      "Flat": "11",
      "Block": "",
      "Building": "",
      "Phase": "",
      "Region": "",
      "StreetNo": "",
      "UnstructuredAddress": [
        "THE BELCHER'S, 11 ANDAR 11",
        "COLOANE, MACAU."
      ],
      "Country": "Macau"
    },
    "correspondenceAddressOneLine": "THE BELCHER'S, 11 ANDAR 11, COLOANE, MACAU.",
    "isDirectMarketingOptOut": true
  },
  "insuredInfo": {
    "insuredPremisesAddressLine1": "THE BELCHER'S, 11 ANDAR 11, COLOANE, MACAU.",
    "insuredPremisesAddressLine2": "",
    "insuredPremisesAddressLine3": ""
  },
  "isVisited": true,
  "jacketCode": "HMMC07"
}
````

````
{
  "externalRefNo": "",
  "agentNo": "19000008",
  "startDate": "2025-06-11",
  "endDate": "2026-06-10",
  "jacketCode": "HMMC07",
  "planName": "Plan A",
  "areaType": "Gross Floor Area",
  "exactSaleableArea": null,
  "saleableAreaRangeCode": "",
  "exactGrossFloorArea": null,
  "grossFloorAreaRangeCode": "501-700",
  "isVisited": true,
  "proposerInfo": {
    "surname": "chan",
    "givenName": "tai man",
    "gender": "Male",
    "maritalStatus": "Single",
    "identityType": "identityTypePassport",
    "identityNo": "",
    "identityCheckDigit": "",
    "dateOfBirth": "1999-09-08",
    "emailAddress": "",
    "mobileNumber": "98765432",
    "correspondenceAddress": {
      "addressType": "address",
      "lineLength": 30,
      "maxNumberOfLines": 5,
      "adjustedAddress1": "876 ANDAR, MACAU.",
      "Flat": "",
      "room": "",
      "shop": "",
      "unit": "",
      "suite": "",
      "flatOthers": "",
      "floor": "876",
      "Block": "",
      "tower": "",
      "house": "",
      "blockOthers": "",
      "Building": "",
      "estate": "",
      "Phase": "",
      "village": "",
      "dd": "",
      "lot": "",
      "street": "",
      "StreetNo": "",
      "district": "",
      "subDistrict": "",
      "poBoxNumber": "",
      "poBoxName": "",
      "Region": "Macau",
      "Country": "Macau",
      "UnstructuredAddress": [
        "876 ANDAR, MACAU."
      ],
      "blockType": "Block",
      "flatType": "Flat"
    },
    "isDirectMarketingOptOut": true,
    "correspondenceAddressOneLine": "876 ANDAR, MACAU."
  },
  "insuredInfo": {
    "insuredPremisesAddressLine1": "876 ANDAR 87654, MACAU."
  }
}
````
