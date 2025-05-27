import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MsigDatepickerDirective } from '../../../shared/directives/msig-datepicker.directive';
import * as appConstants from '../../../shared/app-constants'
import { MessageDialogService } from '../../../shared/services/message-dialog.service';
import { ActionType, Status } from '../../../shared/components/message-dialog/shared/message-dialog-enum.model';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-home-insurance-fast-quotation',
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatDatepickerModule, MatInputModule, MatTooltipModule, MsigDatepickerDirective
  ],
  templateUrl: './home-insurance-fast-quotation.component.html',
  styleUrl: './home-insurance-fast-quotation.component.scss',
  providers: [provideMomentDateAdapter(appConstants.DATE_FORMATS)],
})
export class HomeInsuranceFastQuotationComponent {
  @Input() homeInsuranceForm!: FormGroup;
  homefastQuotationForm: FormGroup = new FormGroup({});

  minStartDate = new Date();
  minEndDate = new Date();

  constructor(
    private messageDialogService: MessageDialogService
  ) {}

  ngOnInit(): void {
    this.homefastQuotationForm = this.homeInsuranceForm.get('homefastQuotationForm') as FormGroup;
    this.homefastQuotationForm.controls['startDate'].setValue(this.minStartDate);
    
  }

  onSubmit(onCompleted?:()=>void): void {
    this.homefastQuotationForm.markAllAsTouched();
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
    return(this.homefastQuotationForm.valid);
  }

  onStartDateChange(): void {
    let duration = 365;
    var startDate = this.homefastQuotationForm.controls['startDate']
    if(startDate.invalid) {
      return
    }
    this.homefastQuotationForm.controls['endDate'].setValue(moment(startDate.value).add(duration -1, 'day'))
  }

  onEndDateChange(): void {
    let duration = 365;
    var endDate = this.homefastQuotationForm.controls['endDate'];
    if (endDate.invalid) {
      return
    }
    this.homefastQuotationForm.controls['startDate'].setValue(moment(endDate.value).subtract(duration - 1, 'day'));
  }

  numberOnly(input: KeyboardEvent): boolean {
    if(!(input.key.match(/[0-9]/g))) {
      return false;
    }
    return true;
  }
}
