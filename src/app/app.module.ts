import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

import { PhoneApiService } from './services/phone-api.service';
import { AuthApiService } from './services/auth-api.service';
import { NeedsLoginGuardService } from './guards/needs-login-guard.service';
import { HackGuardService } from './guards/hack-guard.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneListComponent } from './pages/phone-list/phone-list.component';
import { PhoneDetailsComponent } from './pages/phone-details/phone-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PhoneFormComponent } from './components/phone-form/phone-form.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MyPhonesComponent } from './pages/my-phones/my-phones.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailsComponent,
    NotFoundComponent,
    PhoneFormComponent,
    SignUpComponent,
    MyPhonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FileUploadModule
  ],
  providers: [
    PhoneApiService,
    AuthApiService,
    NeedsLoginGuardService,
    HackGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
