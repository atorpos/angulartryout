### issues

Looking at your code, I can see several issues that are preventing the loop from working correctly:

## Main Issues:

### 1. **Incorrect condition in the saleable area check:**

```typescript
// Current (WRONG):
exactSize <= combineDataTable[i].areaType['saleableArea'].areaLowerBound!

// Should be:
exactSize <= combineDataTable[i].areaType['saleableArea'].areaUpperBound!
```

### 2. **Incorrect condition in the gross floor area check:**

```typescript
// Current (WRONG):
exactSize <= combineDataTable[i].areaType['grossFloorArea'].areaLowerBound! && 
exactSize >= combineDataTable[i].areaType['grossFloorArea'].areaLowerBound!

// Should be:
exactSize >= combineDataTable[i].areaType['grossFloorArea'].areaLowerBound! && 
exactSize <= combineDataTable[i].areaType['grossFloorArea'].areaUpperBound!
```

## Fixed Code:

```typescript
static getSizeRange(exactSize: number, combineDataTable: MergePlan[], areaType: string): number {
    for (let i = 0; i < combineDataTable.length; i++) {
        if (areaType == 'Saleable area (sq. ft.)') {
            const saleableArea = combineDataTable[i].areaType.saleableArea;
            console.log(exactSize, combineDataTable, areaType, saleableArea.areaUpperBound, saleableArea.areaLowerBound);
            
            // Check if this is the last range (no upper bound)
            if (saleableArea.areaUpperBound == null && exactSize >= saleableArea.areaLowerBound) {
                return i;
            } 
            // Check if exactSize falls within the range
            else if (saleableArea.areaUpperBound != null && 
                     exactSize >= saleableArea.areaLowerBound && 
                     exactSize <= saleableArea.areaUpperBound) {
                return i;
            }
        }
        
        if (areaType == 'Gross floor area (sq. ft.)') {
            const grossFloorArea = combineDataTable[i].areaType.grossFloorArea;
            console.log('grossable ' + i);
            
            // Check if this is the last range (no upper bound)
            if (grossFloorArea.areaUpperBound == null && exactSize >= grossFloorArea.areaLowerBound) {
                return i;
            } 
            // Check if exactSize falls within the range
            else if (grossFloorArea.areaUpperBound != null && 
                     exactSize >= grossFloorArea.areaLowerBound && 
                     exactSize <= grossFloorArea.areaUpperBound) {
                return i;
            }
        }
    }
    
    // Return -1 if no matching range is found (instead of returning i which would be out of bounds)
    return -1;
}
```

## Key Changes:

1. **Fixed the range comparison logic** - now properly checks if `exactSize` is between `areaLowerBound` and `areaUpperBound`
1. **Used proper variable names** for clarity (`saleableArea`, `grossFloorArea`)
1. **Added null checks** for `areaUpperBound` before using it in comparisons
1. **Return -1** when no match is found instead of returning the out-of-bounds index
1. **Simplified the loop declaration** to `for (let i = 0; ...)`

The main issue was that you were comparing `exactSize` with `areaLowerBound` twice instead of comparing it with both `areaLowerBound` and `areaUpperBound`.​​​​​​​​​​​​​​​​



````
 static getSizeRange(exactSize: number, combineDataTable: MergePlan[], areaType: string): number {
        let i = 0;
        

        for(i; i < combineDataTable.length; i++){
            if(areaType == 'Saleable area (sq. ft.)') {
                console.log(exactSize, combineDataTable, areaType, combineDataTable[i].areaType['saleableArea'].areaUpperBound, combineDataTable[i].areaType['saleableArea'].areaLowerBound);
                if (combineDataTable[i].areaType['saleableArea'].areaUpperBound == null && exactSize > combineDataTable[i].areaType['saleableArea'].areaLowerBound) {
                    return i;
                } else if (exactSize >= combineDataTable[i].areaType['saleableArea'].areaLowerBound! && exactSize <= combineDataTable[i].areaType['saleableArea'].areaLowerBound!) {
                    return i;
                }
            }
            if(areaType == 'Gross floor area (sq. ft.)') {
                console.log('grossable ' + i);
                if (combineDataTable[i].areaType['grossFloorArea'].areaUpperBound == null && exactSize > combineDataTable[i].areaType['grossFloorArea'].areaLowerBound) {
                    return i;
                } else if (exactSize <= combineDataTable[i].areaType['grossFloorArea'].areaLowerBound! && exactSize >= combineDataTable[i].areaType['grossFloorArea'].areaLowerBound!) {
                    return i;
                }
            }
        }
        return i;

    }

