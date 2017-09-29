import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PhoneApiService } from './services/phone-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneListComponent } from './pages/phone-list/phone-list.component';
import { PhoneDetailsComponent } from './pages/phone-details/phone-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PhoneApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
