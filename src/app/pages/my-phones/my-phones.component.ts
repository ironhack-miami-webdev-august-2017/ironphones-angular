import { Component, OnInit } from '@angular/core';

import { PhoneApiService } from '../../services/phone-api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-my-phones',
  templateUrl: './my-phones.component.html',
  styleUrls: ['./my-phones.component.css']
})
export class MyPhonesComponent implements OnInit {

  imageDomain = environment.apiUrl;

  myPhones: any[] = [];
  errorMessage: string;

  constructor(
    private phoneThang: PhoneApiService
  ) { }

  ngOnInit() {
      this.phoneThang.getMyPhones()
        .subscribe(
          (listOfPhones: any[]) => {
              this.myPhones = listOfPhones;
          },

          (errInfo) => {
              if (errInfo.status === 401) {
                  this.errorMessage = 'You need to be logged in.';
              }
              else {
                  this.errorMessage = 'Something went wrong. Try again later.';
              }
          }
        ); // .subscribe()
  } // ngOnInit()

}
