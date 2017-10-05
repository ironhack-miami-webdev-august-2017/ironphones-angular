import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PhoneApiService } from '../../services/phone-api.service';
import { AuthApiService } from '../../services/auth-api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {

  imageDomain = environment.apiUrl;

  phoneInfo: any = {};
  userInfo: any;

  constructor(
    private activatedThang: ActivatedRoute,
    private routerThang: Router,
    private phoneThang: PhoneApiService,
    private authThang: AuthApiService
  ) { }

  ngOnInit() {
      this.activatedThang.params.subscribe((myParams) => {
                                // { path: 'phone/:phoneId'
          this.phoneThang.getPhoneDetails(myParams.phoneId)
            .subscribe(
              (thePhoneFromApi) => {
                  this.phoneInfo = thePhoneFromApi;
              }
            );
      });

      this.authThang.getLoginStatus()
        .subscribe(
          (loggedInInfo: any) => {
              if (loggedInInfo.isLoggedIn) {
                  this.userInfo = loggedInInfo.userInfo;
              }
          }
        );
  } // ngOnInit()

  deleteClick() {
      // call the API for deletion
      this.phoneThang.deletePhone(this.phoneInfo._id)
        .subscribe(
          () => {
              this.routerThang.navigate(['']);
          }
        );
  }

}
