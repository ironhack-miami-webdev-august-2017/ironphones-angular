import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PhoneInfo } from '../interfaces/phone-info';
import { environment } from '../../environments/environment';

@Injectable()
export class PhoneApiService {

  baseUrl: string = environment.apiUrl;

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
  postPhone(phoneFields: PhoneInfo) {
      return this.httpThang.post(
        this.baseUrl + '/api/phones',
        phoneFields,
        { withCredentials: true }
      );
  }

  // DELETE /api/phones/ID
  deletePhone(phoneId: string) {
      return this.httpThang.delete(
        this.baseUrl + '/api/phones/' + phoneId,
        { withCredentials: true }
      );
  }

  // GET /api/myphones
  getMyPhones() {
      return this.httpThang.get(
          this.baseUrl + '/api/myphones',
          { withCredentials: true }
      );
  }

  // PUT    /api/phones/ID

}
