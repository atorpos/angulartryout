import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInsuranceProposerInformationComponent } from './home-insurance-proposer-information.component';

describe('HomeInsuranceProposerInformationComponent', () => {
  let component: HomeInsuranceProposerInformationComponent;
  let fixture: ComponentFixture<HomeInsuranceProposerInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeInsuranceProposerInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInsuranceProposerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
