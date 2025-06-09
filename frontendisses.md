## Frontend

````
<div class="flex relative w-full">
                <mat-radio-group formControlName="selectClass" class="flex items-left gap-4 mob:flex-wrap mb-5 inline-block">
                    @for (typeArea of conClass; track typeArea.name) {
                    <div class="radio flex items-leftgap-x-2 mob:flex-col relative undefined ">
                        <mat-radio-button [value]="typeArea.name" class="text-red-600">
                            <label>
                                <!-- need to find a way the translate these -->
                                <p class="cursor-pointer mob:text-sm" i18n="@@HomeInsuranceTypeArea">{{ typeArea.genName }}</p>
                            </label>
                        </mat-radio-button>
                    </div>
                    }

                </mat-radio-group>
            </div>
````

````
grid grid-cols-2 mob:grid-cols-1 gap-x-8 gap-y-4 w-11/12 tablet:w-full my-8
````
