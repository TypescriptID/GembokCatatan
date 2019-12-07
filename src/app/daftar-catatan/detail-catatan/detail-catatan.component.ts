import { Component, OnInit } from '@angular/core';
import { StatedataServicesService } from 'src/app/services/statedata-services.service';
import UserDataTemp from 'src/app/models/UserDataTemp';
import { CatatanItem } from 'src/app/models/CatatanItem';
import { DataLoadersService } from 'src/app/services/data-loaders.service';
import { LoggerDataService } from 'src/app/services/logger-data.service';

@Component({
  selector: 'app-detail-catatan',
  templateUrl: './detail-catatan.component.html',
  styleUrls: ['./detail-catatan.component.scss']
})
export class DetailCatatanComponent implements OnInit {

  userDataTemps: UserDataTemp = new UserDataTemp();
  idCatatanDetail = '';
  catatanItemDetail: CatatanItem = new CatatanItem();

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

  }

  showToastGagal(stringMessage: string) {

  }

}
