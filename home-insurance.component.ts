import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, FormArray, Validators} from '@angular/forms';
import { dateValidator } from '../../shared/validators/date-validator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { PolicyIssuedComponent } from '../shared/policy-issued/policy-issued.component';
import { NewBusinessQuotationComponent } from '../shared/new-business-quotation/new-business-quotation.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { STEPPER_GLOBAL_OPTIONS, StepperSelectionEvent } from '@angular/cdk/stepper';
import { NewBusinessService } from '../shared/services/new-business.service';
import { MessageDialogService } from '../../shared/services/message-dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { NewBusinessQuotationDetails } from '../shared/models/new-business-quotation-details.model';
import moment, { duration } from 'moment';
import { HomeInsuranceFastQuotationComponent } from './home-insurance-fast-quotation/home-insurance-fast-quotation.component';
import { NewBusinessComponent } from "../new-business.component";

@Component({
  selector: 'app-home-insurance',
  imports: [CommonModule, MatButtonModule, MatStepperModule, MatInputModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, PolicyIssuedComponent, NewBusinessQuotationComponent, MatButtonModule, MatTooltipModule, NewBusinessComponent, HomeInsuranceFastQuotationComponent],
  templateUrl: './home-insurance.component.html',
  styleUrl: './home-insurance.component.scss',
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: {displayDefaultIndicatorType: false}
  }]
})
export class HomeInsuranceComponent {
  @ViewChild(HomeInsuranceFastQuotationComponent) fastQuotationComponent!: HomeInsuranceFastQuotationComponent;
  @Input() agentNo!: string

  constructor(
    private newBusinessService: NewBusinessService,
    private messageDialogService: MessageDialogService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  isMacau = false;
  classDefault = "N/A"
  isSubmit = false;
  policyNo = '';

  readonly dialog = inject(MatDialog);

  quotationData: NewBusinessQuotationDetails = {
    display: false,
    originalPremium: 0,
    premium: 0,
    iaLevy: 0,
    totalPremuim: 0,
    commission: 0,
    showComission: false
  };

  homeSuranceForm = new FormGroup({
    externalReferenceNo: new FormControl(),

    //FastQuotation - will define
    fastQuotationForm: new FormGroup({
      duration: new FormControl(null, [Validators.max(366), Validators.min(364)]),
      startDate: new FormControl(null, [Validators.min(new Date().getTime()), dateValidator]),
      endDate: new FormControl(null, [dateValidator])
    }),


    //Proposer Information
    proposerInformationForm: new FormGroup({
      surname: new FormControl('', [Validators.required]),
      givenName: new FormControl('', [Validators.required])
    })
  });

  ngOnInit(): void {
      this.agentNo = "17000047"
    }

    onStepperClick($event: StepperSelectionEvent){
      switch($event.selectedIndex){
        case 1:
          break
        case 2:
          break
        default:
      }
    }

    onGetQuoteClick(){

    }

    onBuyNowClick(){

    }

    onExternalReferenceNumberKeyPress(input: KeyboardEvent): boolean {
    if (!(input.key.match(/^[A-Za-z0-9^]*$/))) {
      return false;
    }
    return true;
  }
}
