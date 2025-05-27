import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInsuranceInsuredInformationComponent } from './home-insurance-insured-information.component';

describe('HomeInsuranceInsuredInformationComponent', () => {
  let component: HomeInsuranceInsuredInformationComponent;
  let fixture: ComponentFixture<HomeInsuranceInsuredInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeInsuranceInsuredInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInsuranceInsuredInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
