## Create Policy JSON
import { $localize } from '@angular/localize/init';

conClass = [
  {
    name: $localize`:@@conClass.saleableName:Saleable area`,
    genName: $localize`:@@conClass.saleableGen:Saleable area range (sq.ft.)`,
  },
  {
    name: $localize`:@@conClass.grossName:Gross area`,
    genName: $localize`:@@conClass.grossGen:Gross floor area (sq.ft.)`,
  }
];
### trail translation

````
conClass = [
    {
      name: 'Saleable area',
      genName: 'Saleable area range (sq.ft.)',
    },
    {
      name: 'Gross area',
      genName: 'Gross floor area (sq.ft.)',
    }
  ];
````

#### json merge files

````
[
    {
        "grossFloorAreaCode": "under500",
        "grossFloorAreaDescription": "≤ 500",
        "grossFloorAreaLowerBound": 1,
        "grossFloorAreaUpperBound": 500,
        "saleableAreaCode": "under400",
        "saleableAreaDescription": "≤ 400",
        "saleableAreaLowerBound": 1,
        "saleableAreaUpperBound": 400,
        "plans": {
            "Silver Plan": {
                "limitOfIndemnityContents": 500000,
                "limitOfIndemnityPersonalLiability": 5000000
            },
            "Gold Plan": {
                "limitOfIndemnityContents": 750000,
                "limitOfIndemnityPersonalLiability": 8000000
            },
            "Platinum Plan": {
                "limitOfIndemnityContents": 1250000,
                "limitOfIndemnityPersonalLiability": 10000000
            }
        }
    },
    {
        "grossFloorAreaCode": "501-700",
        "grossFloorAreaDescription": "501 - 700",
        "grossFloorAreaLowerBound": 501,
        "grossFloorAreaUpperBound": 700,
        "saleableAreaCode": "401-560",
        "saleableAreaDescription": "401 - 560",
        "saleableAreaLowerBound": 401,
        "saleableAreaUpperBound": 560,
        "plans": {
            "Silver Plan": {
                "limitOfIndemnityContents": 500000,
                "limitOfIndemnityPersonalLiability": 5000000
            },
            "Gold Plan": {
                "limitOfIndemnityContents": 750000,
                "limitOfIndemnityPersonalLiability": 8000000
            },
            "Platinum Plan": {
                "limitOfIndemnityContents": 1250000,
                "limitOfIndemnityPersonalLiability": 10000000
            }
        }
    },
    {
        "grossFloorAreaCode": "701-1000",
        "grossFloorAreaDescription": "701 - 1,000",
        "grossFloorAreaLowerBound": 701,
        "grossFloorAreaUpperBound": 1000,
        "saleableAreaCode": "561-800",
        "saleableAreaDescription": "561 - 800",
        "saleableAreaLowerBound": 561,
        "saleableAreaUpperBound": 800,
        "plans": {
            "Silver Plan": {
                "limitOfIndemnityContents": 500000,
                "limitOfIndemnityPersonalLiability": 5000000
            },
            "Gold Plan": {
                "limitOfIndemnityContents": 750000,
                "limitOfIndemnityPersonalLiability": 8000000
            },
            "Platinum Plan": {
                "limitOfIndemnityContents": 1250000,
                "limitOfIndemnityPersonalLiability": 10000000
            }
        }
    },
    {
        "grossFloorAreaCode": "1001-1500",
        "grossFloorAreaDescription": "1,001 - 1,500",
        "grossFloorAreaLowerBound": 1001,
        "grossFloorAreaUpperBound": 1500,
        "saleableAreaCode": "801-1200",
        "saleableAreaDescription": "801 - 1,200",
        "saleableAreaLowerBound": 801,
        "saleableAreaUpperBound": 1200,
        "plans": {
            "Silver Plan": {
                "limitOfIndemnityContents": 500000,
                "limitOfIndemnityPersonalLiability": 5000000
            },
            "Gold Plan": {
                "limitOfIndemnityContents": 750000,
                "limitOfIndemnityPersonalLiability": 8000000
            },
            "Platinum Plan": {
                "limitOfIndemnityContents": 1250000,
                "limitOfIndemnityPersonalLiability": 10000000
            }
        }
    },
    {
        "grossFloorAreaCode": "1501-2000",
        "grossFloorAreaDescription": "1,501 - 2,000",
        "grossFloorAreaLowerBound": 1501,
        "grossFloorAreaUpperBound": 2000,
        "saleableAreaCode": "1201-1600",
        "saleableAreaDescription": "1,201 - 1,600",
        "saleableAreaLowerBound": 1201,
        "saleableAreaUpperBound": 1600,
        "plans": {
            "Silver Plan": {
                "limitOfIndemnityContents": 500000,
                "limitOfIndemnityPersonalLiability": 5000000
            },
            "Gold Plan": {
                "limitOfIndemnityContents": 750000,
                "limitOfIndemnityPersonalLiability": 8000000
            },
            "Platinum Plan": {
                "limitOfIndemnityContents": 1250000,
                "limitOfIndemnityPersonalLiability": 10000000
            }
        }
    },
    {
        "grossFloorAreaCode": "over2000",
        "grossFloorAreaDescription": "> 2,000",
        "grossFloorAreaLowerBound": 2001,
        "grossFloorAreaUpperBound": null,
        "saleableAreaCode": "over1600",
        "saleableAreaDescription": "> 1,600",
        "saleableAreaLowerBound": 1601,
        "saleableAreaUpperBound": null,
        "plans": {
            "Silver Plan": {
                "limitOfIndemnityContents": 500000,
                "limitOfIndemnityPersonalLiability": 5000000
            },
            "Gold Plan": {
                "limitOfIndemnityContents": 750000,
                "limitOfIndemnityPersonalLiability": 8000000
            },
            "Platinum Plan": {
                "limitOfIndemnityContents": 1250000,
                "limitOfIndemnityPersonalLiability": 10000000
            }
        }
    }
]
````

