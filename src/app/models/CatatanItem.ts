export class CatatanItem {
  judul = '';
  isiCatatan = '';
  tanggalCatatanBaku = '';
  tanggalCatatanMs = '';

  constructor(mjudul: string = '', misiCatatan: string = '',
              mtanggalcatatanbaku: string = '',
              mtanggalcatatanms: string = '') {
      this.judul = mjudul;
      this.isiCatatan = misiCatatan;
      this.tanggalCatatanBaku = mtanggalcatatanbaku;
      this.tanggalCatatanMs = mtanggalcatatanms;
  }
}
