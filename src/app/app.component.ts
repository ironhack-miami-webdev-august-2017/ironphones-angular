import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthApiService } from './services/auth-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private authThang: AuthApiService,
    private routerThang: Router
  ) { }

  logMeOut() {
      this.authThang.logOut()
        .subscribe(
          (apiResponse) => {
              this.routerThang.navigate(['/login'])
          }
        );
  }
}
