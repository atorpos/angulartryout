#### issues:

````
if(this.homeInsuranceForm.controls['proposerInformationForm'].controls['correspondenceAddress'].value == 'postOfficeBox') {
                    this.homeInsuranceForm.controls['insuredInformationForm'].controls['isSameAsProposerCorresspondenceAddress'].setValue(false);
                  }
                  this.homeInsuranceForm.controls['insuredInformationForm'].controls['address'].setValue(
                    this.homeInsuranceForm.controls['proposerInformationForm'].controls['unstructuredAddress'].value.join(', '));

````
