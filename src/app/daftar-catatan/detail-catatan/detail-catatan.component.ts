import { Component, OnInit } from '@angular/core';
import { StatedataServicesService } from 'src/app/services/statedata-services.service';
import UserDataTemp from 'src/app/models/UserDataTemp';
import { CatatanItem } from 'src/app/models/CatatanItem';
import { DataLoadersService } from 'src/app/services/data-loaders.service';
import { LoggerDataService } from 'src/app/services/logger-data.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';

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

  catatanItemsModel = {
    judul: '',
    isicatatan: '',
    tanggalcatatan: '',
    tanggalcatatanms: '0',
  };

  constructor(
    private readonly stateService: StatedataServicesService,
    private readonly dataLoaders: DataLoadersService,
    private readonly loggers: LoggerDataService,
  ) { }

  ngOnInit() {
    this.userDataTemps = this.stateService.getIsianDataPenggunaTemp();
    this.idCatatanDetail = this.stateService.getIdCatatanDetail();
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

  }

  hapusDataCatatan() {

  }

  navigasiHalamanDaftarCatatan() {

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
