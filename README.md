# angulartryout
Try out of angular

````
 this.homeInsuranceForm.get('agentno')? | '';
````

### i18n naming

````
@@homeInsurance-macau-idNumber
````

### transform
````
this.apiConService.getrealtimedata('100').subscribe(
      response => {
        this.tableResult = response;
        this.saleableAreaRange = this.tableResult.map(plan =>plan.saleableAreaCode);
        this.grossFloorAreaCode = this.tableResult.map(plan => plan.grossFloorAreaCode);
      },
      error => {
        console.error('API Error: ', error);
      }
    );

    this.apiConService.getreltimeDetaildata().subscribe(
      respoonse =>{
        this.planeDetailsResult = respoonse;
        console.log(this.planeDetailsResult.map(Detailplant => Detailplant.plans));
      }, error => {
        console.error('Detail API error', error);
      }
    );
````

````
this.addressSearch.getAddress(val).subscribe(
          response => {
            const theresp: AddressSuggestionResponse = response;
            this.addSearchResultNew = theresp.SuggestedAddress;
            console.log(this.addSearchResultNew);
          },
          error => {
            console.error('Address API Error', error);
          }
        )
````


### Address Json
````
{
    "RequestAddress": {
        "AddressLine": [
            "focal"
        ]
    },
    "SuggestedAddress": [
        {
            "Address": {
                "PremisesAddress": {
                    "EngPremisesAddress": {
                        "EngEstate": {
                            "EstateName": "FOCAL INDUSTRIAL CENTRE"
                        },
                        "EngStreet": {
                            "StreetName": "MAN LOK STREET",
                            "BuildingNoFrom": "21"
                        },
                        "EngDistrict": {
                            "DcDistrict": "KOWLOON CITY DISTRICT"
                        },
                        "Region": "KLN"
                    },
                    "GeoAddress": "3760119009P20050819",
                    "GeospatialInformation": {
                        "Northing": "819008",
                        "Easting": "837598",
                        "Latitude": "22.31004",
                        "Longitude": "114.18978"
                    }
                }
            },
            "ValidationInformation": {
                "Score": 75
            }
        },
        {
            "Address": {
                "PremisesAddress": {
                    "EngPremisesAddress": {
                        "EngBlock": {
                            "BlockDescriptor": "BLK",
                            "BlockNo": "A",
                            "BlockDescriptorPrecedenceIndicator": "Y"
                        },
                        "EngEstate": {
                            "EstateName": "FOCAL INDUSTRIAL CENTRE"
                        },
                        "EngStreet": {
                            "StreetName": "MAN LOK STREET",
                            "BuildingNoFrom": "21"
                        },
                        "EngDistrict": {
                            "DcDistrict": "KOWLOON CITY DISTRICT"
                        },
                        "Region": "KLN"
                    },
                    "GeoAddress": "3759719041T20050430",
                    "GeospatialInformation": {
                        "Northing": "819037",
                        "Easting": "837599",
                        "Latitude": "22.31031",
                        "Longitude": "114.18979"
                    }
                }
            },
            "ValidationInformation": {
                "Score": 75
            }
        },
        {
            "Address": {
                "PremisesAddress": {
                    "EngPremisesAddress": {
                        "EngBlock": {
                            "BlockDescriptor": "BLK",
                            "BlockNo": "B",
                            "BlockDescriptorPrecedenceIndicator": "Y"
                        },
                        "EngEstate": {
                            "EstateName": "FOCAL INDUSTRIAL CENTRE"
                        },
                        "EngStreet": {
                            "StreetName": "MAN LOK STREET",
                            "BuildingNoFrom": "21"
                        },
                        "EngDistrict": {
                            "DcDistrict": "KOWLOON CITY DISTRICT"
                        },
                        "Region": "KLN"
                    },
                    "GeoAddress": "3759618979T20050430",
                    "GeospatialInformation": {
                        "Northing": "818982",
                        "Easting": "837598",
                        "Latitude": "22.30981",
                        "Longitude": "114.18978"
                    }
                }
            },
            "ValidationInformation": {
                "Score": 75
            }
        }
    ]
}
````

###

### QandA

````
this.searchControl.get('searchControl')?.valueChanges.subscribe(
      filter((value:string | null) => !!value && value.length > 3),
      debounceTime(300),
    );

````

### Add value into others

#### Put this on

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
#### Add this one
````
[
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
]
````


### Address json:

