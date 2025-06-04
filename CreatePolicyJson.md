## Create Policy JSON

#### old json

````
{
    "externalRefNo": "",
    "agentNo": "17000047",
    "startDate": "2025-06-04T08:00:06.146Z",
    "endDate": "2026-06-03T08:00:06.240Z",
    "jacketCode": "FAMCG10",
    "planName": "Gold Plan",
    "areaType": "Saleable Area",
    "exactSaleableArea": 0,
    "saleableAreaRangeCode": "801-1200",
    "exactGrossFloorArea": 0,
    "grossFloorAreaRangeCode": "801-1200",
    "proposerInfo": {
        "surname": "chan",
        "givenName": "tai man",
        "gender": "Male",
        "maritalStatus": "Single",
        "identityType": "HKID",
        "identityNo": "k960670a",
        "identityCheckDigit": "PASS",
        "dateOfBirth": "1999-09-08T16:00:00.000Z",
        "emailAddress": "dijfdjf@dfdf.com",
        "mobileNumber": "98765456",
        "correspondenceAddress": {
            "lineLength": 30,
            "maxNumberOfLines": 5,
            "flat": "34",
            "room": "34",
            "shop": "34",
            "unit": "34",
            "suite": "3",
            "flatOthers": "34",
            "floor": "3",
            "block": "BLK A",
            "tower": "",
            "house": "BLK A",
            "blockOthers": "BLK A",
            "building": "",
            "estate": "FOCAL INDUSTRIAL CENTRE",
            "phase": "",
            "village": "",
            "dd": "",
            "lot": "",
            "street": "MAN LOK STREET",
            "streetNo": "21",
            "district": "Kowloon City District",
            "subDistrict": "",
            "poBoxNumber": "",
            "poBoxName": "",
            "region": "Kowloon",
            "country": "852",
            "unstructuredAddress": [
                "FLAT 34, 3/F, BLK A",
                "FOCAL INDUSTRIAL CENTRE",
                "21 MAN LOK STREET",
                "KOWLOON CITY DISTRICT",
                "KOWLOON."
            ],
            "default": true
        },
        "isDirectMarketingOptOut": false
    },
    "insuredInfo": {
        "insuredPremisesAddressLine1": "FLAT 34, 3/F, BLK A, FOCAL INDUSTRIAL CENTRE, 21 MAN LOK STREET, KOWLOON CITY DISTRICT, KOWLOON.",
        "insuredPremisesAddressLine2": "",
        "insuredPremisesAddressLine3": ""
    }
}
````

#### today json

````
{
    "externalRefNo": "",
    "agentNo": "17000047",
    "startDate": "2025-06-04T08:00:06.146Z",
    "endDate": "2026-06-03T08:00:06.240Z",
    "jacketCode": "FAMCG10",
    "planName": "Gold Plan",
    "areaType": "Saleable Area",
    "exactSaleableArea": 0,
    "saleableAreaRangeCode": "801-1200",
    "exactGrossFloorArea": 0,
    "grossFloorAreaRangeCode": "801-1200",
    "proposerInfo": {
        "surname": "chan",
        "givenName": "tai man",
        "gender": "Male",
        "maritalStatus": "Single",
        "identityType": "HKID",
        "identityNo": "k960670a",
        "identityCheckDigit": "PASS",
        "dateOfBirth": "1999-09-08T16:00:00.000Z",
        "emailAddress": "dijfdjf@dfdf.com",
        "mobileNumber": "98765456",
        "correspondenceAddress": {
            "lineLength": 30,
            "maxNumberOfLines": 5,
            "flat": "34",
            "room": "34",
            "shop": "34",
            "unit": "34",
            "suite": "3",
            "flatOthers": "34",
            "floor": "3",
            "block": "BLK A",
            "tower": "",
            "house": "BLK A",
            "blockOthers": "BLK A",
            "building": "",
            "estate": "FOCAL INDUSTRIAL CENTRE",
            "phase": "",
            "village": "",
            "dd": "",
            "lot": "",
            "street": "MAN LOK STREET",
            "streetNo": "21",
            "district": "Kowloon City District",
            "subDistrict": "",
            "poBoxNumber": "",
            "poBoxName": "",
            "region": "Kowloon",
            "country": "852",
            "unstructuredAddress": [
                "FLAT 34, 3/F, BLK A",
                "FOCAL INDUSTRIAL CENTRE",
                "21 MAN LOK STREET",
                "KOWLOON CITY DISTRICT",
                "KOWLOON."
            ],
            "default": true
        },
        "isDirectMarketingOptOut": false
    },
    "insuredInfo": {
        "insuredPremisesAddressLine1": "FLAT 34, 3/F, BLK A, FOCAL INDUSTRIAL CENTRE, 21 MAN LOK STREET, KOWLOON CITY DISTRICT, KOWLOON.",
        "insuredPremisesAddressLine2": "",
        "insuredPremisesAddressLine3": ""
    }
}
````

