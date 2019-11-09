import { Component, OnInit } from '@angular/core';
import { CatatanItem } from 'src/app/models/CatatanItem';

@Component({
  selector: 'app-catatan-rahasia-list',
  templateUrl: './catatan-rahasia-list.component.html',
  styleUrls: ['./catatan-rahasia-list.component.scss']
})
export class CatatanRahasiaListComponent implements OnInit {

  isCatatanTersedia = false;
  listCatatan: CatatanItem[] = [];

  constructor() { }

  ngOnInit() {
  }

  ambilDaftarCatatan() {

  }

  navigasiHalamanBuatCatatan() {

  }

  navigasiHalamanPassGenerator() {

  }

  navigasiHalamanLoginLogout() {

  }

}
