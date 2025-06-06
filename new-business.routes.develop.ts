import { Routes } from '@angular/router';
import { AuthGuard } from '../core/auth/guards/auth.guard';
import { NewBusinessComponent } from './new-business.component';
import { PersonalProtectorComponent } from './personal-protector/personal-protector.component';
import { TravelSuranceHkComponent } from './travel-surance/travel-surance-hk/travel-surance-hk.component';
import { TravelSuranceMacauComponent } from './travel-surance/travel-surance-macau/travel-surance-macau.component';

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
    component: TravelSuranceHkComponent,
    data: { breadcrumb: $localize`TravelSurance 7.0` },
    canActivate: [AuthGuard]
  },
  {
    path: 'travel-surance-macau',
    component: TravelSuranceMacauComponent,
    data: { breadcrumb: $localize`TravelSurance 7.0-Macau` },
    canActivate: [AuthGuard]
  }
];
