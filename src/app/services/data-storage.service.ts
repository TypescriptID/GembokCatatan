import { Injectable } from '@angular/core';
import * as localForage from 'localforage';
import * as Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }

  saveDataStorage(key: string, value: any) {
    const promiseSaved = localForage.setItem(key, value);
    return promiseSaved;
  }

  getItemStorage(key: string): Promise<any> {
    const promiseGetData = localForage.getItem(key);
    return promiseGetData;
  }

  removeDataStorage(key: string) {
    const promiseRemoveData = localForage.removeItem(key);
    return promiseRemoveData;
  }

  clearDataStorage() {
    const promiseDeleteAll = localForage.clear();
    return promiseDeleteAll;
  }

  saveDataCookie(key: string , value: any) {
    return new Promise((resolve) => {
      Cookies.set(key, value);
      resolve(value);
    });
  }

  getDataCookie(key: string) {
    return new Promise((resolve) => {
      const data = Cookies.get(key);
      resolve(data);
    });
  }

  deleteDataCookie(key: string) {
    return new Promise((resolve) => {
      Cookies.remove(key);
      resolve(key);
    });
  }
}
