import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router';
import { StatedataServicesService } from 'src/app/services/statedata-services.service';
import { DataLoadersService } from 'src/app/services/data-loaders.service';
import Swal from 'sweetalert2';

import { parseTanggalSaatIni, parseTanggalSaatIniMs } from 'src/app/dataparser/TanggalParser';
import UserDataTemp from 'src/app/models/UserDataTemp';
import { CatatanItem } from 'src/app/models/CatatanItem';
import { ROUTE_NAV_DAFTAR_CATATAN } from 'src/app/dataparser/Konstans';

@Component({
  selector: 'app-buat-catatan',
  templateUrl: './buat-catatan.component.html',
  styleUrls: ['./buat-catatan.component.scss']
})
export class BuatCatatanComponent implements OnInit {

  public editorText = ClassicEditor;

  configEditor = {
    toolbar: ['heading', '|', 'bold', 'italic', 'link',
      'bulletedList', 'numberedList', 'blockQuote',
      '|', 'undo', 'redo', '|', 'outdent', 'indent'],
    placeholder: 'Isi pesan catatan disini'
  };

  catatanItems = {
    judul: '',
    isicatatan: '',
    tanggalcatatan: '',
    tanggalcatatanms: '0',
  };

  userPassTemp = '';
  listCatatan: CatatanItem[] = [];

  constructor(
    private router: Router,
    private stateData: StatedataServicesService,
    private dataLoader: DataLoadersService) { }

  ngOnInit() {
  }

  cekIsianCatatan() {
    if (this.catatanItems.judul && this.catatanItems.judul.length > 5) {
      if (this.catatanItems.isicatatan && this.catatanItems.isicatatan.length > 5) {
        this.buatSimpanCatatan();
      } else {
        this.showToastGagal('Silahkan isi catatan rahasia dengan benar');
      }
    } else {
      this.showToastGagal('Silahkan isi judul catatan dengan benar');
    }
  }

  buatSimpanCatatan() {
    this.catatanItems.tanggalcatatan = parseTanggalSaatIni();
    this.catatanItems.tanggalcatatanms = parseTanggalSaatIniMs();
    const userDataTemp: UserDataTemp = this.stateData.getIsianDataPenggunaTemp();

    if (userDataTemp.stringPassword && userDataTemp.stringPassword.length > 3) {
      // ambil data catatan yang lama
      this.userPassTemp = userDataTemp.stringPassword;
      this.dataLoader.getDataCatatanStorage(this.userPassTemp).then((result: CatatanItem[]) => {
        this.listCatatan = result;
        this.simpanDataCatatan();
      })
        .catch((err) => {
          console.warn(err);
        });
    }
  }

  simpanDataCatatan() {
    const catatanItem = new CatatanItem(this.catatanItems.judul, this.catatanItems.isicatatan,
      this.catatanItems.tanggalcatatan, this.catatanItems.tanggalcatatanms);


    this.dataLoader.setDataCatatanStorage(this.userPassTemp, catatanItem, this.listCatatan)
      .then((result: boolean) => {
        if (result === true) {
          this.showToastSukses('Sukses menyimpan data catatan ke dalam browser');
        } else {
          this.showToastGagal('Gagal melakukan penyimpanan catatan');
        }
      })
      .catch((errors) => {
        console.warn(errors);
      });
  }

  navigasiHalamanDaftarCatatan() {
    this.router.navigate([ROUTE_NAV_DAFTAR_CATATAN], { replaceUrl: true });
  }

  showToastSukses(stringPesan: string) {
    Swal.fire({
      icon: 'success',
      title: 'Berhasil...',
      text: stringPesan,
      confirmButtonText: 'Setuju',
      timer: 2000,
      allowOutsideClick: false,
      onClose: () => {
        this.navigasiHalamanDaftarCatatan();
      },
      customClass: {
        confirmButton: 'is-info',
      }
    }).then((result) => {
      if (result.value) {
        this.navigasiHalamanDaftarCatatan();
      }
    });
  }

  showToastGagal(stringPesan: string = '') {
    Swal.fire({
      icon: 'error',
      text: stringPesan,
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonColor: '#f14668',
      confirmButtonText: 'Setuju',
      allowOutsideClick: false,
      customClass: {
        cancelButton: 'buttoncancel-style',
      }
    });
  }
}
