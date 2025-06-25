##landlord issues
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
