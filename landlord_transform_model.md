#### transform to model

````
this.landlordProtectorService.getPremiumTable(this.agentNo).subscribe({
      next: (response) => {
        console.log(this.premiumTable);
        // this.saleableAreaRange = this.premiumTable.map(plan => plan.saleableAreaCode);
        // this.grossFloorAreaCode = this.premiumTable.map(plan => plan.grossFloorAreaCode);
      },
      error: (error) => {
        console.error('API Error: ', error);
        this.onErrorDialog("Priemum")
      }

    }
    );
````

````
{
  "premiumDetails": [
    {
      "floorAreaType": "Gross Floor Area",
      "minimumFloorAreaSquareFeet": 0,
      "maximumFloorAreaSquareFeet": 800,
      "annualPremium": 798,
      "annualFirePremium": 766,
      "annualPersonalPublicLiabilityPremium": 32
    },
    {
      "floorAreaType": "Gross Floor Area",
      "minimumFloorAreaSquareFeet": 801,
      "maximumFloorAreaSquareFeet": 1000,
      "annualPremium": 1088,
      "annualFirePremium": 1044,
      "annualPersonalPublicLiabilityPremium": 44
    },
    {
      "floorAreaType": "Gross Floor Area",
      "minimumFloorAreaSquareFeet": 1001,
      "maximumFloorAreaSquareFeet": 1200,
      "annualPremium": 1388,
      "annualFirePremium": 1332,
      "annualPersonalPublicLiabilityPremium": 56
    },
    {
      "floorAreaType": "Gross Floor Area",
      "minimumFloorAreaSquareFeet": 1201,
      "maximumFloorAreaSquareFeet": null,
      "annualPremium": null,
      "annualFirePremium": null,
      "annualPersonalPublicLiabilityPremium": null
    },
    {
      "floorAreaType": "Saleable Area",
      "minimumFloorAreaSquareFeet": 0,
      "maximumFloorAreaSquareFeet": 640,
      "annualPremium": 798,
      "annualFirePremium": 766,
      "annualPersonalPublicLiabilityPremium": 32
    },
    {
      "floorAreaType": "Saleable Area",
      "minimumFloorAreaSquareFeet": 641,
      "maximumFloorAreaSquareFeet": 800,
      "annualPremium": 1088,
      "annualFirePremium": 1044,
      "annualPersonalPublicLiabilityPremium": 44
    },
    {
      "floorAreaType": "Saleable Area",
      "minimumFloorAreaSquareFeet": 801,
      "maximumFloorAreaSquareFeet": 960,
      "annualPremium": 1388,
      "annualFirePremium": 1332,
      "annualPersonalPublicLiabilityPremium": 56
    },
    {
      "floorAreaType": "Saleable Area",
      "minimumFloorAreaSquareFeet": 961,
      "maximumFloorAreaSquareFeet": null,
      "annualPremium": null,
      "annualFirePremium": null,
      "annualPersonalPublicLiabilityPremium": null
    }
  ]
}
````

````
{"externalRefNo":"","agentNo":"19000008","startDate":"2025-06-20","endDate":"2026-06-19","floorAreaType":"Gross Floor Area","exactSaleableArea":null,"saleableAreaRange":"","exactGrossFloorArea":null,"grossFloorAreaRange":"1,001 - 1,200","proposerInfo":{"surname":"chan","givenName":"taiman","gender":"","maritalStatus":"","identityType":"identityTypeId","identityNo":"1234567","identityCheckDigit":"9","passportNumber":"","dateOfBirth":"1999-09-09","emailAddress":"","mobileNumber":"","correspondenceAddress":{"addressType":"address","rawAddress":"","flatType":"Flat","floor":"","blockType":"Block","dd":"","lot":"","estate":"fddfdfd","street":"","village":"","poBoxNumber":"","poBoxName":"","subDistrict":"","district":"Macau","adjustedAddress1":"FDDFDFD, FDFFDF, MACAU.","adjustedAddress2":"","adjustedAddress3":"","adjustedAddress4":"","adjustedAddress5":"","Flat":"","Block":"","Building":"fdffdf","Phase":"","Region":"","StreetNo":"","UnstructuredAddress":["FDDFDFD, FDFFDF, MACAU."],"Country":"Macau"},"correspondenceAddressOneLine":"FDDFDFD, FDFFDF, MACAU.","isDirectMarketingOptOut":true},"insuredInfo":{"insuredPremisesAddressLine1":"FDDFDFD, FDFFDF, MACAU.","insuredPremisesAddressLine2":"","insuredPremisesAddressLine3":""},"isVisited":true,"minimumFloorAreaSquareFeet":1001,"maximumFloorAreaSquareFeet":1200}
````

