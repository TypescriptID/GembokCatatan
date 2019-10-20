import SimpleCrypto from 'simple-crypto-js';

export class KunciPassword {

  parseKunciPasswordToHash(stringIsianKunci: string = ''): Promise<string> {
    return new Promise((resolve) => {
      const simpleCrypto = new SimpleCrypto(stringIsianKunci);
      const passwordHash = simpleCrypto.encrypt(stringIsianKunci);
      resolve(passwordHash);
    });
  }

  parseKunciPasswordToString(
    stringIsianKunci: string = '', stringHashKunci: string = ''): Promise<any> {
      return new Promise((resolve) => {
        const simpleCrypto = new SimpleCrypto(stringIsianKunci);
        const stringKunciDariHash = simpleCrypto.decrypt(stringHashKunci);
        resolve(stringKunciDariHash);
      });
  }

  cekValidasiKunciCookiesDanIsian(stringHashKunciIsian: string = '', stringHashKunciCookies: string = '') {
    let isValidKunci = false;
    if (stringHashKunciIsian && stringHashKunciCookies) {
      if (stringHashKunciIsian === stringHashKunciCookies) {
        isValidKunci = true;
      } else {
        isValidKunci = false;
      }
    }
    return isValidKunci;
  }

  konversiCatatanToHash(stringKunciPassTemp: string, stringCatatan: string): Promise<string> {
    return new Promise((resolve) => {
      const simpleCrypto = new SimpleCrypto(stringKunciPassTemp);
      const stringCatatanHash = simpleCrypto.encrypt(stringCatatan);
      resolve(stringCatatanHash);
    });
  }

  konversiCatatanFromHash(stringKunciPassTemp: string, stringCatatanHash: string): Promise<any> {
    return new Promise((resolve) => {
      const simpleCrypto = new SimpleCrypto(stringKunciPassTemp);
      const stringCatatan = simpleCrypto.decrypt(stringCatatanHash);
      resolve(stringCatatan);
    });
  }
}
