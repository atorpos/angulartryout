import { Routes } from '@angular/router';
import { AuthGuard } from '../core/auth/guards/auth.guard';
import { NewBusinessComponent } from './new-business.component';
import { PersonalProtectorComponent } from './personal-protector/personal-protector.component';
import { TravelSuranceComponent } from './travel-surance/travel-surance.component';
import { HomeComponent } from '../home/home.component';
import { HomeInsuranceComponent } from './home-insurance/home-insurance-hk/home-insurance.component';

export const routes: Routes = [
  {
    path: '',
    component: NewBusinessComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'personal-protector',
    component: PersonalProtectorComponent,
    data: { breadcrumb: $localize`Personal Protector 3.0` },
    canActivate: [AuthGuard]
  },
  {
    path: 'travel-surance',
    component: TravelSuranceComponent,
    data: { breadcrumb: $localize`TravelSurance 7.0` },
    canActivate: [AuthGuard]
  },
  {
    path: 'home-insurance',
    component: HomeInsuranceComponent,
    data: { breadrumb: $localize`Home Insurance 3.0`},
    canActivate: [AuthGuard]
  }
];
