import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { SignupInfo } from '../interfaces/signup-info';
import { LoginInfo } from '../interfaces/login-info';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthApiService {

  baseUrl: string = environment.apiUrl;

  // the thing that receives the changes
  loginStatusSubject = new BehaviorSubject<any>({ isLoggedIn: false });

  // the thing that broadcasts the changes
  loginStatusNotifier = this.loginStatusSubject.asObservable();


  constructor(
    private httpThang: HttpClient
  ) { }

  // POST /api/process-signup
  postSignup(userInfo: SignupInfo) {
      const signUpRequest =
        this.httpThang.post(
            this.baseUrl + '/api/process-signup',
            userInfo,
            { withCredentials: true }
        );  // need "withCredentials" for APIs that use the session

      signUpRequest.subscribe((userInfo) => {
          this.loginStatusSubject.next({
              isLoggedIn: true,
              userInfo: userInfo
          });
      });

      return signUpRequest;
  } // postSignup()

  // GET /api/checklogin
  getLoginStatus() {
      const loginStatusRequest =
        this.httpThang.get(
            this.baseUrl + '/api/checklogin',
            { withCredentials: true }
        ); // need "withCredentials" for APIs that use the session

      loginStatusRequest.subscribe((loggedInInfo) => {
          this.loginStatusSubject.next(loggedInInfo);
      });

      return loginStatusRequest;
  } // getLoginStatus()

  // POST /api/process-login
  postLogin(loginCredentials: LoginInfo) {
      const loginRequest =
        this.httpThang.post(
            this.baseUrl + '/api/process-login',
            loginCredentials,
            { withCredentials: true }
        ); // need "withCredentials" for APIs that use the session

      loginRequest.subscribe((userInfo) => {
          this.loginStatusSubject.next({
              isLoggedIn: true,
              userInfo: userInfo
          });
      });

      return loginRequest;
  } // loginRequest()

  // DELETE /api/logout
  logOut() {
      const logoutRequest =
        this.httpThang.delete(
            this.baseUrl + '/api/logout',
            { withCredentials: true }
        );

      logoutRequest.subscribe(() => {
          this.loginStatusSubject.next({ isLoggedIn: false })
      });

      return logoutRequest;
  } // logOut()

}
