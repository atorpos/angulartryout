import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatRadioGroup, MatRadioButton, MatRadioChange } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MsigDatepickerDirective } from '../../../shared/directives/msig-datepicker.directive';
import * as appConstants from '../../../shared/app-constants'
import { MessageDialogService } from '../../../shared/services/message-dialog.service';
import { ActionType, Status } from '../../../shared/components/message-dialog/shared/message-dialog-enum.model';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
import { now } from 'lodash';

const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-home-insurance-fast-quotation',
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatDatepickerModule, MatInputModule, MatTooltipModule, MsigDatepickerDirective, MatRadioGroup, MatRadioButton, MatCardModule],
  templateUrl: './home-insurance-fast-quotation.component.html',
  styleUrl: './home-insurance-fast-quotation.component.scss',
  providers: [provideMomentDateAdapter(appConstants.DATE_FORMATS)],
})
export class HomeInsuranceFastQuotationComponent {
  @Input() homeSuranceForm!: FormGroup;
  fastQuotationForm: FormGroup = new FormGroup({});

  minStartDate = new Date();
  minEndDate = new Date();

  selectedPlan = 'Silver plan';
  plans =[
    {
      name: 'Silver plan',
      contents: '$1,000,000',
      liability: '$5,000,000',
      premium: '$1,430'
    },
    {
      name: 'Gold plan',
      contents: '$750,000',
      liability: '$5,000,000',
      premium: '$1,090'
    },
    {
      name: 'Platium plan',
      contents: 'null',
      liability: 'null',
      premium: 'null'
    },
  ];
  selectClass = 'Saleable area';

  conClass = [
    {
      name: 'Saleable area',
      genName: 'Saleable area range (sq.ft.)',
      subName: 'Exact saleable area (sq. ft.)',
      pdValues: ['300-560', '≤ 640', '> 960']
    },
    {
      name: 'Gross area',
      genName: 'Gross floor area (sq.ft.)',
      subName: 'Exact gross floor area (sq. ft.)',
      pdValues: ['300-560', '≤ 640', '> 960']
    }
  ];

  constructor(
    private messageDialogService: MessageDialogService
  ) {}

  ngOnInit(): void {
    this.fastQuotationForm = this.homeSuranceForm.get('fastQuotationForm') as FormGroup;
    this.fastQuotationForm.controls['startDate'].setValue(this.minStartDate);
    var presetEndDate = moment().clone().add(1, 'year').subtract(1, 'day');
    this.fastQuotationForm.controls['endDate'].setValue(presetEndDate);
    
  }

  onSubmit(onCompleted?:()=>void): void {
    this.fastQuotationForm.markAllAsTouched();
    if(!this.isCompleted) {
      this.messageDialogService.openMessageDialog({
        status: Status.Error,
        title: $localize`Alert`,
        message: $localize`Invalid data, please try again.`,
        actionButtonList: [
          {
            actionType: ActionType.Confirm,
            text: $localize`Close`
          }
        ]
      })
      return
    }

    onCompleted?.();
  }

  get isCompleted(): boolean {
    return(this.fastQuotationForm.valid);
  }

  onStartDateChange(): void {
    let duration = 365;
    var startDate = this.fastQuotationForm.controls['startDate']
    if(startDate.invalid) {
      return
    }
    this.fastQuotationForm.controls['endDate'].setValue(moment(startDate.value).add(duration -1, 'day'))
  }

  onEndDateChange(): void {
    let duration = 365;
    var endDate = this.fastQuotationForm.controls['endDate'];
    if (endDate.invalid) {
      return
    }
    this.fastQuotationForm.controls['startDate'].setValue(moment(endDate.value).subtract(duration - 1, 'day'));
  }

  numberOnly(input: KeyboardEvent): boolean {
    if(!(input.key.match(/[0-9]/g))) {
      return false;
    }
    return true;
  }
}
