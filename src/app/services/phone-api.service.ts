import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PhoneApiService {

  baseUrl: string = 'http://localhost:3000';

  constructor(
    private httpThang: HttpClient
  ) { }

  // GET    /api/phones
  getPhones() {
      return this.httpThang.get(
        this.baseUrl + '/api/phones'
      );
  }

  // GET    /api/phones/ID
  getPhoneDetails(phoneId: string) {
      return this.httpThang.get(
        this.baseUrl + '/api/phones/' + phoneId
      );
  }

  // POST   /api/phones
  // PUT    /api/phones/ID
  // DELETE /api/phones/ID

}
