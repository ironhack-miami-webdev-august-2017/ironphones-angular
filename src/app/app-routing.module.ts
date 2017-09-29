import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoneListComponent } from './pages/phone-list/phone-list.component';
import { PhoneDetailsComponent } from './pages/phone-details/phone-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '',               component: PhoneListComponent },
  { path: 'phone/:phoneId', component: PhoneDetailsComponent },
  { path: '**',             component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
