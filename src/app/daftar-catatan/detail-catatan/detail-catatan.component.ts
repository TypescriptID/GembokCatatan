import { Component, OnInit } from '@angular/core';
import { StatedataServicesService } from 'src/app/services/statedata-services.service';
import UserDataTemp from 'src/app/models/UserDataTemp';
import { CatatanItem } from 'src/app/models/CatatanItem';
import { DataLoadersService } from 'src/app/services/data-loaders.service';
import { LoggerDataService } from 'src/app/services/logger-data.service';
import { parseTanggalSaatIni, parseTanggalSaatIniMs } from 'src/app/dataparser/TanggalParser';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ROUTE_NAV_DAFTAR_CATATAN } from 'src/app/dataparser/Konstans';

@Component({
  selector: 'app-detail-catatan',
  templateUrl: './detail-catatan.component.html',
  styleUrls: ['./detail-catatan.component.scss']
})
export class DetailCatatanComponent implements OnInit {

  public editorText = ClassicEditor;

  configEditor = {
    toolbar: ['heading', '|', 'bold', 'italic', 'link',
      'bulletedList', 'numberedList', 'blockQuote',
      '|', 'undo', 'redo', '|', 'outdent', 'indent'],
    placeholder: 'Isi pesan catatan disini'
  };

  userDataTemps: UserDataTemp = new UserDataTemp();
  idCatatanDetail = '';
  catatanItemDetail: CatatanItem = new CatatanItem();
  userPassTemp = '';

  catatanItemsModel = {
    judul: '',
    isicatatan: '',
    tanggalcatatan: '',
    tanggalcatatanms: '0',
  };

  listCatatan: CatatanItem[] = [];

  constructor(
    private readonly stateService: StatedataServicesService,
    private readonly dataLoaders: DataLoadersService,
    private readonly loggers: LoggerDataService,
    private readonly routers: Router,
  ) { }

  ngOnInit() {
    this.userDataTemps = this.stateService.getIsianDataPenggunaTemp();
    this.userPassTemp = this.userDataTemps.stringPassword;
    this.idCatatanDetail = this.stateService.getIdCatatanDetail();

    // panggil pertama kali untuk memuat detail catatan
    this.getDataCatatanDetail();
  }

  getDataCatatanDetail() {
    this.dataLoaders.getDataCatatanDetail(this.userDataTemps.stringPassword,
      this.idCatatanDetail)
      .then((catatanItem: CatatanItem) => {
        if (catatanItem) {
          const judulCatatan: string = catatanItem.judul;
          if (judulCatatan && judulCatatan.length > 0) {
            this.catatanItemDetail = catatanItem;
            this.setTampilanDataCatatan();
          } else {
            this.showToastGagal('Gagal menampilkan detail catatan');
          }
        }
      })
      .catch((errors) => {
        this.loggers.logData(errors);
        this.showToastGagal('Gagal menampilkan detail catatan');
      });
  }

  setTampilanDataCatatan() {
    const judulCatatan: string = this.catatanItemDetail.judul;
    const isiCatatan: string = this.catatanItemDetail.isiCatatan;
    if (judulCatatan && isiCatatan) {
      this.catatanItemsModel.judul = judulCatatan;
      this.catatanItemsModel.isicatatan = isiCatatan;
    } else {
      this.showToastGagal('Gagal menampilkan detail catatan');
    }
  }

  cekIsianCatatan() {
    if (this.catatanItemsModel.judul && this.catatanItemsModel.judul.length > 5) {
      if (this.catatanItemsModel.isicatatan && this.catatanItemsModel.isicatatan.length > 5) {
        this.buatSimpanCatatan();
      } else {
        this.showToastGagal('Silahkan isi catatan rahasia dengan benar');
      }
    } else {
      this.showToastGagal('Silahkan isi judul catatan dengan benar');
    }
  }

  buatSimpanCatatan() {
    this.catatanItemsModel.tanggalcatatan = parseTanggalSaatIni();
    this.catatanItemsModel.tanggalcatatanms = parseTanggalSaatIniMs();
    const userDataTemp: UserDataTemp = this.stateService.getIsianDataPenggunaTemp();

    if (userDataTemp.stringPassword && userDataTemp.stringPassword.length > 3) {
      // ambil data catatan yang lama
      this.userPassTemp = userDataTemp.stringPassword;
      this.dataLoaders.getDataCatatanStorage(this.userPassTemp).then((result: CatatanItem[]) => {
        this.listCatatan = result;
        this.simpanDataCatatan();
      })
        .catch((err) => {
          console.warn(err);
        });
    }
  }

  simpanDataCatatan() {
    const catatanItem = new CatatanItem(this.catatanItemsModel.judul, this.catatanItemsModel.isicatatan,
      this.catatanItemsModel.tanggalcatatan, this.catatanItemsModel.tanggalcatatanms);

    this.dataLoaders.setDataCatatanStorageEdit(this.userPassTemp, catatanItem, this.listCatatan,
      this.idCatatanDetail)
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

  hapusDataCatatan() {
    // hapus data catatan yang dipilih ini dari json data
    const idCatatan = this.catatanItemDetail.tanggalCatatanMs;
    this.dataLoaders.hapusDataCatatanDetail(this.userPassTemp, idCatatan)
      .then((result: CatatanItem[]) => {
        if (result) {
          this.showToastSukses('Catatan ini telah berhasil dihapus');
        } else {
          this.showToastGagal('Catatan gagal dihapus');
        }
      })
      .catch((errors) => {
        this.loggers.logData(errors);
        this.showToastGagal('Catatan gagal dihapus');
      });
  }

  navigasiHalamanDaftarCatatan() {
    this.routers.navigate([ROUTE_NAV_DAFTAR_CATATAN], { replaceUrl: true });
  }


  showToastSukses(stringPesan: string) {
    Swal.fire({
      type: 'success',
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

  showToastGagal(stringMessage: string) {
    Swal.fire({
      type: 'error',
      text: stringMessage,
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