#### Submitted json
````
{
    "externalRefNo": "",
    "agentNo": "17000047",
    "startDate": "2025-06-03T10:06:24.177Z",
    "endDate": "2026-06-02T10:06:24.275Z",
    "proposerInfo": {
        "surname": "chan",
        "givenName": "tai man",
        "maritalStatus": "Single",
        "identityType": "identityTypeId",
        "identityNo": "K960670",
        "identityCheckDigit": "A",
        "passportNumber": "",
        "dateOfBirth": "1999-09-08T16:00:00.000Z",
        "emailAddress": "ffjief@fifejef.com",
        "mobileNumber": "98765678",
        "correspondenceAddress": {
            "lineLength": 30,
            "maxNumberOfLines": 5,
            "flat": "25",
            "room": null,
            "shop": null,
            "unit": null,
            "suite": null,
            "flatOthers": null,
            "floor": "7",
            "block": "BLK A",
            "tower": null,
            "house": null,
            "blockOthers": null,
            "building": null,
            "estate": "FOCAL INDUSTRIAL CENTRE",
            "phase": null,
            "village": null,
            "dd": null,
            "lot": null,
            "street": "MAN LOK STREET",
            "streetNo": "21",
            "district": "Kowloon City District",
            "subDistrict": null,
            "poBoxNumber": null,
            "poBoxName": null,
            "region": "Kowloon",
            "country": "Hong Kong",
            "unstructuredAddress": [
                "FLAT 25, 7/F, BLK A",
                "FOCAL INDUSTRIAL CENTRE",
                "21 MAN LOK STREET",
                "KOWLOON CITY DISTRICT",
                "KOWLOON."
            ],
            "default": true
        },
        "isDirectMarketingOptOut": false
    },
    "insuredInfo": {
        "surname": "chan",
        "givenName": "tai man",
        "gender": "Male",
        "identityType": "identityTypeId",
        "identityNo": "K960670",
        "identityCheckDigit": "A",
        "passportNumber": "",
        "dateOfBirth": "1999-09-08T16:00:00.000Z",
        "occupation": "undefined - undefined"
    }
}
````

````
{
  "externalRefNo": "'_-~]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]",
  "agentNo": "string",
  "startDate": "2025-06-03T09:55:55.161Z",
  "endDate": "2025-06-03T09:55:55.161Z",
  "jacketCode": "string",
  "planName": "string",
  "areaType": "Saleable Area",
  "exactSaleableArea": 0,
  "saleableAreaRangeCode": "string",
  "exactGrossFloorArea": 0,
  "grossFloorAreaRangeCode": "string",
  "proposerInfo": {
    "surname": "/_-~]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]",
    "givenName": "R_-~]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]",
    "gender": "Female",
    "maritalStatus": "Single",
    "identityType": "string",
    "identityNo": "string",
    "identityCheckDigit": "string",
    "passportNumber": "string",
    "dateOfBirth": "2025-06-03T09:55:55.161Z",
    "emailAddress": "string",
    "mobileNumber": "string",
    "correspondenceAddress": {
      "lineLength": 0,
      "maxNumberOfLines": 0,
      "flat": "string",
      "room": "string",
      "shop": "string",
      "unit": "string",
      "suite": "string",
      "flatOthers": "string",
      "floor": "string",
      "block": "string",
      "tower": "string",
      "house": "string",
      "blockOthers": "string",
      "building": "string",
      "estate": "string",
      "phase": "string",
      "village": "string",
      "dd": "string",
      "lot": "string",
      "street": "string",
      "streetNo": "string",
      "district": "string",
      "subDistrict": "string",
      "poBoxNumber": "string",
      "poBoxName": "string",
      "region": "string",
      "country": "string",
      "unstructuredAddress": [
        "string"
      ],
      "default": true
    },
    "isDirectMarketingOptOut": true
  },
  "insuredInfo": {
    "insuredPremisesAddressLine1": "0_-~]]]]]]]]]]]]]",
    "insuredPremisesAddressLine2": ":_-~]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]",
    "insuredPremisesAddressLine3": "U_-~]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]"
  }
}
````
