import { Injectable } from '@angular/core';
import UserDataTemp from '../models/UserDataTemp';

@Injectable({
  providedIn: 'root'
})
export class StatedataServicesService {

  usernameIsianTemp = '';
  kunciPassIsianTemp = '';
  idCatatanDetail = '';

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

  setIdCatatanDetail(stringIdCatatan: string = ''): boolean {
    if (stringIdCatatan) {
      this.idCatatanDetail = stringIdCatatan;
      return true;
    }
    return false;
  }

  getIdCatatanDetail(): string {
    return this.idCatatanDetail;
  }
}
