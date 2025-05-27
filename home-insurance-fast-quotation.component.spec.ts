import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInsuranceFastQuotationComponent } from './home-insurance-fast-quotation.component';

describe('HomeInsuranceFastQuotationComponent', () => {
  let component: HomeInsuranceFastQuotationComponent;
  let fixture: ComponentFixture<HomeInsuranceFastQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeInsuranceFastQuotationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInsuranceFastQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
