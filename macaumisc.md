#### Macau Tryout

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
