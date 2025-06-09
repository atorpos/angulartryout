## Frontend

```
<div class="Saleable-inputs grid grid-cols-2 mob:grid-cols-1 gap-4 tablet:w-full">
```

````
<div class="flex w-full">
  <mat-radio-group
    formControlName="selectClass"
    class="flex gap-6 flex-wrap mb-5"
  >
    @for (typeArea of conClass; track typeArea.name) {
      <mat-radio-button
        [value]="typeArea.name"
        class="text-primary-purple flex items-center gap-2"
      >
        <p class="cursor-pointer mob:text-sm" i18n="@@HomeInsuranceTypeArea">
          {{ typeArea.genName }}
        </p>
      </mat-radio-button>
    }
  </mat-radio-group>
</div>
````

````
grid grid-cols-2 mob:grid-cols-1 gap-x-8 gap-y-4 w-11/12 tablet:w-full my-8
````
