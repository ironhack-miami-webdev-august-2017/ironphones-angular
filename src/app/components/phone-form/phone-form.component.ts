import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import { PhoneInfo } from '../../interfaces/phone-info';
import { PhoneApiService } from '../../services/phone-api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {

  myUploader =
    new FileUploader(
      {
        url: environment.apiUrl + '/api/phones',
        itemAlias: 'phoneImage'
      } // "itemAlias" is the input name we want the backend to receive
    );

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
      // if there images to upload, save phone with image.
      if (this.myUploader.getNotUploadedItems().length > 0) {
          this.savePhoneWithImage();
      }

      // otherwise there are NO images to upload, do regular AJAX.
      else {
          this.savePhoneNoImage();
      }
  } // saveNewPhone()

  savePhoneWithImage() {
      this.myUploader.onBuildItemForm = (item, form) => {
          form.append('phoneName', this.newPhone.phoneName);
          form.append('phoneBrand', this.newPhone.phoneBrand);
          form.append('phoneSpecs', this.newPhone.phoneSpecs);
      }; // onBuildItemForm

      this.myUploader.onSuccessItem = (item, response) => {
          const fullPhoneDetails = JSON.parse(response);
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
      }; // onSuccessItem

      this.myUploader.onErrorItem = (item, response) => {
          console.log('New phone error', response);

          this.errorMessage = 'Unknown error. Try again later.'
      }; // onErrorItem

      // START the AJAX request
      this.myUploader.uploadAll();
  } // savePhoneWithImage()

  savePhoneNoImage() {
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
  } // savePhoneNoImage()

}
