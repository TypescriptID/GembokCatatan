import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { KEY_COOKIES_PASSWORD, KEY_COOKIES_USERNAME } from '../dataparser/Konstans';
import { KunciPassword } from '../dataparser/KunciPassword';
import { PasswordCekModel } from '../models/PasswordCek';

@Injectable({
  providedIn: 'root'
})
export class DataLoadersService {

  kunciPass: KunciPassword = null;

  constructor(private readonly storageService: DataStorageService) {
    this.kunciPass = new KunciPassword();
  }

  async cekPasswordIsianPengguna(stringUsernameIsian: string, stringPassIsian: string)
  : Promise<PasswordCekModel> {
    // ambil data password dari cookies
    const passwordCekModel: PasswordCekModel = new PasswordCekModel();

    const dataPassCookies = await this.storageService.getDataCookie(KEY_COOKIES_PASSWORD);
    const dataUsernameCookies = await this.storageService.getDataCookie(KEY_COOKIES_USERNAME);
    const stringPassIsianHashed = await new Promise((resolve) => {
      resolve(this.kunciPass.parseKunciPasswordToHash(stringPassIsian));
    });

    if (dataPassCookies === stringPassIsianHashed) {
      passwordCekModel.isPasswordOK = true;
      if (stringUsernameIsian === dataUsernameCookies) {
        passwordCekModel.isUsernameOk = true;
      } else {
        passwordCekModel.isUsernameOk = false;
      }
    } else {
      passwordCekModel.isPasswordOK = false;
    }

    return Promise.resolve(passwordCekModel);
  }

  async savePasswordIsianPengguna(stringUsernameIsian: string, stringPassIsian: string) {
    // simpan data password isian pengguna
    const stringPassIsianHashed = await new Promise((resolve) => {
      resolve(this.kunciPass.parseKunciPasswordToHash(stringPassIsian));
    });

    const stringPassIsianHashedSaved = await this.storageService.saveDataCookie(KEY_COOKIES_PASSWORD, stringPassIsianHashed);
    const stringUsernameIsianSaved = await this.storageService.saveDataCookie(KEY_COOKIES_USERNAME, stringUsernameIsian);

    if (stringPassIsianHashedSaved  && stringUsernameIsianSaved) {
      return true;
    } else {
      return false;
    }
  }

  getDataCatatanStorage() {

  }

  setDataCatatanStorage() {

  }

  resetDataStorageClear() {

  }
}