````

````
[
    {
        "plans": {
            "Gold Plan": {
                "limitOfIndemnityContents": 750000,
                "limitOfIndemnityPersonalLiability": 8000000,
                "premium": 1240
            },
            "Silver Plan": {
                "limitOfIndemnityContents": 500000,
                "limitOfIndemnityPersonalLiability": 5000000,
                "premium": 780
            }
        },
        "areaType": {
            "grossFloorArea": {
                "areaCode": "under500",
                "areaDescription": "≤ 500",
                "areaLowerBound": 1,
                "areaUpperBound": 500
            },
            "saleableArea": {
                "areaCode": "under400",
                "areaDescription": "≤ 400",
                "areaLowerBound": 1,
                "areaUpperBound": 400
            }
        }
    },
    {
        "plans": {
            "Gold Plan": {
                "limitOfIndemnityContents": 750000,
                "limitOfIndemnityPersonalLiability": 8000000,
                "premium": 1370
            },
            "Silver Plan": {
                "limitOfIndemnityContents": 500000,
                "limitOfIndemnityPersonalLiability": 5000000,
                "premium": 1080
            }
        },
        "areaType": {
            "grossFloorArea": {
                "areaCode": "501-700",
                "areaDescription": "501 - 700",
                "areaLowerBound": 501,
                "areaUpperBound": 700
            },
            "saleableArea": {
                "areaCode": "401-560",
                "areaDescription": "401 - 560",
                "areaLowerBound": 401,
                "areaUpperBound": 560
            }
        }
    },
    {
        "plans": {
            "Gold Plan": {
                "limitOfIndemnityContents": 750000,
                "limitOfIndemnityPersonalLiability": 8000000,
                "premium": 1530
            },
            "Platinum Plan": {
                "limitOfIndemnityContents": 1250000,
                "limitOfIndemnityPersonalLiability": 10000000,
                "premium": 2340
            }
        },
        "areaType": {
            "grossFloorArea": {
                "areaCode": "701-1000",
                "areaDescription": "701 - 1,000",
                "areaLowerBound": 701,
                "areaUpperBound": 1000
            },
            "saleableArea": {
                "areaCode": "561-800",
                "areaDescription": "561 - 800",
                "areaLowerBound": 561,
                "areaUpperBound": 800
            }
        }
    },
    {
        "plans": {
            "Gold Plan": {
                "limitOfIndemnityContents": 750000,
                "limitOfIndemnityPersonalLiability": 8000000,
                "premium": 2280
            },
            "Platinum Plan": {
                "limitOfIndemnityContents": 1250000,
                "limitOfIndemnityPersonalLiability": 10000000,
                "premium": 2600
            }
        },
        "areaType": {
            "grossFloorArea": {
                "areaCode": "1001-1500",
                "areaDescription": "1,001 - 1,500",
                "areaLowerBound": 1001,
                "areaUpperBound": 1500
            },
            "saleableArea": {
                "areaCode": "801-1200",
                "areaDescription": "801 - 1,200",
                "areaLowerBound": 801,
                "areaUpperBound": 1200
            }
        }
    },
    {
        "plans": {
            "Platinum Plan": {
                "limitOfIndemnityContents": 1250000,
                "limitOfIndemnityPersonalLiability": 10000000,
                "premium": 2890
            }
        },
        "areaType": {
            "grossFloorArea": {
                "areaCode": "1501-2000",
                "areaDescription": "1,501 - 2,000",
                "areaLowerBound": 1501,
                "areaUpperBound": 2000
            },
            "saleableArea": {
                "areaCode": "1201-1600",
                "areaDescription": "1,201 - 1,600",
                "areaLowerBound": 1201,
                "areaUpperBound": 1600
            }
        }
    },
    {
        "plans": {},
        "areaType": {
            "grossFloorArea": {
                "areaCode": "over2000",
                "areaDescription": "> 2,000",
                "areaLowerBound": 2001,
                "areaUpperBound": null
            },
            "saleableArea": {
                "areaCode": "over1600",
                "areaDescription": "> 1,600",
                "areaLowerBound": 1601,
                "areaUpperBound": null
            }
        }
    }
]
````

