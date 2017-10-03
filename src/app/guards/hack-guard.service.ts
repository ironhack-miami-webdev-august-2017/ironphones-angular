import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { PhoneListComponent } from '../pages/phone-list/phone-list.component';


@Injectable()
export class HackGuardService implements CanDeactivate<PhoneListComponent> {

  leaveCount: number = 0;

  constructor() { }

  canDeactivate() {
      if (this.leaveCount < 5) {
          this.leaveCount += 1;
          alert('You are trapped forever.');
          return false;
      }
      else {
          this.leaveCount = 0;
          alert('Okay, you can go.');
          return true;
      }
  }

}
