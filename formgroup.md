#### the form functions

````
{
    externalReferenceNo: new FormControl(''),

    //FastQuotation - checker issue, can go above 150
    fastQuotationForm: new FormGroup({
      startDate: new FormControl(null, [Validators.min(new Date().getTime()), dateValidator]),
      endDate: new FormControl(null, [dateValidator]),
      areaRange: new FormControl(null, [Validators.min(100)]),
      rangeSelection: new FormControl(),
      selectedPlan: new FormControl(null, [Validators.required]),
      selectClass: new FormControl('Saleable area'),
      annualPremium: new FormControl(),
      contentLimit: new FormControl(),
      libilityLimit: new FormControl(),
      selectRange: new FormControl(''),
      // ... existing controls ...
      jacketCode: new FormControl(''),
      grossFloorArea: new FormControl(0),
      grossFloorAreaRange: new FormControl('')

    }),


    //Proposer Information
    proposerInformationForm: new FormGroup({
      surname: new FormControl(),
      givenName: new FormControl(),
      gender: new FormControl(),
      dateOfBirth: new FormControl('', [Validators.required, ageBetweenValidator(18, 100)]),
      idType: new FormControl('HKID'),
      idNo: new FormControl('', [idNoValidator(this.isMacau, () => this.homeInsuranceForm.get('proposerInformationForm')?.get('idType')?.value || " ")]),
      maritalStatus: new FormControl(),
      countryCode: new FormControl('852'),
      mobileNo: new FormControl(),
      email: new FormControl('', [emailValidator()]),
      correspondenceAddress: new FormControl('Address'),
      addressType: new FormControl('Address'),
      receiveDiscountOffer: new FormControl(false),
      identityCheckDigit: new FormControl(''),

      // address
      addressForm: new FormGroup({
        searchYourAddress: new FormControl(),
        flatType: new FormControl("Flat"),
        flat: new FormControl(),
        floor: new FormControl(),
        blockType: new FormControl("Block"),
        block: new FormControl(),
        building: new FormControl(),
        estate: new FormControl(),
        estatePhase: new FormControl(),
        street: new FormControl(),
        village: new FormControl(),
        dd: new FormControl(),
        lot: new FormControl(),
        streetNo: new FormControl(),


        district: new FormControl(),
        subDistrict: new FormControl(),
        displayDistrict: new FormControl(),

        area: new FormControl(),
      }),

      // post office box
      postOfficeBoxForm: new FormGroup({

        postOffice: new FormControl(''),
        poBoxNo: new FormControl('')
      }),

      lineLength: new FormControl(),
      maxNumberOfLines: new FormControl(),
      unstructuredAddress: new FormControl()
    }, { validators: [nameValidator, mobileNoValidator] } as AbstractControlOptions),

    insuredInformationForm: new FormGroup(
      {
        sameAsProposer: new FormControl(true),
        insuredAddress: new FormControl(),
        surname: new FormControl(),
        givenName: new FormControl(),
        gender: new FormControl('', [Validators.required]),
        dateOfBirth: new FormControl('', [Validators.required, ageBetweenValidator(16, 70)]),
        idType: new FormControl('HKID'),
        idNo: new FormControl('', [idNoValidator(this.isMacau)]),
        address: new FormControl(),
        addressLine1: new FormControl(''),
        addressLine2: new FormControl(''),
        addressLine3: new FormControl('')

      }
    ),
    receiveDiscountOffer: new FormControl()
  });
````
