#### md file  

The hover effect showing blue is coming from Material Design’s default hover styles for mat-checkbox. This happens because you’re only overriding the base and checked states, but not the hover states.

Here’s how to fix it by adding hover state overrides to your SCSS:

```scss
.custom-checkbox {
    ::ng-deep .mdc-checkbox__background {
        border-color: #1B1464 !important;
    }

    ::ng-deep .mdc-checkbox--checked .mdc-checkbox__background {
        background-color: #1B1464 !important;
        border-color: #1B1464 !important;
    }

    ::ng-deep .mdc-checkbox__checkmark-path {
        stroke: white !important;
    }

    // Fix hover states
    ::ng-deep .mdc-checkbox:hover .mdc-checkbox__background {
        border-color: #1B1464 !important;
        background-color: transparent !important;
    }

    ::ng-deep .mdc-checkbox--checked:hover .mdc-checkbox__background {
        background-color: #1B1464 !important;
        border-color: #1B1464 !important;
    }

    // Fix focus states
    ::ng-deep .mdc-checkbox:focus .mdc-checkbox__background {
        border-color: #1B1464 !important;
    }

    ::ng-deep .mdc-checkbox--checked:focus .mdc-checkbox__background {
        background-color: #1B1464 !important;
        border-color: #1B1464 !important;
    }

    // Disabled state styling
    ::ng-deep .mdc-checkbox--disabled .mdc-checkbox__background {
        border-color: #ccc !important;
        background-color: #f5f5f5 !important;
    }

    ::ng-deep .mdc-checkbox--disabled.mdc-checkbox--checked .mdc-checkbox__background {
        background-color: #ddd !important;
        border-color: #ccc !important;
    }

    ::ng-deep .mdc-checkbox--disabled .mdc-checkbox__checkmark-path {
        stroke: #999 !important;
    }

    --mdc-checkbox-selected-checkmark-color: white;
    --mdc-checkbox-selected-container-color: #1B1464;
    --mdc-checkbox-selected-focus-container-color: #1B1464;
    --mdc-checkbox-selected-hover-container-color: #1B1464;
    --mdc-checkbox-selected-pressed-container-color: #1B1464;
    --mdc-checkbox-selected-icon-color: #1B1464 !important;
    
    // Additional hover/focus CSS custom properties
    --mdc-checkbox-unselected-hover-container-color: transparent;
    --mdc-checkbox-unselected-focus-container-color: transparent;
    --mdc-checkbox-unselected-pressed-container-color: transparent;
    
    // Disabled state CSS custom properties
    --mdc-checkbox-disabled-container-color: #f5f5f5;
    --mdc-checkbox-disabled-outline-color: #ccc;
    --mdc-checkbox-disabled-selected-container-color: #ddd;
    --mdc-checkbox-disabled-selected-checkmark-color: #999;
    --mdc-checkbox-disabled-selected-icon-color: #999;
}
```

The key additions are:

- `::ng-deep .mdc-checkbox:hover .mdc-checkbox__background` - controls hover state for unchecked checkbox
- `::ng-deep .mdc-checkbox--checked:hover .mdc-checkbox__background` - controls hover state for checked checkbox
- `--mdc-checkbox-unselected-hover-container-color: transparent` - CSS custom property to override hover background
- Focus state overrides to maintain consistency

This should prevent the blue hover effect and keep your custom #1B1464 color scheme consistent across all states.​​​​​​​​​​​​​​​​


Here’s your SCSS with the disabled state styling added:

```scss
.custom-checkbox {
    ::ng-deep .mdc-checkbox__background {
        border-color: #1B1464 !important;
    }

    ::ng-deep .mdc-checkbox--checked .mdc-checkbox__background {
        background-color: #1B1464 !important;
        border-color: #1B1464 !important;
    }

    ::ng-deep .mdc-checkbox__checkmark-path {
        stroke: white !important;
    }

    // Disabled state styling
    ::ng-deep .mdc-checkbox--disabled .mdc-checkbox__background {
        border-color: #ccc !important;
        background-color: #f5f5f5 !important;
    }

    ::ng-deep .mdc-checkbox--disabled.mdc-checkbox--checked .mdc-checkbox__background {
        background-color: #ddd !important;
        border-color: #ccc !important;
    }

    ::ng-deep .mdc-checkbox--disabled .mdc-checkbox__checkmark-path {
        stroke: #999 !important;
    }

    --mdc-checkbox-selected-checkmark-color: white;
    --mdc-checkbox-selected-container-color: #1B1464;
    --mdc-checkbox-selected-focus-container-color: #1B1464;
    --mdc-checkbox-selected-hover-container-color: #1B1464;
    --mdc-checkbox-selected-pressed-container-color: #1B1464;
    --mdc-checkbox-selected-icon-color: #1B1464 !important;
    
    // Disabled state CSS custom properties
    --mdc-checkbox-disabled-container-color: #f5f5f5;
    --mdc-checkbox-disabled-outline-color: #ccc;
    --mdc-checkbox-disabled-selected-container-color: #ddd;
    --mdc-checkbox-disabled-selected-checkmark-color: #999;
    --mdc-checkbox-disabled-selected-icon-color: #999;
}
```

The added disabled styling includes:

- Gray border and background for disabled unchecked state
- Lighter gray for disabled checked state
- Gray checkmark color when disabled
- CSS custom properties for disabled states to work with Material Design’s theming system

This will give you a consistent disabled appearance that’s clearly distinguishable from the enabled state while maintaining the Material Design checkbox structure.​​​​​​​​​​​​​​​​


````
.custom-checkbox {
    ::ng-deep .mdc-checkbox__background {
        border-color: #1B1464 !important;
    }

    ::ng-deep .mdc-checkbox--checked .mdc-checkbox__background {
        background-color: #1B1464 !important;
        border-color: #1B1464 !important;
    }

    ::ng-deep .mdc-checkbox__checkmark-path {
        stroke: white !important;
    }

    --mdc-checkbox-selected-checkmark-color: white;
    --mdc-checkbox-selected-container-color: #1B1464;
    --mdc-checkbox-selected-focus-container-color: #1B1464;
    --mdc-checkbox-selected-hover-container-color: #1B1464;
    --mdc-checkbox-selected-pressed-container-color: #1B1464;
    --mdc-checkbox-selected-icon-color:#1B1464 !important;
}

````
