import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PhoneApiService } from '../../services/phone-api.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {

  phoneInfo: any = {};

  constructor(
    private activatedThang: ActivatedRoute,
    private phoneThang: PhoneApiService,
    private routerThang: Router
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
  }

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