```
{"RequestAddress":{"AddressLine":["Focal\n"]},"SuggestedAddress":[{"Address":{"PremisesAddress":{"EngPremisesAddress":{"EngEstate":{"EstateName":"FOCAL INDUSTRIAL CENTRE"},"EngStreet":{"StreetName":"MAN LOK STREET","BuildingNoFrom":"21"},"EngDistrict":{"DcDistrict":"KOWLOON CITY DISTRICT"},"Region":"KLN"},"ChiPremisesAddress":{"Region":"九龍","ChiDistrict":{"DcDistrict":"九龍城區"},"ChiStreet":{"StreetName":"民樂街","BuildingNoFrom":"21"},"ChiEstate":{"EstateName":"富高工業中心"}},"GeoAddress":"3760119009P20050819","GeospatialInformation":{"Northing":"819008","Easting":"837598","Latitude":"22.31004","Longitude":"114.18978"}}},"ValidationInformation":{"Score":75.00}},{"Address":{"PremisesAddress":{"EngPremisesAddress":{"EngBlock":{"BlockDescriptor":"BLK","BlockNo":"A","BlockDescriptorPrecedenceIndicator":"Y"},"EngEstate":{"EstateName":"FOCAL INDUSTRIAL CENTRE"},"EngStreet":{"StreetName":"MAN LOK STREET","BuildingNoFrom":"21"},"EngDistrict":{"DcDistrict":"KOWLOON CITY DISTRICT"},"Region":"KLN"},"ChiPremisesAddress":{"Region":"九龍","ChiDistrict":{"DcDistrict":"九龍城區"},"ChiStreet":{"StreetName":"民樂街","BuildingNoFrom":"21"},"ChiEstate":{"EstateName":"富高工業中心"},"ChiBlock":{"BlockDescriptor":"座","BlockNo":"A"}},"GeoAddress":"3759719041T20050430","GeospatialInformation":{"Northing":"819037","Easting":"837599","Latitude":"22.31031","Longitude":"114.18979"}}},"ValidationInformation":{"Score":75.00}},{"Address":{"PremisesAddress":{"EngPremisesAddress":{"EngBlock":{"BlockDescriptor":"BLK","BlockNo":"B","BlockDescriptorPrecedenceIndicator":"Y"},"EngEstate":{"EstateName":"FOCAL INDUSTRIAL CENTRE"},"EngStreet":{"StreetName":"MAN LOK STREET","BuildingNoFrom":"21"},"EngDistrict":{"DcDistrict":"KOWLOON CITY DISTRICT"},"Region":"KLN"},"ChiPremisesAddress":{"Region":"九龍","ChiDistrict":{"DcDistrict":"九龍城區"},"ChiStreet":{"StreetName":"民樂街","BuildingNoFrom":"21"},"ChiEstate":{"EstateName":"富高工業中心"},"ChiBlock":{"BlockDescriptor":"座","BlockNo":"B"}},"GeoAddress":"3759618979T20050430","GeospatialInformation":{"Northing":"818982","Easting":"837598","Latitude":"22.30981","Longitude":"114.18978"}}},"ValidationInformation":{"Score":75.00}}]}
```

### Details json:

