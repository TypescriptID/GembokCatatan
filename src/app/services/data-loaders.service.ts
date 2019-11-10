import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { KEY_COOKIES_PASSWORD, KEY_COOKIES_USERNAME, KEY_STORAGE_DATACATATAN } from '../dataparser/Konstans';
import { KunciPassword } from '../dataparser/KunciPassword';
import { PasswordCekModel } from '../models/PasswordCek';
import { CatatanItem } from '../models/CatatanItem';

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
    const stringPassDataCookies = await this.kunciPass.parseKunciPasswordToString(stringPassIsian, String(dataPassCookies));

    if (stringPassIsian === stringPassDataCookies) {
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
    const stringPassIsianHashed = await this.kunciPass.parseKunciPasswordToHash(stringPassIsian);

    const stringPassIsianHashedSaved = await this.storageService.saveDataCookie(KEY_COOKIES_PASSWORD, stringPassIsianHashed);
    const stringUsernameIsianSaved = await this.storageService.saveDataCookie(KEY_COOKIES_USERNAME, stringUsernameIsian);

    if (stringPassIsianHashedSaved && stringUsernameIsianSaved) {
      return true;
    } else {
      return false;
    }
  }

  async getDataCatatanStorage(stringPassIsianTemp: string): Promise<CatatanItem[]> {
    // ambil. data catatan dari local storage yang disimpan
    let jsonDataParsed: CatatanItem[] = [];

    const stringJsonDataCatatanHashed: string = await this.storageService.getItemStorage(KEY_STORAGE_DATACATATAN);
    if (stringJsonDataCatatanHashed) {
      const stringJsonParsed: string = await this.kunciPass.konversiCatatanFromHash(stringPassIsianTemp, stringJsonDataCatatanHashed);
      if (stringJsonParsed) {
        jsonDataParsed = JSON.parse(stringJsonParsed);
        return Promise.resolve(jsonDataParsed);
      } else {
        // catatan gagal dikonversi karena password pembukanya salah
        return Promise.reject(new Error('Data catatan tidak bisa dibuka'));
      }
    } else {
      // data catatan kosong, return catatan kosong
      return Promise.resolve(jsonDataParsed);
    }
  }

  async setDataCatatanStorage(
    stringPassIsianTemp: string,
    catatanModel: CatatanItem, catatanList: CatatanItem[]): Promise<boolean> {
    // simpan data catatan ke dalam array
    catatanList.push(catatanModel);
    const stringJsonDataList: string = await new Promise((resolve) => {
      resolve(JSON.stringify(catatanList));
    });

    if (stringJsonDataList) {
      // simpan data dalam bentuk hash kode
      const stringHashedCatatan: string = await this.kunciPass.konversiCatatanToHash(stringPassIsianTemp,
        stringJsonDataList);

      // simpan data catatan ke local storage
      if (stringHashedCatatan) {
        const results = await this.storageService.saveDataStorage(KEY_STORAGE_DATACATATAN, stringHashedCatatan);
        if (results) {
          return Promise.resolve(true);
        } else {
          return Promise.resolve(false);
        }
      }
    } else {
      return Promise.resolve(false);
    }
  }

  async resetDataStorageClear() {
    await this.storageService.clearDataStorage();
    await this.storageService.deleteDataCookie(KEY_COOKIES_USERNAME);
    await this.storageService.deleteDataCookie(KEY_COOKIES_PASSWORD);
    return Promise.resolve(true);
  }

  cekStringDataCatatan(stringTest: string) {
    // cek form isian jika data sudah benar dan tidak ada karakter yang aneh
    // alfabet, angka,spasi diikutkan
    const regexValidasi = new RegExp(/^[a-zA-Z0-9\-_]*$/);
    const isValid = regexValidasi.test(stringTest);
    return isValid;
  }
}
