import SimpleCrypto from 'simple-crypto-js';

export class KunciPassword {

  parseKunciPasswordToHash(stringIsianKunci: string = '') {
    const simpleCrypto = new SimpleCrypto(stringIsianKunci);
    const passwordHash = simpleCrypto.encrypt(stringIsianKunci);
    return passwordHash;
  }

  parseKunciPasswordToString(
    stringIsianKunci: string = '', stringHashKunci: string = '') {
      const simpleCrypto = new SimpleCrypto(stringIsianKunci);
      const stringKunciDariHash = simpleCrypto.decrypt(stringHashKunci);
      return stringKunciDariHash;
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

  konversiCatatanToHash(stringKunciPassTemp: string, stringCatatan: string) {
    const simpleCrypto = new SimpleCrypto(stringKunciPassTemp);
    const stringCatatanHash = simpleCrypto.encrypt(stringCatatan);
    return stringCatatanHash;
  }

  konversiCatatanFromHash(stringKunciPassTemp: string, stringCatatanHash: string) {
    const simpleCrypto = new SimpleCrypto(stringKunciPassTemp);
    const stringCatatan = simpleCrypto.encrypt(stringCatatanHash);
    return stringCatatan;
  }
}