```
[{"grossFloorAreaCode":"under500","grossFloorAreaDescription":"≤ 500","grossFloorAreaLowerBound":1,"grossFloorAreaUpperBound":500,"saleableAreaCode":"under400","saleableAreaDescription":"≤ 400","saleableAreaLowerBound":1,"saleableAreaUpperBound":400,"plans":{"Silver Plan":{"limitOfIndemnityContents":500000,"limitOfIndemnityPersonalLiability":5000000},"Gold Plan":{"limitOfIndemnityContents":750000,"limitOfIndemnityPersonalLiability":8000000},"Platinum Plan":{"limitOfIndemnityContents":1250000,"limitOfIndemnityPersonalLiability":10000000}}},{"grossFloorAreaCode":"501-700","grossFloorAreaDescription":"501 - 700","grossFloorAreaLowerBound":501,"grossFloorAreaUpperBound":700,"saleableAreaCode":"401-560","saleableAreaDescription":"401 - 560","saleableAreaLowerBound":401,"saleableAreaUpperBound":560,"plans":{"Silver Plan":{"limitOfIndemnityContents":500000,"limitOfIndemnityPersonalLiability":5000000},"Gold Plan":{"limitOfIndemnityContents":750000,"limitOfIndemnityPersonalLiability":8000000},"Platinum Plan":{"limitOfIndemnityContents":1250000,"limitOfIndemnityPersonalLiability":10000000}}},{"grossFloorAreaCode":"701-1000","grossFloorAreaDescription":"701 - 1,000","grossFloorAreaLowerBound":701,"grossFloorAreaUpperBound":1000,"saleableAreaCode":"561-800","saleableAreaDescription":"561 - 800","saleableAreaLowerBound":561,"saleableAreaUpperBound":800,"plans":{"Silver Plan":{"limitOfIndemnityContents":500000,"limitOfIndemnityPersonalLiability":5000000},"Gold Plan":{"limitOfIndemnityContents":750000,"limitOfIndemnityPersonalLiability":8000000},"Platinum Plan":{"limitOfIndemnityContents":1250000,"limitOfIndemnityPersonalLiability":10000000}}},{"grossFloorAreaCode":"1001-1500","grossFloorAreaDescription":"1,001 - 1,500","grossFloorAreaLowerBound":1001,"grossFloorAreaUpperBound":1500,"saleableAreaCode":"801-1200","saleableAreaDescription":"801 - 1,200","saleableAreaLowerBound":801,"saleableAreaUpperBound":1200,"plans":{"Silver Plan":{"limitOfIndemnityContents":500000,"limitOfIndemnityPersonalLiability":5000000},"Gold Plan":{"limitOfIndemnityContents":750000,"limitOfIndemnityPersonalLiability":8000000},"Platinum Plan":{"limitOfIndemnityContents":1250000,"limitOfIndemnityPersonalLiability":10000000}}},{"grossFloorAreaCode":"1501-2000","grossFloorAreaDescription":"1,501 - 2,000","grossFloorAreaLowerBound":1501,"grossFloorAreaUpperBound":2000,"saleableAreaCode":"1201-1600","saleableAreaDescription":"1,201 - 1,600","saleableAreaLowerBound":1201,"saleableAreaUpperBound":1600,"plans":{"Silver Plan":{"limitOfIndemnityContents":500000,"limitOfIndemnityPersonalLiability":5000000},"Gold Plan":{"limitOfIndemnityContents":750000,"limitOfIndemnityPersonalLiability":8000000},"Platinum Plan":{"limitOfIndemnityContents":1250000,"limitOfIndemnityPersonalLiability":10000000}}},{"grossFloorAreaCode":"over2000","grossFloorAreaDescription":"> 2,000","grossFloorAreaLowerBound":2001,"grossFloorAreaUpperBound":null,"saleableAreaCode":"over1600","saleableAreaDescription":"> 1,600","saleableAreaLowerBound":1601,"saleableAreaUpperBound":null,"plans":{"Silver Plan":{"limitOfIndemnityContents":500000,"limitOfIndemnityPersonalLiability":5000000},"Gold Plan":{"limitOfIndemnityContents":750000,"limitOfIndemnityPersonalLiability":8000000},"Platinum Plan":{"limitOfIndemnityContents":1250000,"limitOfIndemnityPersonalLiability":10000000}}}]
```
### update array:
```
plans =[
    {
      name: 'Silver Plan',
      contents: '$500,000',
      liability: '$5,000,000',
      premium: '$1,430'
    },
    {
      name: 'Gold Plan',
      contents: '$750,000',
      liability: '$8,000,000',
      premium: '$1,090'
    },
    {
      name: 'Platium Plan',
      contents: '1,250,000',
      liability: '10,000,000',
      premium: 'null'
    },
  ];
```

```
{
    "Gold Plan": {
        "premium": 2280
    },
    "Platinum Plan": {
        "premium": 2600
    }
}
```


###json format
```
[{"grossFloorAreaCode":"under500","saleableAreaCode":"under400","plans":{"Silver Plan":{"premium":780},"Gold Plan":{"premium":1240}}},{"grossFloorAreaCode":"501-700","saleableAreaCode":"401-560","plans":{"Silver Plan":{"premium":1080},"Gold Plan":{"premium":1370}}},{"grossFloorAreaCode":"701-1000","saleableAreaCode":"561-800","plans":{"Gold Plan":{"premium":1530},"Platinum Plan":{"premium":2340}}},{"grossFloorAreaCode":"1001-1500","saleableAreaCode":"801-1200","plans":{"Gold Plan":{"premium":2280},"Platinum Plan":{"premium":2600}}},{"grossFloorAreaCode":"1501-2000","saleableAreaCode":"1201-1600","plans":{"Platinum Plan":{"premium":2890}}},{"grossFloorAreaCode":"over2000","saleableAreaCode":"over1600","plans":{}}]
```


##error
```
ERROR TypeError: Cannot read properties of null (reading 'controls')
```
##new Error:

```
ERROR RuntimeError: NG01350: 
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
```
Other Error:

```
ERROR RuntimeError: NG01350: 
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
```
