import { Component, OnInit } from '@angular/core';
import { CatatanItem } from 'src/app/models/CatatanItem';
import { Router } from '@angular/router';
import { ROUTE_BUAT_CATATAN, ROUTE_NAV_KELUAR_CATATAN, ROUTE_DETAIL_CATATAN } from 'src/app/dataparser/Konstans';
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
  isCatatanKosong = true;
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
    this.ambilDaftarCatatan();
  }

  ambilDaftarCatatan() {
    // ambil daftar catatan dari database dengan password
    // yang disimpan di state management
    this.dataService.getDataCatatanStorage(this.userDataTemps.stringPassword)
    .then((result: CatatanItem[]) => {
      if (result && result.length > 0) {
        this.isCatatanTersedia = true;
        this.isCatatanKosong = false;
        this.listCatatan = result;
      } else {
        this.isCatatanKosong = true;
        this.isCatatanTersedia = false;
      }
    })
    .catch((error) => {
      console.warn(error);
      this.isCatatanTersedia = false;
      this.isCatatanKosong = true;
    });
  }

  navigasiHalamanBuatCatatan() {
    this.router.navigate([ROUTE_BUAT_CATATAN]);
  }

  prosesKlikDetail(catatanItemClick: CatatanItem) {
    const tanggalCatatanMS: string = catatanItemClick.tanggalCatatanMs;
    if (tanggalCatatanMS && tanggalCatatanMS.length > 1) {
      this.stateService.setIdCatatanDetail(tanggalCatatanMS);
      this.navigasiHalamanDetailCatatan();
    }
  }

  navigasiHalamanDetailCatatan() {
    this.router.navigate([ROUTE_DETAIL_CATATAN]);
  }

  navigasiHalamanPassGenerator() {

  }

  navigasiHalamanLoginLogout() {
    this.router.navigate([ROUTE_NAV_KELUAR_CATATAN]);
  }

  trackByFn(index: any) {
    return index; // or item.id
  }
}
