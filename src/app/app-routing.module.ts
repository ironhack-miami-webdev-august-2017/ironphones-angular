import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeedsLoginGuardService } from './guards/needs-login-guard.service';
import { HackGuardService } from './guards/hack-guard.service';

import { PhoneListComponent } from './pages/phone-list/phone-list.component';
import { PhoneDetailsComponent } from './pages/phone-details/phone-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MyPhonesComponent } from './pages/my-phones/my-phones.component';

const routes: Routes = [
  {
    path: '',
    component: PhoneListComponent,
    // canDeactivate: [ HackGuardService ]
  },
  { path: 'phone/:phoneId', component: PhoneDetailsComponent },
  { path: 'signup',         component: SignUpComponent },
  { path: 'login',          component: SignUpComponent },
  {
    path: 'myphones',
    component: MyPhonesComponent,
    canActivate: [ NeedsLoginGuardService ]
  },
  { path: '**',             component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