````
{
    "premiumDetails": [
        {
            "floorAreaType": "Gross Floor Area",
            "minimumFloorAreaSquareFeet": 0,
            "maximumFloorAreaSquareFeet": 800,
            "annualPremium": 798,
            "annualFirePremium": 766,
            "annualPersonalPublicLiabilityPremium": 32
        },
        {
            "floorAreaType": "Gross Floor Area",
            "minimumFloorAreaSquareFeet": 801,
            "maximumFloorAreaSquareFeet": 1000,
            "annualPremium": 1088,
            "annualFirePremium": 1044,
            "annualPersonalPublicLiabilityPremium": 44
        },
        {
            "floorAreaType": "Gross Floor Area",
            "minimumFloorAreaSquareFeet": 1001,
            "maximumFloorAreaSquareFeet": 1200,
            "annualPremium": 1388,
            "annualFirePremium": 1332,
            "annualPersonalPublicLiabilityPremium": 56
        },
        {
            "floorAreaType": "Gross Floor Area",
            "minimumFloorAreaSquareFeet": 1201,
            "maximumFloorAreaSquareFeet": null,
            "annualPremium": null,
            "annualFirePremium": null,
            "annualPersonalPublicLiabilityPremium": null
        },
        {
            "floorAreaType": "Saleable Area",
            "minimumFloorAreaSquareFeet": 0,
            "maximumFloorAreaSquareFeet": 640,
            "annualPremium": 798,
            "annualFirePremium": 766,
            "annualPersonalPublicLiabilityPremium": 32
        },
        {
            "floorAreaType": "Saleable Area",
            "minimumFloorAreaSquareFeet": 641,
            "maximumFloorAreaSquareFeet": 800,
            "annualPremium": 1088,
            "annualFirePremium": 1044,
            "annualPersonalPublicLiabilityPremium": 44
        },
        {
            "floorAreaType": "Saleable Area",
            "minimumFloorAreaSquareFeet": 801,
            "maximumFloorAreaSquareFeet": 960,
            "annualPremium": 1388,
            "annualFirePremium": 1332,
            "annualPersonalPublicLiabilityPremium": 56
        },
        {
            "floorAreaType": "Saleable Area",
            "minimumFloorAreaSquareFeet": 961,
            "maximumFloorAreaSquareFeet": null,
            "annualPremium": null,
            "annualFirePremium": null,
            "annualPersonalPublicLiabilityPremium": null
        }
    ]
}
````

````
{
    "limitOfIndemnityDetails": [
        {
            "floorAreaType": "Gross Floor Area",
            "minimumFloorAreaSquareFeet": 0,
            "maximumFloorAreaSquareFeet": 800,
            "floorAreaDescription": null,
            "contentsAndLossOfRent": 280000,
            "contents": 200000,
            "lossOfRent": 80000,
            "personalLiability": 5000000
        },
        {
            "floorAreaType": "Gross Floor Area",
            "minimumFloorAreaSquareFeet": 801,
            "maximumFloorAreaSquareFeet": 1000,
            "floorAreaDescription": null,
            "contentsAndLossOfRent": 380000,
            "contents": 300000,
            "lossOfRent": 80000,
            "personalLiability": 6000000
        },
        {
            "floorAreaType": "Gross Floor Area",
            "minimumFloorAreaSquareFeet": 1001,
            "maximumFloorAreaSquareFeet": 1200,
            "floorAreaDescription": null,
            "contentsAndLossOfRent": 480000,
            "contents": 400000,
            "lossOfRent": 80000,
            "personalLiability": 8000000
        },
        {
            "floorAreaType": "Gross Floor Area",
            "minimumFloorAreaSquareFeet": 1201,
            "maximumFloorAreaSquareFeet": null,
            "floorAreaDescription": null,
            "contentsAndLossOfRent": null,
            "contents": null,
            "lossOfRent": null,
            "personalLiability": null
        },
        {
            "floorAreaType": "Saleable Area",
            "minimumFloorAreaSquareFeet": 0,
            "maximumFloorAreaSquareFeet": 640,
            "floorAreaDescription": null,
            "contentsAndLossOfRent": 280000,
            "contents": 200000,
            "lossOfRent": 80000,
            "personalLiability": 5000000
        },
        {
            "floorAreaType": "Saleable Area",
            "minimumFloorAreaSquareFeet": 641,
            "maximumFloorAreaSquareFeet": 800,
            "floorAreaDescription": null,
            "contentsAndLossOfRent": 380000,
            "contents": 300000,
            "lossOfRent": 80000,
            "personalLiability": 6000000
        },
        {
            "floorAreaType": "Saleable Area",
            "minimumFloorAreaSquareFeet": 801,
            "maximumFloorAreaSquareFeet": 960,
            "floorAreaDescription": null,
            "contentsAndLossOfRent": 480000,
            "contents": 400000,
            "lossOfRent": 80000,
            "personalLiability": 8000000
        },
        {
            "floorAreaType": "Saleable Area",
            "minimumFloorAreaSquareFeet": 961,
            "maximumFloorAreaSquareFeet": null,
            "floorAreaDescription": null,
            "contentsAndLossOfRent": null,
            "contents": null,
            "lossOfRent": null,
            "personalLiability": null
        }
    ]
}

````
