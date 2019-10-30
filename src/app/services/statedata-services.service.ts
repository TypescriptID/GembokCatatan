import { Injectable } from '@angular/core';
import UserDataTemp from '../models/UserDataTemp';

@Injectable({
  providedIn: 'root'
})
export class StatedataServicesService {

  usernameIsianTemp = '';
  kunciPassIsianTemp = '';

  constructor() { }

  setIsianDataPenggunaTemp(stringusername: string = '', stringpass: string = '') {
    if (stringusername && stringpass) {
      this.usernameIsianTemp = stringusername;
      this.kunciPassIsianTemp = stringpass;
    }
  }

  getIsianDataPenggunaTemp(): UserDataTemp {
    const userDataTemp = new UserDataTemp(this.usernameIsianTemp, this.kunciPassIsianTemp);
    return userDataTemp;
  }
}
