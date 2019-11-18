import { Component, OnInit } from '@angular/core';
import { CatatanItem } from 'src/app/models/CatatanItem';
import { Router } from '@angular/router';
import { ROUTE_BUAT_CATATAN } from 'src/app/dataparser/Konstans';
import { StatedataServicesService } from 'src/app/services/statedata-services.service';
import { DataLoadersService } from 'src/app/services/data-loaders.service';
import UserDataTemp from 'src/app/models/UserDataTemp';

@Component({
  selector: 'app-catatan-rahasia-list',
  templateUrl: './catatan-rahasia-list.component.html',
  styleUrls: ['./catatan-rahasia-list.component.scss']
})
export class CatatanRahasiaListComponent implements OnInit {

  isCatatanTersedia = false;
  listCatatan: CatatanItem[] = [];
  userDataTemps = new UserDataTemp();

  constructor(
    private router: Router,
    private dataService: DataLoadersService,
    private stateService: StatedataServicesService
  ) { }

  ngOnInit() {
    this.userDataTemps = new UserDataTemp();
    this.getDataPasswordTemp();
  }

  getDataPasswordTemp() {
    this.userDataTemps = this.stateService.getIsianDataPenggunaTemp();
  }

  ambilDaftarCatatan() {
    // ambil daftar catatan dari database dengan password
    // yang disimpan di state management
    this.dataService.getDataCatatanStorage(this.userDataTemps.stringPassword)
    .then((result: CatatanItem[]) => {

    })
    .catch((error) => {
      console.warn(error);
    });
  }

  navigasiHalamanBuatCatatan() {
    this.router.navigate([ROUTE_BUAT_CATATAN]);
  }

  navigasiHalamanPassGenerator() {

  }

  navigasiHalamanLoginLogout() {

  }

}
