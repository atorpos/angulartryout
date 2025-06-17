The issue is that you’re using `mat-select` without the required `mat-form-field` wrapper. Angular Material form controls need to be wrapped in `mat-form-field`. Here’s how to fix it:

## Fixed HTML Template

```html
<div class="w-full form-group">
    <h6 class="block text-sm mb-1 w-full required">
        @if (constructionclass[0] === 'Saleable area range(sq. ft.)' && locale === 'zh') {
            實用面積範圍（平方呎）
        } @else if (constructionclass[0] === 'Gross floor area range(sq. ft.)' && locale === 'zh') {
            建築面積範圍（平方呎）
        } @else {
            {{ constructionclass[0] }}
        }
    </h6>
    
    <!-- Wrap mat-select with mat-form-field -->
    <mat-form-field class="w-full custom-select-field" appearance="fill">
        <mat-select 
            class="text-primary-purple text-lg mob:text-sm"
            formControlName="rangeSelection" 
            required
            placeholder="Select range">
        
            @if (constructionclass[0] === 'Saleable area range(sq. ft.)') {
                @for (item of saleableAreaDescription; track $index) {
                    <mat-option [value]="$index">{{ item }}</mat-option>
                }
            } @else if (constructionclass[0] === 'Gross floor area range(sq. ft.)') {
                @for (item of grossFloorAreDescription; track $index) {
                    <mat-option [value]="$index">{{ item }}</mat-option>
                }
            }
        
        </mat-select>
        
        <!-- Move mat-error inside mat-form-field -->
        <mat-error *ngIf="fastQuotationForm.get('rangeSelection')?.hasError('required') && fastQuotationForm.get('rangeSelection')?.touched">
            Please select a range.
        </mat-error>
    </mat-form-field>
</div>

<!-- Column 2: Area input -->
<div class="w-full">
    <h6 class="block text-sm mb-1">
        @if (constructionclass[1] === 'Exact saleable area(sq.ft.)' && locale === 'zh') {
            確實實用面積（平方呎）
        } @else if (constructionclass[1] === 'Exact gross floor area (sq. ft)' && locale === 'zh') {
            確實建築面積（平方呎）
        } @else {
            {{ constructionclass[1] }}
        }
    </h6>
    
    <!-- Also wrap the input with mat-form-field for consistency -->
    <mat-form-field class="w-full custom-input-field" appearance="fill">
        <input 
            type="number"
            class="text-lg mob:text-sm text-primary-purple"
            min="49"
            max="99999" 
            matInput 
            formControlName="areaRange" 
            (keypress)="numberOnly($event)" 
            placeholder="Enter area" />
    </mat-form-field>
</div>
```

## CSS to Match Your Original Styling

```css
/* Custom styling to match your original design */
.custom-select-field {
    .mat-mdc-form-field-flex {
        background-color: transparent;
        padding-bottom: 8px;
        border-bottom: 2px solid #B0ACC4;
    }
    
    .mat-mdc-form-field-underline {
        display: none; /* Hide default underline */
    }
    
    .mat-mdc-form-field-infix {
        padding: 0.5em 0;
        border-top: none;
        min-height: auto;
    }
    
    .mat-mdc-select-value {
        color: var(--primary-purple);
        font-size: 1.125rem; /* text-lg */
    }
    
    /* Remove default background */
    .mat-mdc-form-field-focus-overlay {
        display: none;
    }
    
    /* Mobile responsive */
    @media (max-width: 768px) {
        .mat-mdc-select-value {
            font-size: 0.875rem; /* text-sm */
        }
        
        .mat-mdc-form-field-flex {
            padding-bottom: 4px;
        }
    }
}

.custom-input-field {
    .mat-mdc-form-field-flex {
        background-color: transparent;
        padding-bottom: 4px;
        border-bottom: 2px solid #B0ACC4;
    }
    
    .mat-mdc-form-field-underline {
        display: none;
    }
    
    .mat-mdc-form-field-infix {
        padding: 0.5em 0;
        border-top: none;
        min-height: auto;
    }
    
    input {
        background: transparent;
        padding-bottom: 8px;
    }
}

/* Error state styling */
.custom-select-field.mat-form-field-invalid,
.custom-input-field.mat-form-field-invalid {
    .mat-mdc-form-field-flex {
        border-bottom-color: #E11F27; /* Red border when invalid */
    }
}

/* Focus state */
.custom-select-field.mat-focused,
.custom-input-field.mat-focused {
    .mat-mdc-form-field-flex {
        border-bottom-color: var(--primary-purple);
    }
}
```

## Alternative Approach (If you prefer to keep your original styling approach)

If you want to keep it more similar to your original HTML structure:

```html
<div class="w-full form-group">
    <h6 class="block text-sm mb-1 w-full required">
        @if (constructionclass[0] === 'Saleable area range(sq. ft.)' && locale === 'zh') {
            實用面積範圍（平方呎）
        } @else if (constructionclass[0] === 'Gross floor area range(sq. ft.)' && locale === 'zh') {
            建築面積範圍（平方呎）
        } @else {
            {{ constructionclass[0] }}
        }
    </h6>
    
    <mat-form-field class="block w-full border-b-2 border-[#B0ACC4] bg-transparent pb-2 mob:pb-1" appearance="fill">
        <mat-select 
            class="text-lg mob:text-sm text-primary-purple"
            formControlName="rangeSelection" 
            required
            placeholder="Select range">
        
            @if (constructionclass[0] === 'Saleable area range(sq. ft.)') {
                @for (item of saleableAreaDescription; track $index) {
                    <mat-option [value]="$index">{{ item }}</mat-option>
                }
            } @else if (constructionclass[0] === 'Gross floor area range(sq. ft.)') {
                @for (item of grossFloorAreDescription; track $index) {
                    <mat-option [value]="$index">{{ item }}</mat-option>
                }
            }
        
        </mat-select>
        
        <mat-error *ngIf="fastQuotationForm.get('rangeSelection')?.hasError('required') && fastQuotationForm.get('rangeSelection')?.touched">
            Please select a range.
        </mat-error>
    </mat-form-field>
</div>
```

## Your valueChanges subscription should work fine after this fix:

```typescript
this.fastQuotationForm.get('rangeSelection')?.valueChanges.subscribe(value => {
    this.fastQuotationForm.get('selectedPlan')?.setValue(null);
    this.fastQuotationForm.get('selectRange')?.setValue(this.premiumTable.map(plan => plan.saleableAreaCode)[value]);
    this.tableValues = this.premiumTable.map(plan => plan.plans)[value];
    
    var rangeValue: string = this.fastQuotationForm.get('selectRange')?.value;
    if(/[a-zA-Z]/.test(rangeValue) && value == 0 && this.fastQuotationForm.get('areaRange')?.value > Number(rangeValue.replace(/\D/g, ''))) {
        this.fastQuotationForm.get('areaRange')?.setValue('');
    }
});
```

The key changes are:

1. **Wrapped `mat-select` with `mat-form-field`**
1. **Moved `mat-error` inside `mat-form-field`**
1. **Removed `matInput` from `mat-select`** (only inputs use `matInput`, not selects)
1. **Added proper CSS styling** to maintain your visual design

This should resolve the “No value accessor” error and make your valueChanges subscription work properly.​​​​​​​​​​​​​​​​