````
// Insurance Plan Data Model

interface InsurancePlan {
limitOfIndemnityContents: number;
limitOfIndemnityPersonalLiability: number;
}

interface InsurancePlans {
“Silver Plan”: InsurancePlan;
“Gold Plan”: InsurancePlan;
“Platinum Plan”: InsurancePlan;
}

interface PropertySizeCategory {
// Gross Floor Area Properties
grossFloorAreaCode: string;
grossFloorAreaDescription: string;
grossFloorAreaLowerBound: number;
grossFloorAreaUpperBound: number | null; // null for unbounded upper ranges

// Saleable Area Properties
saleableAreaCode: string;
saleableAreaDescription: string;
saleableAreaLowerBound: number;
saleableAreaUpperBound: number | null; // null for unbounded upper ranges

// Available insurance plans for this property size
plans: InsurancePlans;
}

// Main data structure
type InsurancePlanData = PropertySizeCategory[];

// Example usage and helper functions
class InsurancePlanService {
constructor(private data: InsurancePlanData) {}

// Find appropriate category based on gross floor area
findCategoryByGrossFloorArea(area: number): PropertySizeCategory | null {
return this.data.find(category => {
const withinLowerBound = area >= category.grossFloorAreaLowerBound;
const withinUpperBound = category.grossFloorAreaUpperBound === null ||
area <= category.grossFloorAreaUpperBound;
return withinLowerBound && withinUpperBound;
}) || null;
}

// Find appropriate category based on saleable area
findCategoryBySaleableArea(area: number): PropertySizeCategory | null {
return this.data.find(category => {
const withinLowerBound = area >= category.saleableAreaLowerBound;
const withinUpperBound = category.saleableAreaUpperBound === null ||
area <= category.saleableAreaUpperBound;
return withinLowerBound && withinUpperBound;
}) || null;
}

// Get all available plan types
getAvailablePlanTypes(): string[] {
return [“Silver Plan”, “Gold Plan”, “Platinum Plan”];
}

// Get plan details for a specific property size and plan type
getPlanDetails(area: number, planType: keyof InsurancePlans, areaType: ‘gross’ | ‘saleable’ = ‘gross’): InsurancePlan | null {
const category = areaType === ‘gross’
? this.findCategoryByGrossFloorArea(area)
: this.findCategoryBySaleableArea(area);

```
return category ? category.plans[planType] : null;
```

}

// Get all plans for a specific property size
getAllPlansForProperty(area: number, areaType: ‘gross’ | ‘saleable’ = ‘gross’): InsurancePlans | null {
const category = areaType === ‘gross’
? this.findCategoryByGrossFloorArea(area)
: this.findCategoryBySaleableArea(area);

```
return category ? category.plans : null;
```

}
}

// Validation functions
function validatePropertySizeCategory(category: PropertySizeCategory): boolean {
// Check if bounds are logical
if (category.grossFloorAreaUpperBound !== null &&
category.grossFloorAreaLowerBound > category.grossFloorAreaUpperBound) {
return false;
}

if (category.saleableAreaUpperBound !== null &&
category.saleableAreaLowerBound > category.saleableAreaUpperBound) {
return false;
}

// Check if all required plans exist
const requiredPlans = [“Silver Plan”, “Gold Plan”, “Platinum Plan”];
return requiredPlans.every(plan => plan in category.plans);
}

function validateInsurancePlan(plan: InsurancePlan): boolean {
return plan.limitOfIndemnityContents > 0 &&
plan.limitOfIndemnityPersonalLiability > 0;
}

// Constants for plan types (for better type safety)
export const PLAN_TYPES = {
SILVER: “Silver Plan” as const,
GOLD: “Gold Plan” as const,
PLATINUM: “Platinum Plan” as const
} as const;

export type PlanType = typeof PLAN_TYPES[keyof typeof PLAN_TYPES];

// Export types and classes
export {
InsurancePlan,
InsurancePlans,
PropertySizeCategory,
InsurancePlanData,
InsurancePlanService,
validatePropertySizeCategory,
validateInsurancePlan
};

````

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
