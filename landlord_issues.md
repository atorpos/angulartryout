##landlord issues

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
