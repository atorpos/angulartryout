# angulartryout
Try out of angular
### update array:

```
plans =[
    {
      name: 'Silver Plan',
      contents: '$500,000',
      liability: '$5,000,000',
      premium: '$1,430'
    },
    {
      name: 'Gold Plan',
      contents: '$750,000',
      liability: '$8,000,000',
      premium: '$1,090'
    },
    {
      name: 'Platium Plan',
      contents: '1,250,000',
      liability: '10,000,000',
      premium: 'null'
    },
  ];
```

```
{
    "Gold Plan": {
        "premium": 2280
    },
    "Platinum Plan": {
        "premium": 2600
    }
}
```


###json format
```
[{"grossFloorAreaCode":"under500","saleableAreaCode":"under400","plans":{"Silver Plan":{"premium":780},"Gold Plan":{"premium":1240}}},{"grossFloorAreaCode":"501-700","saleableAreaCode":"401-560","plans":{"Silver Plan":{"premium":1080},"Gold Plan":{"premium":1370}}},{"grossFloorAreaCode":"701-1000","saleableAreaCode":"561-800","plans":{"Gold Plan":{"premium":1530},"Platinum Plan":{"premium":2340}}},{"grossFloorAreaCode":"1001-1500","saleableAreaCode":"801-1200","plans":{"Gold Plan":{"premium":2280},"Platinum Plan":{"premium":2600}}},{"grossFloorAreaCode":"1501-2000","saleableAreaCode":"1201-1600","plans":{"Platinum Plan":{"premium":2890}}},{"grossFloorAreaCode":"over2000","saleableAreaCode":"over1600","plans":{}}]
```


##error
```
ERROR TypeError: Cannot read properties of null (reading 'controls')
```
##new Error:

```
ERROR RuntimeError: NG01350: 
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
```
Other Error:

```
ERROR RuntimeError: NG01350: 
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
```
