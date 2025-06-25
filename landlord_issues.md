##landlord issues

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
}
```

```css
.custom-checkbox {
  --mdc-checkbox-selected-checkmark-color: white;
  --mdc-checkbox-selected-container-color: #1B1464;
  --mdc-checkbox-selected-focus-container-color: #1B1464;
  --mdc-checkbox-selected-hover-container-color: #1B1464;
  --mdc-checkbox-selected-pressed-container-color: #1B1464;
}
```

````
<mat-checkbox class="text-red-600 w-4" type="checkbox" id="isSameAsProposerCorresspondenceAddress"
                     formControlName="isSameAsProposerCorresspondenceAddress"
                     (change)="handleCheckBoxClick()" aria-invalid="false" style="accent-color: #1B1464 !important;" />
````

````
<input type="number"
                                    class="flex-1 text-lg border-b-2 border-[#B0ACC4] mob:text-sm text-primary-purple bg-transparent pb-2" min="1"
                                    max="99999" matInput formControlName="areaRange" (keypress)="numberOnly($event)" style="height: 34px;" />
````


````
async functionwaitForVariable() {

    while (this.agentNo === undefined || this.agentNo === '' || this.agentNo === null) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    try {
      const [premiumResponse, limitResponse ] = await Promise.all([
          this.landlordProtectorService.getPremiumTable(this.agentNo).toPromise(),
          this.landlordProtectorService.getLimitOfIndemnityTable(this.agentNo).toPromise()
      ]);

      this.combineDataTable = FastquoteDataMapper.mergedata(limitResponse.limitOfIndemnityDetails.filter(
          (item: { floorAreaType: string; }) => item.floorAreaType === "Gross Floor Area"
      ),premiumResponse.premiumDetails.filter(
          (item: { floorAreaType: string; }) => item.floorAreaType === "Gross Floor Area"
      ));

    }catch(error) {
      this.onErrorDialog('Data loading failed' + error);
    }
  }
````

```
status: Status.Error,
                title: $localize` Notification`,
                message: $localize`Sorry, we are unable to process your application. Please contact your MSIG account handler.`,
                actionButtonList: [
                  {
                    actionType: ActionType.ContactHandler,
                    text: $localize`Contact MSIG account handler`
                  },
                  {
                    actionType: ActionType.Confirm,
                    text: $localize`Close`
                  },
                ]
```

````
startDate: new FormControl(moment(new Date()), [Validators.min(moment(new Date()).valueOf()), dateValidator]),
````
