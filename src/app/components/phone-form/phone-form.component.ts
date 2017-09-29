import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

import { PhoneInfo } from '../../interfaces/phone-info';
import { PhoneApiService } from '../../services/phone-api.service';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {

  newPhone: PhoneInfo = {
    phoneName: '',
    phoneBrand: '',
    phoneImage: '',
    phoneSpecs: []
  };
  errorMessage: string;

  // notifies the parent when a new phone is successfully added
  @Output() newPhoneNotifier = new EventEmitter();

  constructor(
    private phoneThang: PhoneApiService
  ) { }

  ngOnInit() {
  }

  saveNewPhone() {
      // send "this.newPhone" to the backend for saving
      this.phoneThang.postPhone(this.newPhone)
        .subscribe(
          // SUCCESS! (1st argument of "subscribe()")
          (fullPhoneDetails) => {
              console.log('New phone success', fullPhoneDetails);

              // notify the parent about the new phone through the output
              this.newPhoneNotifier.emit(fullPhoneDetails);

              this.errorMessage = '';
              this.newPhone = {
                phoneName: '',
                phoneBrand: '',
                phoneImage: '',
                phoneSpecs: []
              };
          },

          // ERROR! (2nd argument of "subscribe()")
          (errorInfo) => {
              console.log('New phone error', errorInfo);

              if (errorInfo.status === 400) {
                  this.errorMessage = 'Validation error.';
              }
              else {
                  this.errorMessage = 'Unknown error. Try again later.'
              }
          }
        ); // .subscribe()
  } // saveNewPhone()

}
