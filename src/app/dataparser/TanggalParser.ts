import * as moment from 'moment';
moment.locale('id');

const DATE_FORMAT_BAKU = 'dddd, DD MMMM YYYY, HH:mm:ss';

export function parseTanggalSaatIni(): string {
  const momentTanggal = moment();
  const stringTanggal: string = momentTanggal.format(DATE_FORMAT_BAKU);
  return stringTanggal;
}

export function parseTanggalSaatIniMs(): string {
  const momentTanggal = moment();
  const tanggalMsString: string = momentTanggal.valueOf().toString();
  return tanggalMsString;
}
