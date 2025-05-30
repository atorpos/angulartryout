// src/app/models/area-plan.model.ts

// Structure for each plan type ("Silver Plan", "Gold Plan", etc.)
export interface PlanDetail {
  limitOfIndemnityContents: number;
  limitOfIndemnityPersonalLiability: number;
}

// Object mapping plan names to details
export interface Plans {
  [planName: string]: PlanDetail;
}

// Main model for each area plan entry
export interface AreaPlan {
  grossFloorAreaCode: string;
  grossFloorAreaDescription: string;
  grossFloorAreaLowerBound: number;
  grossFloorAreaUpperBound: number | null;

  saleableAreaCode: string;
  saleableAreaDescription: string;
  saleableAreaLowerBound: number;
  saleableAreaUpperBound: number | null;

  plans: Plans;
}
