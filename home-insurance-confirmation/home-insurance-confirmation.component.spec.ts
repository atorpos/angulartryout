import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInsuranceConfirmationComponent } from './home-insurance-confirmation.component';

describe('HomeInsuranceConfirmationComponent', () => {
  let component: HomeInsuranceConfirmationComponent;
  let fixture: ComponentFixture<HomeInsuranceConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeInsuranceConfirmationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInsuranceConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
