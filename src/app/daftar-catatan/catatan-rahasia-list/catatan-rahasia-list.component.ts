import { Component, OnInit } from '@angular/core';
import { CatatanItem } from 'src/app/models/CatatanItem';
import { Router } from '@angular/router';
import { ROUTE_CATATAN } from 'src/app/dataparser/Konstans';

@Component({
  selector: 'app-catatan-rahasia-list',
  templateUrl: './catatan-rahasia-list.component.html',
  styleUrls: ['./catatan-rahasia-list.component.scss']
})
export class CatatanRahasiaListComponent implements OnInit {

  isCatatanTersedia = false;
  listCatatan: CatatanItem[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  ambilDaftarCatatan() {

  }

  navigasiHalamanBuatCatatan() {
    this.router.navigate([ROUTE_CATATAN]);
  }

  navigasiHalamanPassGenerator() {

  }

  navigasiHalamanLoginLogout() {

  }

}
