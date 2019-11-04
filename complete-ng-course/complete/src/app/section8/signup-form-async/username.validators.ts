import {AbstractControl, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';

export class UsernameAsyncValidators {
  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('executing');
        if (control) {
          if ((control.value as string) === 'mosh') {
            resolve({shouldBeUnique: true});
          } else {
            resolve({});
          }
        } else {
          resolve({});
        }
        // reject('Sorry, not unique');
      }, 2000);
    });
  }
}
