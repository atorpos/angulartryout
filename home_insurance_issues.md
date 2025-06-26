### issues


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
