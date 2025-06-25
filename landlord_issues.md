##landlord issues

````
 getSizeRange2(exactSize: number, combineDataTable: FastquoteDataResult[]): number {
        let i =0;
        for(i; i < combineDataTable.length; i++){
            if(combineDataTable[i].maximumFloorAreaSquareFeet == null && exactSize > combineDataTable[i].minimumFloorAreaSquareFeet){
                return i;
            } else if(combineDataTable[i].maximumFloorAreaSquareFeet !=null && exactSize <= combineDataTable[i].maximumFloorAreaSquareFeet && exactSize > combineDataTable[i].minimumFloorAreaSquareFeet) {
                return i;
            }
        }
        return i;
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