````
[
    {
        "grossFloorAreaCode": "under500",
        "saleableAreaCode": "under400",
        "plans": {
            "Silver Plan": {
                "premium": 780
            },
            "Gold Plan": {
                "premium": 1240
            }
        }
    },
    {
        "grossFloorAreaCode": "501-700",
        "saleableAreaCode": "401-560",
        "plans": {
            "Silver Plan": {
                "premium": 1080
            },
            "Gold Plan": {
                "premium": 1370
            }
        }
    },
    {
        "grossFloorAreaCode": "701-1000",
        "saleableAreaCode": "561-800",
        "plans": {
            "Gold Plan": {
                "premium": 1530
            },
            "Platinum Plan": {
                "premium": 2340
            }
        }
    },
    {
        "grossFloorAreaCode": "1001-1500",
        "saleableAreaCode": "801-1200",
        "plans": {
            "Gold Plan": {
                "premium": 2280
            },
            "Platinum Plan": {
                "premium": 2600
            }
        }
    },
    {
        "grossFloorAreaCode": "1501-2000",
        "saleableAreaCode": "1201-1600",
        "plans": {
            "Platinum Plan": {
                "premium": 2890
            }
        }
    },
    {
        "grossFloorAreaCode": "over2000",
        "saleableAreaCode": "over1600",
        "plans": {}
    }
]
````


#### another one

````
{
  "externalRefNo": "",
  "agentNo": "17000047",
  "startDate": "2025-06-05",
  "endDate": "2026-06-04",
  "jacketCode": "FAMCG10",
  "planName": "Gold Plan",
  "areaType": "Saleable Area",
  "exactSaleableArea": 0,
  "saleableAreaRangeCode": "3",
  "exactGrossFloorArea": 0,
  "grossFloorAreaRangeCode": "",
  "proposerInfo": {
    "surname": "chan",
    "givenName": "tai man",
    "gender": "Male",
    "maritalStatus": "Single",
    "identityType": "identityTypeId",
    "identityNo": "k960670",
    "identityCheckDigit": "A",
    "dateOfBirth": "1999-09-08",
    "emailAddress": "dfd@fdfd.com",
    "mobileNumber": "98765434",
    "correspondenceAddress": {
      "lineLength": 30,
      "maxNumberOfLines": 5,
      "flat": "23",
      "room": null,
      "shop": null,
      "unit": null,
      "suite": null,
      "flatOthers": null,
      "floor": "4",
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
        "FLAT 23, 4/F, BLK A",
        "FOCAL INDUSTRIAL CENTRE",
        "21 MAN LOK STREET",
        "KOWLOON CITY DISTRICT",
        "KOWLOON."
      ],
      "default": true
    },
    "isDirectMarketingOptOut": true
  },
  "insuredInfo": {
    "insuredPremisesAddressLine1": "FLAT 23, 4/F, BLK A, FOCAL INDUSTRIAL CENTRE, 21 MAN LOK STREET, KOWLOON CITY DISTRICT, KOWLOON.",
    "insuredPremisesAddressLine2": "",
    "insuredPremisesAddressLine3": ""
  }
}
````


#### old json

````
{"externalRefNo":"","agentNo":"12000035","startDate":"2025-06-04","endDate":"2026-06-03","planName":"Gold Plan","areaType":"Saleable Area","exactSaleableArea":null,"saleableAreaRangeCode":"801-1200","exactGrossFloorArea":null,"grossFloorAreaRangeCode":"","proposerInfo":{"surname":"wong","givenName":"fdffdd","gender":"Male","maritalStatus":"Single","identityType":"identityTypeId","identityNo":"K960670","identityCheckDigit":"A","passportNumber":"","dateOfBirth":"1999-09-09","emailAddress":"","mobileNumber":"","correspondenceAddress":{"addressType":"address","rawAddress":"","flatType":"Flat","floor":"3","blockType":"Block","dd":"","lot":"","estate":"FOCAL INDUSTRIAL CENTRE","street":"MAN LOK STREET","village":"","poBoxNumber":"","poBoxName":"","subDistrict":"","district":"Kowloon City District","adjustedAddress1":"FLAT 245, 3/F, BLK A","adjustedAddress2":"FOCAL INDUSTRIAL CENTRE","adjustedAddress3":"21 MAN LOK STREET","adjustedAddress4":"KOWLOON CITY DISTRICT","adjustedAddress5":"KOWLOON.","Flat":"245","Block":"BLK A","Building":"","Phase":"","Region":"Kowloon","StreetNo":"21","UnstructuredAddress":["FLAT 245, 3/F, BLK A","FOCAL INDUSTRIAL CENTRE","21 MAN LOK STREET","KOWLOON CITY DISTRICT","KOWLOON."],"Country":"Hong Kong"},"correspondenceAddressOneLine":"FLAT 245, 3/F, BLK A, FOCAL INDUSTRIAL CENTRE, 21 MAN LOK STREET, KOWLOON CITY DISTRICT, KOWLOON.","isDirectMarketingOptOut":false},"insuredInfo":{"insuredPremisesAddressLine1":"FLAT 245, 3/F, BLK A, FOCAL INDUSTRIAL CENTRE, 21 MAN LOK STREET","insuredPremisesAddressLine2":"KOWLOON CITY DISTRICT, KOWLOON.","insuredPremisesAddressLine3":""},"isVisited":true,"jacketCode":"FAMCG10"}
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
