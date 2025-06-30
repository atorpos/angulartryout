#### md file  

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
