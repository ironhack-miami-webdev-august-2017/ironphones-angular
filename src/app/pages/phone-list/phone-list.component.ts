import { Component, OnInit } from '@angular/core';

import { PhoneApiService } from '../../services/phone-api.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  isFormOn = false;
  phones: any[] = [];

  constructor(
    private phoneThang: PhoneApiService
  ) { }

  ngOnInit() {
      this.phoneThang.getPhones()
        .subscribe(
          (phonesFromApi: any[]) => {
              this.phones = phonesFromApi;
          }
        );
  } // ngOnInit()

  showForm() {
      // PRO WAY
      // this.isFormOn = !this.isFormOn;

      if (this.isFormOn) {
          this.isFormOn = false;
      }
      else {
          this.isFormOn = true;
      }
  }

  handleNewPhone(thePhone) {
      this.phones.unshift(thePhone);
      this.isFormOn = false;
  }

}
