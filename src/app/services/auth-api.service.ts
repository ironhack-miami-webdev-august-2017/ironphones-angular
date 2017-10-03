import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SignupInfo } from '../interfaces/signup-info';
import { LoginInfo } from '../interfaces/login-info';

@Injectable()
export class AuthApiService {

  baseUrl: string = 'http://localhost:3000';

  constructor(
    private httpThang: HttpClient
  ) { }

  // POST /api/process-signup
  postSignup(userInfo: SignupInfo) {
      return this.httpThang.post(
          this.baseUrl + '/api/process-signup',
          userInfo,
          { withCredentials: true }
      );  // need "withCredentials" for APIs that use the session
  }

  // GET /api/checklogin
  getLoginStatus() {
      return this.httpThang.get(
          this.baseUrl + '/api/checklogin',
          { withCredentials: true }
      ); // need "withCredentials" for APIs that use the session
  }

  // POST /api/process-login
  postLogin(loginCredentials: LoginInfo) {
      return this.httpThang.post(
          this.baseUrl + '/api/process-login',
          loginCredentials,
          { withCredentials: true }
      ); // need "withCredentials" for APIs that use the session
  }

  // DELETE /api/logout
  logOut() {
      return this.httpThang.delete(
          this.baseUrl + '/api/logout',
          { withCredentials: true }
      );
  }

}
