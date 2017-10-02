import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SignupInfo } from '../interfaces/signup-info';

@Injectable()
export class AuthApiService {

  baseUrl: string = 'http://localhost:3000';

  constructor(
    private httpThang: HttpClient
  ) { }

  // POST /process-signup
  postSignup(userInfo: SignupInfo) {
      return this.httpThang.post(
          this.baseUrl + '/api/process-signup',
          userInfo,
          { withCredentials: true }
      );  // need "withCredentials" for APIs that use the session
  }

  // GET /checklogin
  getLoginStatus() {
      return this.httpThang.get(
          this.baseUrl + '/api/checklogin',
          { withCredentials: true }
      ); // need "withCredentials" for APIs that use the session
  }

  // POST /process-login
  // DELETE /logout

}
