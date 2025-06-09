## Frontend

````
<div class="Saleable-inputs grid grid-cols-1 tablet:grid-cols-1 lg:grid-cols-2 gap-4 w-full">

  <!-- Column 1: Saleable area -->
  <div class="w-full">
    <h6 class="block text-sm mb-1 w-full required">
      {{ constructionclass[0] }}
    </h6>
    <select
      class="w-full text-primary-purple text-lg pb-2 bg-[#F4F4F8] mob:text-sm mob:pb-1 border-b-2 border-[#B0ACC4]"
      formControlName="rangeSelection"
      required
    >
      <option value=""></option>
      @if (constructionclass[0] === 'Saleable area range(sq. ft.)') {
        @for (item of saleableAreaRange; track item) {
          <option value="{{$index}}">{{ item }}</option>
        }
      } @else if (constructionclass[0] === 'Gross floor area range(sq. ft.)') {
        @for (item of grossFloorAreaCode; track item) {
          <option value="{{$index}}">{{ item }}</option>
        }
      }
    </select>
  </div>

  <!-- Column 2: Area input -->
  <div class="w-full">
    <h6 class="block text-sm mb-1">
      {{ constructionclass[1] }}
    </h6>
    <div class="input-container flex items-center gap-x-3 w-full border-b-2 border-[#B0ACC4]">
      <input
        type="number"
        class="flex-1 text-lg mob:text-sm text-primary-purple bg-transparent pb-2"
        min="49"
        max="99999"
        matInput
        formControlName="areaRange"
        (keypress)="numberOnly($event)"
      />
    </div>
  </div>

</div>
````

````
<div class="Saleable-inputs grid grid-cols-2 mob:grid-cols-1 gap-4 tablet:w-full grid-cols-1">
                        <div class="relative inline-block w-full">
                            <div class="flex items-center mb-3 mob:mb-1">
                                <h6 class="block text-sm col-span-1 w-full required">
                                    {{constructionclass[0]}}
                                </h6>
                                <div
                                    class="text-primary-purple col-span-1 border-b-2 border-[#B0ACC4] pb-1 mob:pb-1 w-full block">
                                    <!-- <input type="number" class="flex-1 text-lg mob:text-sm text-primary-purple bg-transparent pb-2 "
                            min="2" max="182" matInput formControlName="duration" (keypress)="numberOnly($event)" required /> -->
                                    <select
                                        class="w-full flex text-primary-purple text-lg pb-2 bg-[#F4F4F8] mob:text-sm mob:pb-1 undefined"
                                        formControlName="rangeSelection" required>
                                        <option value=""></option>
                                        @if (constructionclass[0] === 'Saleable area range(sq. ft.)') {
                                        @for (item of saleableAreaRange; track item) {
                                        <option value="{{$index}}">{{item}}</option>
                                        }
                                        } @else if (constructionclass[0] === 'Gross floor area range(sq. ft.)') {
                                        @for (item of grossFloorAreaCode; track item) {
                                        <option value="{{$index}}">{{item}}</option>
                                        }
                                        }

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="relative inline-block w-full">
                            <h6 class="block text-sm">
                                {{constructionclass[1]}}
                            </h6>
                            <div class="input-container flex items-center gap-x-3 w-full border-b-2 border-[#B0ACC4]">
                                <input type="number"
                                    class="flex-1 text-lg mob:text-sm text-primary-purple bg-transparent pb-2 " min="49"
                                    max="99999" matInput formControlName="areaRange" (keypress)="numberOnly($event)" />

                            </div>
                        </div>
                    </div>
````

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
