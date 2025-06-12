#### the form functions

````
proposerInformationForm: new FormGroup({
      surname: new FormControl(),
      givenName: new FormControl(),
      gender: new FormControl(),
      dateOfBirth: new FormControl('', [Validators.required, ageBetweenValidator(18, 100)]),
      idType: new FormControl('HKID'),
      idNo: new FormControl('', [idNoValidator(this.isMacau)]),
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
      })
````
